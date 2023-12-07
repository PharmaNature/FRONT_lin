FROM node:latest

WORKDIR /site_web_lin

COPY . .

EXPOSE 3000

RUN npm i

CMD ["npm", "start"]