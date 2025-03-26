docker run -d -p 808:80 --name cjw nginx
docker cp /tools/cjw/exam/dist/. cjw:/usr/share/nginx/html/