FROM node:13-alpine

WORKDIR app

ENV MONGODB_URI='mongodb://127.0.0.1/nodeRest'

ENV SECRET_KEY='fb94c9b2-f885-43d1-ae7a-a7d024540971'

ENV CLIENT_URL='http://localhost:3000'


COPY . .

RUN npm i

EXPOSE 8000

CMD ["npm", "run", "start"]