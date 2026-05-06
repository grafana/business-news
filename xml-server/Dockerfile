FROM node@sha256:d15867b60cf18766c9671e9e15bfdbde8639d1741193242aac88734937c50751

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
