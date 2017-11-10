FROM node:9.0.0

WORKDIR /usr/src/app

COPY package.json .

RUN npm i

COPY . .

RUN npm run build

EXPOSE 8081

CMD ["yarn", "start"]
