FROM node:16-alpine

COPY app /usr/app
WORKDIR /usr/app

ENV NODE_ENV=development
ENV CHOKIDAR_USEPOLLING=true

EXPOSE 3000

CMD npm start
