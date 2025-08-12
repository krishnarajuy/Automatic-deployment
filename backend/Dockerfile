# backend/Dockerfile - FINAL VERSION

# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source code
COPY . .

# --- THIS IS THE CRITICAL STEP ---
# Build the TypeScript code into JavaScript
# This command will create the 'dist' folder
RUN npm run build

# Expose the port the app runs on
EXPOSE 8080

# The command to start the application
# This will now work because the 'dist' folder exists
CMD [ "node", "dist/server.js" ]