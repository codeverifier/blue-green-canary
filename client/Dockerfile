FROM node:16.13.1-alpine3.14 as builder

WORKDIR /app
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci --silent
RUN npm install react-scripts@4.0.3 -g --silent
COPY public/ public/
COPY src/ src/

RUN npm run build

FROM nginx:stable-alpine
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html