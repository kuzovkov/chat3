FROM node:12
WORKDIR /usr/src/env
COPY . .
RUN npm install
RUN npm install -g webpack webpack-cli
RUN npm install -g @vue/cli && npm install -g @vue/cli-service-global && npm install -g @vue/cli-init
RUN apt-get update && apt-get install -y nginx
CMD ["nginx", "-g", "daemon off;"]