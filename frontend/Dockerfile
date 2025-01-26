ARG NODE_VERSION=20.15.0

FROM node:${NODE_VERSION}-alpine

ENV VITE_APP_BASE_URL=http://54.196.175.240:5001

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD npm run dev
