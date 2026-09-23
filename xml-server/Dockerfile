FROM node@sha256:a723b54c35a76e947095a20a67d39585bb09c862e6b1adeb8a9f518f95e34fb0

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
