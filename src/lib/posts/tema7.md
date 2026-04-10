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