---
title: Tema 3 - Diseño relacional
date: 2025-10-22
author: Santi Rivera
slug: tema3
categories:
    - Bases de Datos
---

## 3.1 Diagramas Entidad / Relación

#### Estándar: Diagramas Entidad/Relación de Peter Chen.

### Entidad

- Concepto parte del problema sobre el que se recogerán datos para la posterior creación de la base de datos.
- Rectángulo horizontal con un nombre en singular en el interior. Un nombre sólo puede aparecer una vez en el mismo diagrama E/R, no se admiten repetidos.
- Existen entidades fuertes y entidades débiles. 
- Las entidades fuertes son aquellas que tienen clave primaria. Las entidades débiles son las que dependen de una entidad fuerte y tienen una clave ajena.

### Relación

- Asociación entre varias entidades
- Rombo con un nombre en el interior. El nombre es un verbo, lo más concreto posible, en infinitivo.
- Todas las entidades tienen que estar conectadas por relaciones. No puede haber entidades sueltas.

#### Tipos de relaciones según el grado de la relación (número de entidades que forman parte)

- Unarias o reflexivas: Una entidad que se relaciona consigo misma.
![Rey -> ser hijo de](/images/tema3/rey.jpg)
![Empleado -> es jefe de](/images/tema3/empleado.jpg)
- Binarias: 2 entidades relacionadas.
- Ternarias: 3 entidades relacionadas.
- N-arias: más de 3 entidades relacionadas.

Generalmente, deberían usarse **solo** relaciones reflexivas o binarias.
    
### Ocurrencia o instancia

- Una ocurrencia o instancia es caso concreto de una entidad, un ejemplo concreto del conjunto.
- En el futuro se convertirá en un registro en la base de datos.

### Participación

- La participación pertenece a las entidades.
- Es el número de veces que puede aparecer relacionado un registro de una tabla con registros de las tablas relacionadas.
- Indicado mediante una pareja de números: `(0,1), (1,1), (0,n) y (1,n)`. El primer número identifica el mínimo, el segundo identifica el máximo. 
- La participación de una entidad la colocamos al lado de la entidad relacionada.
- Qué participación utilizar depende de cada problema.

### Cardinalidad

- La cardinalidad pertenece a las relaciones
- Representa el máximo de ocurrencias en relación con una ocurrencia de la entidad seleccionada. Se calcula como el máximo de la participación de cada entidad afectada.
- Se indica encima o debajo de la relación como `1:1, 1:N o N:M`, indicando el número de ocurrencias relacionadas con el resto de entidades.

#### Tipos de cardinalidad reflexiva y binarias

- **1:1**
    - Cada una de las ocurrencias de la entidad solo puede relacionarse con una ocurrencia de la entidad relacionada.
        - `Director dirigir Instituto`

- **1:N**
    - Cada una de las ocurrencias de la entidad puede relacionarse con varias ocurrencias de la entidad relacionada, mientras que la entidad relacionada sólo puede con una ocurrencia concreta.
        - `Tutor acompañar Alumno`

- **N:M**
    - Varios a varios.
        - `Persona jugar Juego`
        - `Pieza componer Pieza`
        - `Pedido incluir Producto`


### Atributos

- Los atributos de una entidad son las características que la definen, los datos relevantes para resolver el problema y sus exigencias. Se representan con elipses.
- De entre todos los atributos, un grupo de ellos permitirán obtener el resto mediante una función unívoca, ésta es la denominada clave. Se representa añadiendo subrayado. No puede ser repetido en 2 o más tuplas.
- Las relaciones también pueden tener atributos. 
    - `Mecánico reparar Coche` (atributo fecha para la relación reparar)
- El dominio es el tipo de dato o conjunto de valores del atributo.
- Tipos de atributos: 
    - **Obligatorios** (Deben estar para que la entrada de datos sea válida)
    - **Opcionales** (Pueden contener `NULL`)