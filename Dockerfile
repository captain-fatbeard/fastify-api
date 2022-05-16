FROM node:16.13-alpine AS dependencies
WORKDIR /app
COPY package.json package-lock.json ./
EXPOSE 3000

FROM dependencies as development
WORKDIR /app
ENV NODE_ENV=development
RUN npm i
RUN npm i -g prisma@latest
COPY . .
RUN npx prisma generate
# CMD ["npm", "run", "dev"]

FROM dependencies as production
WORKDIR /app
ENV NODE_ENV=production
RUN npm ci
COPY . .
# RUN npm run build
# CMD ["node", "bin/www"]
