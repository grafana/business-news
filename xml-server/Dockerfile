FROM node@sha256:f6f9fae352b319e817eec5efc7721b3f06bc53104f2f800d0f778f3915835804

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
