---
title: Tema 4 - Modelado Lógico
date: 2025-11-07
author: Santi Rivera
slug: tema4
categories:
    - Bases de Datos
---

# Tema 4 - Modelado Lógico

## Modelo Relacional

### Características:

- La **relación/tabla** es el elemento principal del modelo.
- El resultado puede implementarse **en cualquier SGBD** dada su independencia del modelo físico de la BD.
- Mantiene una **fuerte base semántica**.

Utilizaremos el **modelo lógico relacional de Codd** que se ajusta al modelo conceptual E/R de Peter Chen ya conocido.

### Restricciones semánticas

- `UNIQUE` (no repetido)
- Integridad referencial (clave foránea)
- Restricciones de dominio (valores de atributos)
- Verificación `CHECK` (expresión)
- `NULL / NOT NULL` (optativo / obligatorio)

A mayores, podemos añadir **disparadores o triggers** por programación de bases de datos.

### Transformación de un diagrama E/R al modelo relacional

#### Entidad -> Tabla

- Por cada entidad se ccrea una tabla con tantas columnas como atributos tenga la entidad. Las tablas tienen nombres **PLURALES**.
- Las tablas se representan de este modo:
    - Productos (<u>Id</u>, Nombre, PrecioActual, Stock, Descripción)

#### Clave primaria/principal 

Clave mínima elegida por el diseñador. La clave estaráf ormada por los atributos clave de la entidad. Se representa <u>subrayada</u>. Pueden ser simples o compuestas. Independientemente de cuántos atributos tenga la clave principal, solo hay una clave principal por cada tabla.

#### Clave foránea 

Atributo de una entidad que es clave primaria en otra entidad. Se representa con una flecha desde la clave foránea hacia la clave primaria.

`Productos` (<u>IdPro</u>, NomPro, PrecioActual, Stock, Descripción)

`Ventas` (<u>IdVenta</u>, <u>Producto</u>, PrecioVenta, CantidadVenta)

(En este ejemplo, <u>Producto</u> es clave foránea de la tabla `Productos`. Imagina que hay una flecha uniéndolas)

<u>Producto</u> es parte de la clave primaria de `Ventas` porque representa cada línea en un ticket de compra: En el mismo ticket podemos tener varios productos.