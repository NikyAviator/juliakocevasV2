# Step 1: Use Node.js 23.9-alpine3.20 as the base image (https://hub.docker.com/_/node?tab=description&amp%3Bpage=1&amp%3Bname=alpine)
FROM node:23.9-alpine3.20 as dev

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN rpm run dev

# Step 2: Use an Nginx image to serve the static files
# (https://www.docker.com/blog/how-to-use-the-official-nginx-docker-image/)
# (https://nginx.org/en/docs/beginners_guide.html#proxy)

FROM nginx:latest 

# Copy the build files from the previous step to the default Nginx public directory
# COPY ./index.html /usr/share/nginx/html/index.html

