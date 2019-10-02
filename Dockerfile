from node:12.10-alpine

# Create App Directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle App Source
COPY . .

EXPOSE 8000

CMD [ "node", "server.js" ]