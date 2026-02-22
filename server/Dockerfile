FROM node:18-alpine

#set working dir inside container
WORKDIR /Accommate

#copy package.json files and install dependencies
COPY package*.json ./
RUN npm install

#copy rest of the backend source code
COPY . .

#expose backend port
EXPOSE 8080

#start backend
CMD ["npm", "start"]