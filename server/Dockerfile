FROM node:16.13.1-alpine3.14

WORKDIR /app

COPY ["package.json", "package-lock.json", ".babelrc", "./"]

RUN npm ci --silent

COPY index.js .
COPY config/ config/
COPY controllers/ controllers/

EXPOSE 5000

CMD ["npm", "start"]