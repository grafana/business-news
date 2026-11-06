FROM node@sha256:438603bbb5cda404b9416f0b5c8026f61501ab911760d861ec28c36b5d675725

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
