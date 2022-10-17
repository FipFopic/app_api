FROM node:18-alpine AS builder

WORKDIR /root/backend/app/build

COPY . .

RUN npm run deploy

#======

FROM node:18-alpine AS production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /root/backend/app/build

COPY --from=builder /root/backend/app/build/package*.json .
COPY --from=builder /root/backend/app/build/node_modules/ ./node_modules
COPY --from=builder /root/backend/app/build/dist/ ./dist

CMD [ "node", "dist/main.js" ]
