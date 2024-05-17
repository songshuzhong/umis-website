#! /bin/bash

npm run build
sudo rm -rf /usr/share/nginx/html/i-website/
sudo mkdir /usr/share/nginx/html/i-website
sudo mv /home/lighthouse/github/i-website/dist/* /usr/share/nginx/html/i-website/
sudo nginx -s reload
echo 'nginx start success'
