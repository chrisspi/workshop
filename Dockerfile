FROM node:26-alpine3.23
COPY . .
RUN npm install
EXPOSE 3000
CMD ["node", "server.js"]