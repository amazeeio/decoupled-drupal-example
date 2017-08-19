FROM amazeeio/centos7-drupal-builder:7.0

COPY composer.json composer.lock /app/
COPY scripts /app/scripts
COPY . /app
RUN composer install --no-dev

