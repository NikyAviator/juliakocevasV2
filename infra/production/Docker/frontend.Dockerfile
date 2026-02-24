# Dockerfile for PRODUCTION
# --- Build step ---
FROM node:22-alpine AS build
WORKDIR /app

COPY frontend/package*.json ./
RUN npm ci

COPY frontend/ ./
RUN npm run build

# --- Runtime step ---
FROM nginx:stable-alpine

# Static files
COPY --from=build /app/dist /usr/share/nginx/html

# Copy template to a neutral location (not /etc/nginx/templates/)
COPY infra/production/Docker/nginx.prod.template.conf /etc/nginx/app.conf.

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]