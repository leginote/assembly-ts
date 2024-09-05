FROM node:20-bullseye

RUN corepack enable

WORKDIR /workspace

COPY .yarn /workspace/.yarn
COPY package.json yarn.lock /workspace/

CMD [ "bash" ]
