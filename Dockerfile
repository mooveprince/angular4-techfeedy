FROM node:alpine as builder
WORKDIR '/app'
COPY ./package.json ./
RUN npm install
RUN npm install -g @angular/cli
COPY . .
RUN ng build

FROM nginx
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html