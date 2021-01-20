# Ejemplo 3 - Demostración

## Objetivo

- Conocer y comprender los fundamentos de conceptos como dominio, DNS y configuraciones iniciales para conectar una aplicación.

## Requerimientos

- Este ejemplo se mostrará como una <b>demostración</b> por parte del experto. ( En caso de que cuentes con un dominio personal, pudes intentar llevarlo a cabo. )
- Contar con el código de la API en una cuenta de Github y una cuenta en Heroku.
- Contar con un dominio y llaves de acceso a su configuración DNS. 

## Desarrollo

### Glosario:

- **Dominio:** Un dominio (domain name) es el nombre que utilizamos para acceder a una app por medio de palabras y no una dirección IP. Por ejemplo, www.tudominio.com
- **Subdominio:** un dominio base como [tudominio.com](http://tudominio.com) puede tener prefijos cómo [dany.tudominio.com](http://dany.tudominio.com) o el mismo www.tudominio.com. Estos pueden ser referidos a una app totalmente diferente.
- **DNS:** (Domain Name System) o sistema de nombres de dominio, es un servicio que habilita un enlace entre nombres de dominio y direcciones IP con la que están asociados.
- **Proveedor DNS:** La empresa que nos proporciona servicios de gestión de los archivos de configuración de nuestro dominio y comúnmente también nos permite registrar y gestionar nuevos dominios.

### Conectar un dominio

Al hacer deploy de nuestra aplicación, Heroku automáticamente le asigna un dominio personalizado a nuestra API.

Para configurar un dominio personalizado con Heroku primero debemos de tener un dominio registrado y acceso a sus archivos de configuración DNS.

1. Para registrar un dominio puedes acudir a distintas empresas registrantes y pagar por el nombre de un dominio. Como recomendación puedes utilizar [Google domains](https://domains.google.com/), [namecheap](https://www.namecheap.com/) o Godaddy.

    ![img/Untitled.png](img/Untitled.png)

2. En tu aplicación de Heroku, dirígete a settings y en la sección de Domains añade el dominio que registraste.

    ![img/Untitled%201.png](img/Untitled%201.png)

3. Accede a la configuración DNS de tu dominio por medio de tu proveedor.
4. Configura un nuevo subdominio para tu api agregando un nuevo registro sintético, el siguiente es un ejemplo de cómo hacer esto en Google Domains.

    ![img/Screen_Shot_2020-06-22_at_23.35.16.png](img/Screen_Shot_2020-06-22_at_23.35.16.png)

    Para Godaddy, Modifica el registro CNAME que tiene como host "www"

    ![img/Screen_Shot_2020-06-22_at_22.28.47.png](img/Screen_Shot_2020-06-22_at_22.28.47.png)

5. Espera a que los cambios se vean reflejados.
6. Una vez hecho esto accede al dominio de tu API
