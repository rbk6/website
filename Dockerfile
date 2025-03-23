# base stage
FROM node:18-alpine AS base
WORKDIR /website

# install dependencies
COPY package*.json ./
RUN npm install

# development stage
FROM base AS development
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# production stage
FROM base AS build
COPY . .
RUN npm run build
