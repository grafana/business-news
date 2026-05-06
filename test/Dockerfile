FROM mcr.microsoft.com/playwright:v1.59.1-noble@sha256:b0ab6f3cb99aa7803adbc14d9027ec1785fc6e433b97e134e0f8fe61683b6b53

WORKDIR /app

# Copy manifests first so the install layer is cached until dependencies change
COPY package.json package-lock.json ./

# Deterministic install using the lockfile; prod deps are not needed in the test runner
RUN npm ci --omit=prod

# Copy playwright config and source files referenced by tests
COPY playwright.config.ts tsconfig.json ./
COPY src/ src/

CMD ["npm", "run", "test:e2e"]
