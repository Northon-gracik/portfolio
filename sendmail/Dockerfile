FROM node:13-alpine

WORKDIR sendmail

COPY . .

RUN npm i

EXPOSE 8000

CMD ["npm", "run", "start"]