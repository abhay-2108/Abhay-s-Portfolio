from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.message import EmailMessage
import os
from dotenv import load_dotenv

# Load environment variables
load_dotenv()

EMAIL_USER = os.getenv('EMAIL_USER')
EMAIL_PASS = os.getenv('EMAIL_PASS')
RECEIVER_EMAIL = "abhaytiwari0821@gmail.com"

app = Flask(__name__)

# Fix CORS error
CORS(app, resources={r"/send-email": {"origins": "http://localhost:5173"}}, supports_credentials=True)

@app.route('/send-email', methods=['POST'])
def send_email():
    data = request.json
    if not data:
        return jsonify({'success': False, 'message': 'No data received.'}), 400

    name = data.get('name')
    email = data.get('email')  
    subject = data.get('subject')
    message = data.get('message')

    if not name or not email or not subject or not message:
        return jsonify({'success': False, 'message': 'All fields are required.'}), 400

    msg = EmailMessage()
    msg['Subject'] = f'New Message from {name} - {subject}'
    msg['From'] = EMAIL_USER 
    msg['To'] = RECEIVER_EMAIL  
    msg['Reply-To'] = email  
    msg.set_content(f"""
    You have received a new message from your portfolio website:
    
    Name: {name}
    Email: {email}
    
    Subject: {subject}
    
    Message:
    {message}
    
    --
    This message was sent from your portfolio contact form.
    """)

    try:
        print("✅ Connecting to SMTP server...")
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            print("✅ Logging in...")
            server.login(EMAIL_USER, EMAIL_PASS)
            print("✅ Sending email...")
            server.send_message(msg)
            print("✅ Email sent successfully!")

        response = jsonify({'success': True, 'message': 'Email sent successfully!'})
        response.headers.add("Access-Control-Allow-Origin", "http://localhost:5173")
        response.headers.add("Access-Control-Allow-Headers", "Content-Type, Authorization")
        response.headers.add("Access-Control-Allow-Methods", "POST")
        return response, 200

    except smtplib.SMTPAuthenticationError:
        print("❌ SMTP Authentication Error: Check your EMAIL_USER and EMAIL_PASS.")
        return jsonify({'success': False, 'message': 'Authentication failed. Check your EMAIL_USER and EMAIL_PASS in .env'}), 401
    except smtplib.SMTPConnectError:
        print("❌ SMTP Connection Error: Check your network and Google security settings.")
        return jsonify({'success': False, 'message': 'SMTP connection failed. Check network and Google settings.'}), 500
    except Exception as e:
        print(f"❌ General SMTP Error: {str(e)}")
        return jsonify({'success': False, 'message': 'Failed to send email.', 'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5000)
