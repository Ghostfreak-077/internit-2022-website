FROM node:20-alpine

# We use nodemon to restart the server every time there's a change

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

# Use script specified in package,json
CMD ["npm", "run", "start"]
# CMD [ "ls", "-a" ]