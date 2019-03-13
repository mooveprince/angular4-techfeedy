FROM node:alpine as builder

WORKDIR '/app'

COPY package.json .
RUN npm install
RUN npm audit fix
RUN npm install -g @angular/cli

COPY . .
RUN ng build

FROM nginx

COPY --from=builder /app/dist /usr/share/nginx/html