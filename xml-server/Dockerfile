FROM node@sha256:f5d1cc40abc10c2843339a2134d07817cf33c405cb16bfd052b0ed790254c3a3

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
