FROM node:20-bullseye

RUN corepack enable

WORKDIR /workspace

COPY .yarn /workspace/.yarn
COPY package.json yarn.lock /workspace/

# Install dependencies (Yarn Berry)
RUN yarn install

CMD [ "bash" ]
