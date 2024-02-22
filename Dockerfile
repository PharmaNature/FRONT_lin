FROM node:current-alpine3.18

WORKDIR /site_web_lin

COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm", "start"]