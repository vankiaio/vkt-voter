#!/bin/sh
certbot certonly --renew-by-default --webroot --webroot-path=/srv/vkt-voter/public --domain=vkt-voter.example.com
/usr/sbin/service nginx reload

