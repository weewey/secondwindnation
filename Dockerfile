FROM node:9.0.0

WORKDIR /usr/src/app

COPY package.json .

RUN yarn install

COPY . .

EXPOSE 8081

ENV NODE_ENV="production"

CMD ["yarn", "start"]
