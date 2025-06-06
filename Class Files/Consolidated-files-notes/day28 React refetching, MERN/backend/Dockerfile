# 1. Base Image
FROM node:22-alpine

# 2. Working Directory
WORKDIR /app

# 3. Dependencies
# COPY package.json ./
COPY package*.json ./
RUN npm ci

# 4. Copy source code
COPY . .

# 5. ENV & port
ENV PORT=3000
EXPOSE 3000

# 6. Launch app
CMD ["npm", "run", "dev"]

# different dockerfile targets AS dev and prod
# You can have multiple Dockerfiles targets
# for dev and prod, AS dev, AS prod

