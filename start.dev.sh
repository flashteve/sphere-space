#!/bin/zsh
set -e

echo "Build the images"
docker build -t sphere-space/ngnix -f ./docker/dev.dockerfile .

echo "Run the container"
docker run -d --name sphere-space -p 8080:80 -v ${PWD}/dist:/usr/share/nginx/html/dist -v ${PWD}/public:/usr/share/nginx/html/public -v ${PWD}/index.html:/usr/share/nginx/html/index.html sphere-space/ngnix
