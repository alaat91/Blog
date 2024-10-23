# Use official node image as the base image
FROM node:17-alpine AS build

# Set working directory
WORKDIR /app

# Install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install

# Copy app files and build
COPY . .
RUN npm run build

# Use an Nginx image to serve the build files
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]