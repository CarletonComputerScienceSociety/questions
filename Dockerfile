# Step 1: Build the Astro site
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Expose default static site port
EXPOSE 10000

#run
# CMD ["npm", "run", "dev"]

# # update in future
# # Step 2: Use a lightweight image to serve the site
# FROM node:18-alpine

# # Install a static server (you could also use nginx here)
# RUN npm install -g serve

# # Set working directory
# WORKDIR /app

# # # Copy built files from previous stage
# COPY --from=build /app/dist .

# # # Start the static server
# CMD ["serve", "-s", ".", "-l", "10000"]


