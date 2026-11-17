FROM node@sha256:e18c3ccdf7d71619990b0e85639f506e2028a95410999cab24cc373cbd10e0ac

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
