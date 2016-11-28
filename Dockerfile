FROM node:6

COPY . /app
WORKDIR /app

RUN npm install && \
  npm run build && \
  npm test && \
  rm -r src && \
  npm prune --production && \
  groupadd -r nodejs && \
  useradd -m -r -g nodejs nodejs

USER nodejs

EXPOSE 8080

CMD ["npm", "start"]
