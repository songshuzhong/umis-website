#! /bin/bash

npm run build

sudo /usr/local/nginx/sbin/nginx -s stop
sudo rm -rf /usr/local/nginx/html/i-website/
sudo mkdir /usr/local/nginx/html/i-website
sudo mv /home/lighthouse/github/i-website/dist/* /usr/local/nginx/html/i-website/
sudo /usr/local/nginx/sbin/nginx
