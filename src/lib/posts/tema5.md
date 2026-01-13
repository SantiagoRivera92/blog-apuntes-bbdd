---
title: Bases de Datos - Tema 5 - Modelado Físico
date: 2025-12-09
author: Santi Rivera
slug: tema5
categories:
    - Bases de Datos
---

## Entorno local

Para poder usar el lenguaje **SQL** necesitamos un SGBD sobre el que crear BBDD físicas completas, para posteriormente lanzar consultas y sentencias. Además necesitaremos una BD correctamente creada y con suficientes datos en sus tablas.

Mientras estamos en formación es aconsejable beneficiarnos de la **interfaz gráfica** a la hora de trabajar con SQL, e ir conociendo el cliente en modo texto.

#### Buscar 6 SGBD relacionales empresariales.

-   Oracle
-   MySQL
-   MariaDB
-   SQLite
-   PostgreSQL
-   Microsoft SQL Server

#### Buscar 4 programas integrados que incluyan un servidor local MySQL.

-   Wordpress
-   Laragon
-   XAMPP
-   WAMP

#### Buscar 2 interfaces/clientes gráficos para MySQL.

-   MySQL Workbench
-   phpMyAdmin
-   HeidiSQL

### Cliente MySQL

El cliente de un SGBD es una aplicación destinada a enviar comandos al SGBD y mostrar los resultados. Puede realizarse por la consola utilizando el modo texto del Sistema Operativo o mediante una interfaz gráfica. El cliente en modo texto de **MySQL** se llama *mysql*.


## DDL

**Sublenguaje de SQL**. Lenguaje de Definición de Datos encargado de **definir la estructura física** para almacenar los datos:
    
- Crear/borrar/alterar bases de datos
- Crear/borrar/alterar tables
- Crear/borrar/alterar índices
- Crear/borrar/alterar vistas
- Crear/borrar/alterar alias

Instrucciones básicas:

- `CREATE`: Crear objeto
- `DROP`: Eliminar objeto
- `ALTER`: Modificar objeto

### Mostrar bases de datos en el servidor:

`SHOW DATABASES`

### Mostrar juegos de caracteres en la base de datos

`SHOW CHARACTER SET` o `SHOW CHARSET`

### Creación de bases de datos

`CREATE DATABASE` 

[Enlace a la documentación](https://dev.mysql.com/doc/refman/8.4/en/create-database.html) 

### Alteración de bases de datos

`ALTER DATABASE`

[Enlace a la documentación](https://dev.mysql.com/doc/refman/8.4/en/alter-database.html)

### Borrado de bases de datos

`DROP DATABASE`

[Enlace a la documentación](https://dev.mysql.com/doc/refman/8.4/en/drop-database.html)

### Creación de tablas

`CREATE TABLE`

[Enlace a la documentación](https://dev.mysql.com/doc/refman/8.4/en/create-table.html)

Siempre dentro de una base de datos en uso, podemos crear una tabla nueva:

- Desde cero
- Desde una consulta a una tabla existente
- Duplicando una tabla existente

Las nuevas tablas creadas pueden ser:

- Temporales (cuando finalicemos la sesión **son destruídas**)
- Permanentes

`SELECT`

[Enlace a la documentación](https://dev.mysql.com/doc/refman/8.4/en/select.html)
