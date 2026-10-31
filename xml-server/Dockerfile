FROM node@sha256:6d2c7d5d074bf72f81ddc252b4fbb5d625bc028eeda49cb4b8c2ff8eda1ee617

## Create app directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY . . 

# Install dependencies
RUN npm install

# Expose the port your application is running on
EXPOSE 8001

# Start the application
CMD node index.js --port 8001
