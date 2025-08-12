# backend/Dockerfile

# Base image ga Node.js 18-alpine ni use chestunnam.
FROM node:18-alpine

# Container lo application files pettadaniki oka directory create chestunnam.
WORKDIR /app

# package.json and package-lock.json files ni munduga copy chestunnam.
COPY package*.json ./

# Project dependencies ni install chestunnam.
RUN npm install

# Migatha source code antha copy chestunnam.
COPY . .

# --- EE KOTTHA STEP CHALA MUKHYAM ---
# TypeScript code ni JavaScript ki compile cheyyadam.
# Idi 'dist' ane folder ni create chestundi.
RUN npm run build

# Mee backend application run ayye port
EXPOSE 8080

# Container start ayinapudu ee command run cheyyali.
# Ippudu /app/dist/server.js ane file untundi kabatti, ee command work avuthundi.
CMD ["npm", "start"]