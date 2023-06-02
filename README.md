# ayudantia-monitoreo-2023-1

## Monitoreo de Infraestructura

Este tipo de monitoreos se hacen directo en el servidor que estamos usando. Con este tipo de monitoreo podemos ver el uso de nuestro hardware y datos extras sobre estos.

Para usarlo con new relic debemos configurar nuestra instancia para que envíe estos datos siguiendo la [siguiente guía](https://docs.newrelic.com/docs/infrastructure/install-infrastructure-agent/get-started/install-infrastructure-agent/).

## Monitoreo de aplicación

Este tipo de monitoreos permite monitorear el estado de la aplicación y datos extras que nosotros le queramos dar de forma más customizada. Está pensado en ver métricas de performance, uso de memoria, y de mantener un registro de datos que queramos monitorear. Para esto en New Relic deben ir a:

* Sección `+ Add Data`
* Sección `Application Monitoring`
* Elegir el lenguaje que usan.
* Elegir el entorno en el que corre (para el caso del proyecto debe ser Docker)
* Configurar su Docker Compose para que funcione con los comandos que correrían con Docker solos. Para eso pueden ver el archivo `docker-compose.yml` y el `Dockerfile` de este repositorio como referencia.
* Hacer build de la aplicación, setear las variables de entorno y correr la aplicación.
