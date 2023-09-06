FROM node:20-slim

# USER root

RUN apt update && apt install -y --no-install-recommends \
    git \
    ca-certificates

WORKDIR /home/node/app

USER node

CMD ["sh", "-c", "npm install && tail -f /dev/null"]