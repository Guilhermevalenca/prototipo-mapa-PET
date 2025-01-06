FROM node:20-alpine

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install -g @angular/cli

RUN npm install -g @ionic/cli native-run cordova-res

RUN npm install
