#! /bin/bash

npm run build
sudo /etc/nginx -s stop
echo 'nginx stop success'
sudo rm -rf /usr/share/nginx/html/i-website/
sudo mkdir /usr/share/nginx/html/i-website
sudo mv /home/lighthouse/github/i-website/dist/* /usr/share/nginx/html/i-website/
sudo /etc/nginx
echo 'nginx start success'
