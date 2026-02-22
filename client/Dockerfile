# ------ Development ------
FROM node:25-alpine AS development

WORKDIR /Accommate

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev"]

# ------ Production Build ------
FROM node:25-alpine AS build

WORKDIR /Accommate

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# ------ Production Server ------
FROM nginx:alpine

COPY --from=build /Accommate/dist /usr/share/nginx/html

# expose port to react
EXPOSE 80

# run nginx in foreground
CMD ["nginx", "-g", "daemon off;"]