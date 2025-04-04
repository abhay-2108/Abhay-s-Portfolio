# Stage 1: Build React Frontend
FROM node:18 AS build
WORKDIR /Portfolio

# Copy package.json and package-lock.json first to leverage Docker caching
COPY package.json package-lock.json ./

# Install dependencies with forced clean cache to avoid corruption issues
RUN npm cache clean --force && npm install --legacy-peer-deps

COPY . .

# Ensure esbuild does not interfere
RUN rm -rf node_modules/.cache/esbuild

RUN npm run build

# Stage 2: Setup Flask Backend
FROM python:3.10
WORKDIR /Portfolio

# Copy built frontend from the previous stage
COPY --from=build /Portfolio/dist /Portfolio/frontend

# Install Python dependencies
RUN pip install flask flask_cors python-dotenv

COPY . .

# Expose Flask port
EXPOSE 5000
CMD ["python", "app.py"]
