FROM node:16.15-alpine
USER node
RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY --chown=node . .
RUN yarn cache clean
CMD ["yarn", "dev"]
