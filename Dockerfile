# Pulling the nginx image
FROM nginx:alpine

MAINTAINER kmehant<kmehant@scorelab.org>

# Copying contents in to the container
COPY . /usr/share/nginx/html

# Exposing the ports for the web interface
EXPOSE 80




