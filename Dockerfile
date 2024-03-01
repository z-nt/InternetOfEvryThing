FROM nginx:stable-alpine
COPY COPY . /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/defalt.conf
EXPOSE 80
CMD ["nginx", "-g", "demon off;"]
