FROM node@sha256:f8e5d4bb28fa55c74f1345166a082a10b7c68f22304350c1ce0d18358ae94996

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
