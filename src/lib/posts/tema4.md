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

#### Entidad ➜ Tabla

- Por cada entidad se ccrea una tabla con tantas columnas como atributos tenga la entidad. Las tablas tienen nombres **PLURALES**.
- Las tablas se representan de este modo:
    - `Productos` (<u>Id</u>, Nombre, PrecioActual, Stock, Descripción)

##### Clave primaria/principal 

Clave **mínima** elegida por el diseñador. La clave estaráf ormada por los atributos clave de la entidad. Se representa <u>subrayada</u>. Pueden ser **simples o compuestas**. Independientemente de cuántos atributos tenga la clave principal, **solo hay una clave principal por cada tabla**.

##### Clave foránea 

Atributo de una entidad que **es clave primaria en otra entidad**. Se representa con una flecha desde la clave foránea hacia la clave primaria.

- `Productos` (<u>IdPro</u>, NomPro, PrecioActual, Stock, Descripción)

- `Ventas` (<u>IdVenta</u>, <u>Producto</u>, PrecioVenta, CantidadVenta)

(En este ejemplo, <u>Producto</u> es clave foránea de la tabla `Productos`. Imagina que hay una flecha uniéndolas)

La clave primaria de `Ventas` es <u>Producto</u> porque representa cada línea en un ticket de compra: En el mismo ticket podemos tener varios productos.

#### Relación ➜ Tabla

- Las relaciones de forma general **dan lugar a tablas cuyas columnas serán todos los atributos de la relación y las claves de cada entidad perteneciente**. Su clave estará compuesta por las claves de las entidades relacionadas. El nombre de la nueva tabla será descriptivo y no seguirá la línea del verbo en infinitivo. Una tabla que viene de una relación también tiene un nombre **PLURAL**.

- **Excepciones**
    - No se crea una tabla nueva para relaciones con cardinalidad `1:N`. **Se añade la clave de la entidad 1 a la entidad N, y en caso de existir atributos de la relación, también**.
    - No se crea una tabla nueva para relaciones con cardinalidad `1:1`. **Una u ambas entidades añaden la clave de la otra a sus atributos, haciendo un intercambio de claves foráneas**.

- Cuando una relación es `ternaria o n-aria`, **siempre** dan lugar a tablas.

#### Atributo de entidad o relación ➜ Columna / Campo / Atributo de la tabla relación correspondiente.

Detallaremos tanto sus restricciones semánticas como si es clave en cada caso.

### Clientes

| Atributo | Clave | Restricciones semánticas |
| :--- | :--- | :--- |
|`C1`|PRIMARIA|UNIQUE, 1-1000, NOT NULL|
|`P1`|SECUNDARIA|UNIQUE, PS1-PS100 (CHECK(PS+1-100)), NOT-NULL|

## Esquema Diagrama Entidad/Relación ➜ Modelo Relacional

![Diagrama Entidad/Relación a Modelo Relacional](/images/tema4/der_to_mr.png)