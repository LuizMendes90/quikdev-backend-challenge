FROM node:14-alpine

ARG WORKDIR=/var/quikuser

WORKDIR ${WORKDIR}

COPY . .

RUN npm ci
RUN npm cache clean --force

EXPOSE 3000

CMD ["npm", "run", "dev"]