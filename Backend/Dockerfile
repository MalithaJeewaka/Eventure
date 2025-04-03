FROM malithajeewaka/baseimages:base

WORKDIR /app

# Copy the backend package.json first
COPY ./package*.json ./
# Install dependencies
RUN npm install

# Copy the rest of the backend code
COPY . .

EXPOSE 5000

CMD ["npm", "start"]