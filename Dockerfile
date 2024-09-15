# Dockerfile for React Next.js App

FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Default to production
ARG NODE_ENV=dev
ENV NODE_ENV=${NODE_ENV}

# Expose the port
EXPOSE 3000

# Use npm run dev if in development, otherwise npm start
# CMD ["sh", "-c", "npm run ${NODE_ENV}"]
CMD ["npm", "run", "dev"]

