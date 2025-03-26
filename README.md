```shell
docker run -d -p 808:80 --name cjw nginx
```
```shell
docker cp /tools/cjw/exam/dist/. cjw:/usr/share/nginx/html/
```
```shell
docker restart cjw
```
```shell
docker stop cjw
```
```shell
docker remove cjw
```
```shell
docker exec -it cjw /bin/bash
```
```shell
echo 'server {
listen 80;
server_name 121.40.154.188;
    location / {
        root /usr/share/nginx/html;
        index index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
# 静态资源缓存配置
    location ~* \.(jpg|jpeg|png|gif|ico|css|js)$ {
        expires 30d;
        add_header Cache-Control "public, no-transform";
    }
}' > /etc/nginx/conf.d/default.conf
```
```shell
exit
```
```shell

```






