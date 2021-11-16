FROM node:14-alpine3.14

WORKDIR /opt/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

CMD ["npm", "start"]
