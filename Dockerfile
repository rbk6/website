# Base Stage (dev and prod)
FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Development Stage
FROM base AS development
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

# Production Stage
FROM base AS build
COPY . .
RUN npm run build

# Production Stage
FROM alpine:latest AS production
ARG DOC_ROOT=/usr/local/apache2/htdocs/
RUN rm -rf ${DOC_ROOT}/*
COPY --from=build /app/build/ ${DOC_ROOT}
CMD ["httpd", "-D", "FOREGROUND"]
