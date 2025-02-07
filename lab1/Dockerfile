# Вибір базового образу веб-сервера Apache
FROM httpd:2.4

# Копіюємо ваш index.html в директорію веб-сервера
COPY ./public/index.html /usr/local/apache2/htdocs/
COPY ./public/1.png /usr/local/apache2/htdocs/

# Відкриваємо порт 80 для доступу
EXPOSE 80