FROM node:16 as base


WORKDIR /app

CMD [ "npm", "run", "watch" ]

EXPOSE 8080

FROM node:16 as builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .

RUN npm run build


FROM node:16

ARG ARTIFACTORY_ACCESS_TOKEN

WORKDIR /app

COPY package*.json ./

COPY --from=builder /app/dist .

CMD [ "node", "index.js" ]

EXPOSE 8080
