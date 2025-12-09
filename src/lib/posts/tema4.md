---
title: Bases de Datos - Tema 4 - Modelado Lógico
date: 2025-11-07
author: Santi Rivera
slug: tema4
categories:
    - Bases de Datos
---

## 4.1 - Modelo Relacional

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

## 4.2 - Normalización

El criterio de medición de la calidad utilizado con las bases de datos relacionales son las **formas normales**. Las formas normales son **restricciones** aplicadas sobre el conjunto de atributos de un diseño. El proceso de aplicar dichas restricciones se denomina normalización. **La normalización nos muestra qué es incorrecto y cómo corregirlo**.
### Objetivos de la normalización

-   `Evitar la redundancia excesiva en la base de datos`
-   `Evitar anomalías de inserción, modificación o borrado`
-   `Exigir / Mantener la separación y organización de datos`

Existen **6 formas normales** y **toda forma normal cumple las anteriores**.

### Conceptos

- **Dependencia funcional / implicación:** un atributo depende funcionalmente de otro si por cada valor del mismo obtenemos en todo momento un único valor del primero. Se representa como `X ➜ Y`. Dicho de otro modo, a través de X se obtiene Y, un valor de X implica un valor de Y (Y depende de X).
    - <u>CodArtículo</u> ➜ Descripción
    - <u>CodArtículo</u> ➜ Precio

    `Esto generalmente aplica a tablas con claves primarias con solo un atributo`

- **Dependencia funcional completa:** si X es un conjunto de atributos, se dice que Y tiene dependencia funcional completa de X si depende funcionalmente del conjunto al completo y no de ningún subconjunto del mismo.
    - <u>NumPedido</u> + <u>CodArtículo</u> ➜ Cantidad (<span style="color:green">SÍ ✅</span>)
    - <u>NumPedido</u> ➜ Cantidad (<span style="color:red">NO ❌</span>)
    - <u>CodArtículo</u> ➜ Cantidad (<span style="color:red">NO ❌</span>)

    `Esto aplica a tablas con claves primarias compuestas`

- **Dependencia funcional transitiva:** si `X➜Y` y `Y➜Z`, entonces `X - - - > Z` (X➜Y➜Z).

### Formas normales

- **Primera forma normal:** para todo registro/fila/tupla cada atributo/campo/columna sólo puede tomar un valor, quedando prohibido que puedan tomar, derivar, componerse o calcularse de varios valores a la vez. Modificamos atributos no atómicos.
    - `Teléfonos`
    - `Productos`
    - `Dirección`

- **Segunda forma normal:** 1ªFN y además, cada atributo que no forma parte de la clave tiene que tener dependencia funcional completa de la misma. Modificamos / Reubicamos los atributos que tienen dependencia parcial.
    - <u>NumPedido</u> + <u>CodArtículo</u> ➜ Total

- **Tercera forma normal:** 2ªFN y además, ningún atributo que no forma parte de la clave tiene dependencia funcional transitiva de la clave principal.

### Índices

El orden de las filas y columnas **no tiene importancia** y no lo tenemos en cuenta para nada.

En todas las tablas y relaciones existirá como mínimo un índice, que es la clave primaria, y añadimos otros a mayores para realizar ordenación, acelerar las consultas y trabajar con claves ajenas.

#### Inconvenientes principales del uso de índices:

-   `Aumentan la redundancia`
-   `Ralentizan el sistema de inserción, actualización y borrado`

No es conveniente abusar del número de índices.


### Diagrama E/R extendido

#### Atributos

-   `Obligatorios` (Elipse DER) / opcionales (línea discontinua al final)
-   `Compuestos`. Se pueden descomponer en atributos atómicos, lo representamos como doble elipse. Si tiene doble elipse y no se divide es que puede tomar varios valores (suele ir en plural). (EJ. Teléfonos)
-   `Univaluados / multivaluados`. Un valor o varios.
-   `Derivados (calculados)`. Representación línea discontinua en la elipse. No se incorpora a las tablas.
 
#### Generalizacion / Especializacion

Una entidad genérica se puede subespecializar en subentidades especializadas, de manera que cada subentidad hereda todos los atributos de la superentidad y puede añadir los suyos propios.

Esta jerarquía se representa con un triángulo isósceles invertido apuntando a las subclases.

La relación puede tener atributos, en caso de tenerlos, ese atributo determina a que subentidad pertenece la ocurrencia.

El mismo dibujo se puede leer de arriba a abajo y se llama **especialización** o de abajo a arriba y se llama **generalización** (no se tiene en cuenta el atributo cuando se lee)

-   `Exclusiva`. Cada ocurrencia de la superclase se traduce en un único tipo de las subclases. Lo indicamos con un arco debajo del triángulo.
-   `Inclusiva`. Cada ocurrencia de la superclase se traduce en uno o varios tipos de las subclases. No lleva arco. Permite varias opciones.
-   `Total`. Cuando sea total, cada ocurrencia de la superclase se va a traducir obligatoriamente en una subclase. Lo indicaré poniendo un círculo encima del triángulo. No se puede guardar nada en la superclase.
-   `Parcial`. Cada ocurrencia de la superclase puede materializarse o no en una subclase. Es opcional, por lo tanto, no se pone el circulo.


| Nombre | Tiene círculo | Tiene arco | Definición |
| :--- | :--- | :--- | :--- |
| Total Exclusiva | ✅ | ✅ | Cada ocurrencia general tiene exactamente una (y solo una) especialización |
| Total Inclusiva | ✅ | ❌ | Cada ocurrencia general tiene al menos una especialización, pero puede tener varias. |
| Parcial Exclusiva | ❌ | ✅ | Cada ocurrencia general tiene cero o una especialización. Al ser optativo que tenga una especialización, hay que guardar las genéricas | 
| Parcial Inclusiva | ❌ | ❌ | Cada ocurrencia general puede tener cero, una o varias espcializaciones. Hay que guardar las genéricas. |