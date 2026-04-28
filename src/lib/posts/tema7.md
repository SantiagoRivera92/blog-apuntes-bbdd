---
title: Bases de Datos - Tema 7 - Tratamiento de datos
date: 2026-04-10
author: Santi Rivera
slug: tema7
categories:
    - Bases de Datos
---

# Tema 7: Tratamiento de datos

## Vistas

Una vista es una tabla virtual sin contenido propio. Se generan como resultado de una consulta SQL.

Características:

- Compilada una sola vez (mayor velocidad que las consultas)
- Mecanismo nativo de control de acceso a los datos (seguridad)

Son como consultas guardadas para mostrar datos a usuarios no administradores evitando que éstos puedan acceder a las tablas reales y a todos sus datos completos.

Es necesario MySQL con versión 5 o superior.

### Comandos a buscar:

- `DROP VIEW` => Borrar vistas
- `SHOW CREATE VIEW \G` => Obtener la información de una vista creada
- `ALTER VIEW` => Modificar lista ya creada

Una vista puede estar formada por tablas, otras vistas, subconsultas y joins.

```sql
CREATE VIEW jugadoresMiami AS
SELECT Nombre, Posicion
FROM jugadores
WHERE Nombre_equipo LIKE 'HEAT';

SELECT *
FROM jugadoresMiami;
```

```sql
CREATE view jugadoresMiamiG AS
SELECT Nombre, Posicion
FROM jugadores
WHERE nombre_equipo LIKE 'HEAT'
AND posicion LIKE 'G';

SELECT * FROM jugadoresMiamiG;
```

Una vista no se puede asociar a un trigger

## Usuarios

Cuentas MySQL {usuario}@{host}

Diferentes niveles de privilegios

Usuarios/cuentas

- Crear
- Borrar
- Renombrar
- Cambiar contraseña

Buscar los comandos para hacer estas operaciones.

Para crear un usuario sin contraseña:

```sql
CREATE USER santi;
```

Para crear un usuario con contraseña:

```sql
CREATE USER santi IDENTIFIED BY 'asdf';
```

### Borrar usuarios

```sql
DROP USER 'santi'@'localhost';
```

### Renombrar usuarios

```sql
rename user 'nacho2'@'%' to 'nachonuevo'@'localhost';
```

## Autenticación y permisos en MySQL

MySQL utiliza principalmente seguridad nativa, que es la definida en el núcleo del propio servidor. Exist ela posibilidad de integrarla con la seguridad del SO.

El servidor trabaja con cuentas y permisos almacenados ambos en la base de datos mysql creada en la instalación.

La identidad se determina mediante el equipo desde el que se realiza la conexión y el nombre de usuario utilizado para el login. Y selecciona la dupla Host, User más específica que concuerde con los datos de login.

El acceso se divide en 2 etapas: comprobación de identidad y obtención de permisos.

`USER()` devuelve la cuenta introducida por el usuario en el login, `CURRENT_USER()` devuelve la cuenta que se está utilizando. Suelen coincidir pero no siempre, ya que el proceso de login se basa en devolver la cuenta con el host más concreto.

```sql
SELECT * FROM mysql.user;
SELECT host,user FROM mysql.user;
SELECT USER();
SELECT CURRENT_USER();
```

## Privilegios

Estructura de permisos en MySQL:

- GRANT
    - privilegios (listado de privilegios)
    - ON (objeto sobre el que se aplica)
    - TO (usuario al que se le asignan los privilegios)
    - WITH (limitaciones en la cuenta de usuario)

- REVOKE
    - privilegios (lista de privilegios)
    - ON (objeto sobre el que se aplica)
    - FROM (usuario al que se le quitan los privilegios)

Hay 4 niveles de permisos: global, base de datos, tablas y columnas.

### A nivel global
```sql
GRANT privilegios
ON *.*
TO nombre_usuario;
```

```sql
REVOKE privilegios 
ON *.*
FROM cuenta_usuario
``` 
### A nivel base de datos
```sql
GRANT privilegios
ON base_datos.*
TO nombre_usuario;
```

```sql
REVOKE privilegios
ON base_datos.*
FROM nombre_usuario;
```

### A nivel tabla
```sql
GRANT privilegios
ON base_datos.nombre_tabla
TO nombre_usuario;
```

```sql
REVOKE privilegios
ON base_datos.nombre_tabla
FROM nombre_usuario;
```
### A nivel columna
```sql
GRANT privilegios (columna)
ON base_datos.tabla
TO usuario;
```

```sql
REVOKE privilegios (columna)
ON base_datos.tabla
FROM usuario;
```

### Permisos especiales

`USAGE` y `GRANT OPTION`

El primero indica que la cuenta puede acceder al servidor (pero no trabajar con los objetos).

El segundo indica que podemos ceder los permisos que tenemos concedidos a otros usuarios.


Para recargar privilegios:

```sql
FLUSH PRIVILEGES;
```

También podemos usar los siguientes comandos:

```sh
mysqladmin -u root flush-privilages
```

```sh
mysqladmin -u root reload
```

Sin embargo reload está deprecated y puede dejar de funcionar.


