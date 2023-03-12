FROM node:16.15-alpine
RUN apk add -U git
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node . .
RUN yarn install && yarn cache clean && yarn backstage-cli versions:check --fix
