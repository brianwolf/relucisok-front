# BUILDER
# ---------------------------------------

FROM node:18-alpine AS builder

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY . .
RUN npm install --force

RUN npm run build

# APP
# ---------------------------------------

FROM docker.io/nginxinc/nginx-unprivileged:latest

WORKDIR /usr/share/nginx/html

USER root

COPY --from=builder /app/dist/ .
COPY nginx.conf /etc/nginx/nginx.conf

RUN chmod 777 . -R

USER nginx

ARG ARG_VERSION=local

ENV VERSION=${ARG_VERSION}
ENV TZ=America/Argentina/Buenos_Aires

CMD ["/bin/bash", "-c", "nginx-debug -g 'daemon off;'"]
