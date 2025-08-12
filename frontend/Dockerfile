# frontend/Dockerfile - FINAL VITE VERSION

# ----- STAGE 1: Build -----
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# ----- STAGE 2: Serve -----
FROM nginx:stable-alpine

# VITE 'dist' FOLDER NI CREATE CHESTUNDI, SO MANAM DAANINI COPY CHEYYALI.
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]