FROM node:lts-alpine3.18

ADD ./hotreload-server.tar.gz /opt/hotreload-server

EXPOSE 5555

CMD [ "/usr/local/bin/node", "/opt/hotreload-server/index.js" ]
