# frontend/Dockerfile

# ----- STAGE 1: Build -----
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . .

# ----------------- DEBUGGING COMMANDS START -----------------
# Build ki mundu, ee folder lo em files unnayo chuddam.
RUN echo "--- Listing files BEFORE build ---" && ls -la

# 'npm run build' tho production build create cheyadam
RUN npm run build

# Build tarvata, ee folder lo em files unnayo chuddam.
# Ikkada manaku 'dist' or 'build' ane folder kanipinchali.
RUN echo "--- Listing files AFTER build ---" && ls -la
# ----------------- DEBUGGING COMMANDS END -----------------


# ----- STAGE 2: Serve -----
FROM nginx:stable-alpine

# MANAM VITE VADUTUNNAM KABATTI, 'dist' UNDALI.
COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]