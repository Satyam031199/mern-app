ARG NODE_VERSION=20.15.0

FROM node:${NODE_VERSION}-alpine

ENV MONGO_URI=mongodb+srv://satyam-chaturvedi:satyam-chaturvedi@satyamcluster.yvb6qzy.mongodb.net/mern-auth?retryWrites=true&w=majority&appName=satyamCluster
ENV PORT=5001

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5001

CMD npm run dev
