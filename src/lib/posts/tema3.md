---
title: Bases de Datos - Tema 3 - Diseño relacional
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
- Indicado mediante una pareja de números: ` (0,1), (1,1), (0,n) y (1,n)`. El primer número identifica el mínimo, el segundo identifica el máximo. 
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

### Ejemplos de entidades y sus atributos

**Persona**

| Atributo | Tipo | Dominio | Clave | Obligatorio |
| :--- | :--- | :--- | :--- | :--- |
| **DNI** | Texto (9) | - | ✅ | ✅ |
| **Nombre** | Texto (20) | - | ❌ | ✅ |
| **Apellido1** | Texto (20) | - | ❌ | ✅ |
| **Apellido2** | Texto (20) |  | ❌ | ❌ |
| **FechaNacimiento** | Fecha | - | ❌ | ✅ |

**Hotel**

| Atributo | Tipo | Dominio | Clave | Obligatorio |
| :--- | :--- | :--- | :--- | :--- |
| **id** | Numérico | 0-500000 | ✅ | ✅ |
| **Nombre** | Texto (50) | - | ❌ | ✅ |
| **Director** | Texto (50) | - | ❌ | ✅ |
| **Num_Habitaciones** | Numérico | 0-20000 | ❌ | ✅ |

**Libro**

| Atributo | Tipo | Dominio | Clave | Obligatorio |
| :--- | :--- | :--- | :--- | :--- |
| **ISBN** | Texto (15) | - | ✅ | ✅ |
| **Nombre** | Texto (50) | - | ❌ | ✅ |
| **Páginas** | Número | 0-2000 | ❌ | ✅ |
| **Autor** | Texto (50) | - | ❌ | ✅ |
| **Editorial** | Texto (50) | - | ❌ | ✅ |

`Pedido incluir Producto`

**Producto**

| Atributo | Tipo | Dominio | Clave | Obligatorio |
| :--- | :--- | :--- | :--- | :--- |
| **id_producto** | Número | 0-999999999 | ✅ | ✅ |
| **Nombre** | Texto (200) | - | ✅ | ✅ |
| **Precio** | Número con decimal | 0-99999 | ✅ | ✅ |

**Pedido**

| Atributo | Tipo | Dominio | Clave | Obligatorio |
| :--- | :--- | :--- | :--- | :--- |
| **id_cliente** | Número | 0-999999999 | ✅ | ✅ |

**incluir**

| Atributo | Tipo | Dominio | Clave | Obligatorio |
| :--- | :--- | :--- | :--- | :--- |
| **id_producto** | Número | 0-999999999 | ✅ | ✅ |
| **id_pedido** | Número | 0-999999999 | ✅ | ✅ |
| **FechaEntrega** | Fecha | - | ❌ | ✅ |
| **DescuentoAplicado** | Número con decimal | 0-100 | ❌ | ✅ |
| **PrecioFinal** | Número con decimal | 0-99999 | ❌ | ✅ |
| **Cantidad** | Número | 0-999 |  ❌ | ✅ |

## Otras notaciones

Hemos analizado los elementos del estándar de Peter Chen para diagramas E/R.

A la hora de realizar diagramas E/R existen otras notaciones ya sean estándares en la industria o no.

Otro de los estándares más comúnmente utilizados es `UML` o **Lenguaje Unificado de Modelado**


## Herramientas software para diagramas E/R

Existen multitud de herramientas con las que poder realizar los diagramas en el ordenador:

- DIA
- LucidChart
- MySQL Workbench
- Google Docs
- Word
- ERDPlus
- [draw.io](https://draw.io)

Y por supuesto también se pueden realizar con papel y lápiz.

## Cardinalidades no binarias

Nos preguntamos cuántas ocurrencias aparecerán relacionadas con 1 ocurrencia concreta del resto de entidades.

Tomando los máximos de las participaciones se generan cardinalidades como `1:1:N`, `1:N:M` o `N:M:P` en relaciones ternarias.

![auditar](/images/tema3/auditar.jpg)
![editar](/images/tema3/editar.jpg)
![ganar](/images/tema3/ganar.jpg)

## Construcción del diagrama

Para llegar a diseñar un buen diagrama E/R es necesario ser metodológico y:

1. Leer varias veces el problema / enunciado. Hablar con el cliente tantas veces como sea necesario.
2. Buscar **entidades, relaciones y atributos** candidatos.
    - Identificar las entidades, que suelen ser **sustantivos** importantes.
    - Identificar los atributos de cada entidad relevantes para el problema, que suelen ser **adjetivos** asociados al sustantivo.
    - Descartar entidades con un solo atributo y reacomodar ese atributo en otra entidad.
    - Identificar las relaciones, que suelen ser **verbos** que conectan entidades.
    - Identificar los atributos de las relaciones.
    - Descartar relaciones que pueda reacomodar en otra entidad.
3. Averiguar **participaciones y cardinalidades** Ante la duda siempre utilizamos las que permitan almacenar la mayor cantidad de datos en la base de datos generando mayor volumen de información.
4. Buscar incoherencias en el diseño.
5. **Refinar** el diagrama en nuevas iteraciones, hasta que el diagrama represente el problema fielmente y pueda ser utilizado tanto por el cliente/enunciado como por el informático diseñador de bases de datos.


## 3.4 Transformacion de interrelaciones ternarias

La transformación de las interrelaciones ternarias presenta similitudes importantes con la transformación de las binarias M:N. No es posible representar la interrelación mediante claves foráneas, sino que es necesario usar una nueva relación. Para que la nueva relación refleje toda la información que modeliza la interrelación, es necesario que contenga las claves primarias de las tres entidades interrelacionadas y los atributos de la interrelación.
Así pues, la transformación de una interrelación ternaria siempre da lugar a una nueva relación, que tendrá como atributos las claves primarias de las tres entidades interrelacionadas y todos los atributos que tenga la interrelación. La clave primaria de la nueva relación depende de la conectividad de la interrelación.

A continuación analizaremos cuál debe ser la clave primaria de la nueva relación según la conectividad. Empezaremos por el caso M:N:P y acabaremos con el caso 1:1:1.

### 3.4.1 Conectividad M:N:P

Cuando la conectividad de la interrelación es M:N:P, la relación que se obtiene de su transformación tiene como clave primaria todos los atributos que forman las claves primarias de las tres entidades interrelacionadas.

Ejemplo de transformación de una interrelación ternaria M:N:P

Analizaremos la transformación con un ejemplo:

![Estudiante / Asignatura / Semestre](/images/tema3/mnp.png)

La interrelación anterior se transforma en:
`ESTUDIANTE` (est, ...)
`ASIGNATURA` (asig, ...)
`SEMESTRE` (sem, ...)
`EVALUACIÓN-SEMESTRAL` (est, asig, sem, nota)
```
donde {est} referencia ESTUDIANTE,
{asig} referencia ASIGNATURA
y {sem} referencia SEMESTRE
```

Para identificar completamente la relación, la clave debe constar de la clave de estudiante, de la clave de asignatura y de la clave de semestre. Si nos faltase una de las tres, la clave de la relación podría tener valores repetidos. Consideremos, por ejemplo, que no tuviésemos la clave de semestre. Dado que semestre está conectada con “muchos” en la interrelación, puede haber estudiantes que han sido evaluados de una misma asignatura en más de un semestre. Entonces, para estos casos habría valores repetidos en la clave de la relación EVALUACION-SEMESTRAL.

Observad que, del mismo modo que es necesaria la clave de semestre, también lo son la de estudiante y la de asignatura.

## 3.4.2. Conectividad M:N:1

Cuando la conectividad de la interrelación es M:N:1, la relación que se obtiene de su transformación tiene como clave primaria todos los atributos que forman las claves primarias de las dos entidades de los lados de la interrelación etiquetados con M y con N.

Ejemplo de transformación de una interrelación ternaria M:N:1

Lo ilustraremos con un ejemplo:
 
![Maestro / Curso / Escuela](/images/tema3/mn1.png)
            

Esta interrelación refleja los destinos que se dan a los maestros de escuela en los diferentes cursos. El 1 que figura en el lado de escuela significa que un maestro no puede ser destinado a más de una escuela en un mismo curso. El ejemplo de la figura se transforma en:
`MAESTRO` (código-maestro, ...)
`CURSO` (código-curso, ...)
`ESCUELA` (código-esc, ...)
`DESTINO` (código-maestro, código-curso, código-esc)
```
donde {código-maestro} referencia MAESTRO
{código-curso} referencia CURSO
y {código-esc} referencia ESCUELA
```

No es necesario que la clave incluya código-esc para identificar completamente la relación. Si se fijan un maestro y un curso, no puede haber más de una escuela de destino y, por lo tanto, no habrá claves repetidas.

### 3.4.3. Conectividad N:1:1

Cuando la conectividad de la interrelación es N:1:1, la relación que se consigue de su transformación tiene como clave primaria los atributos que forman la clave primaria de la entidad del lado N y los atributos que
forman la clave primaria de cualquiera de las dos entidades que están conectadas con 1.

Así pues, hay dos posibles claves para la relación que se obtiene. Son dos claves candidatas entre las cuales el diseñador deberá escoger la primaria.

Ejemplo de transformación de una interrelación ternaria N:1:1

Veamos un ejemplo de ello:

![Hora-Semanal / Aula / Asignatura](/images/tema3/n11.png)

1) Una posible transformación es la siguiente:º
- `HORA-SEMANAL` (código-hora, ...)
- `AULA` (código-aula, ...)
- `ASIGNATURA` (asig, ...)
- `CLASE` (código-hora, código-aula, asig, duración)
```
donde {código-hora} referencia HORA-SEMANAL,
{código-aula} referencia AULA
y {asig} referencia ASIGNATURA
```

En este caso, la clave, a pesar de no incluir el atributo asig, identifica completamente la relación porque para una hora-semanal y un aula determinadas hay una única asignatura de la que se hace clase a esa hora y en esa aula.

2) La segunda transformación posible es esta otra:
- `HORA-SEMANAL` (código-hora, ...)
- `AULA` (código-aula, ...)
- `ASIGNATURA` (asig, ...)
- `CLASE` (código-hora, código-aula, asig, duración)
```
donde {código-hora} referencia HORA-SEMANAL,
{código-aula} referencia AULA
y {asig} referencia ASIGNATURA
```

Ahora la clave incluye el atributo asig y, en cambio, no incluye el atributo código-aula. La relación también queda completamente identificada porque, para una asignatura y hora-semanal determinadas, de aquella asignatura se da clase en una sola aula a aquella hora.

### 3.4.4. Conectividad 1:1:1

Cuando la conectividad de la interrelación es 1:1:1, la relación que se obtiene de su transformación tiene como clave primaria los atributos que forman la clave primaria de dos entidades cualesquiera de las tres interrelacionadas.

Así pues, hay tres claves candidatas para la relación.

Ejemplo de transformación de una interrelación ternaria 1:1:1

Veamos un ejemplo de ello:

![Tribunal / Estudiante / Proyecto Fin Carrera](/images/tema3/111.png)

Hemos considerado que ...          
... , si dos estudiantes presentan un mismo proyecto de fin de carrera, el tribunal será necesariamente diferente.

Esta interrelación registra información de defensas de proyectos de fin de carrera. Intervienen en ella el estudiante que presenta el proyecto, el proyecto presentado y el tribunal evaluador.
La transformación del ejemplo anterior se muestra a continuación:
- `TRIBUNAL` (trib, ...)
- `ESTUDIANTE` (est, ...)
- `PROYECTO-FIN-CARRERA` (pro, ...)

Para la nueva relación DEFENSA, tenemos las tres posibilidades siguientes:

•   Primera opción:
- `DEFENSA` (trib, est, pro, fecha-defensa)

```
donde {trib} referencia TRIBUNAL,
{est} referencia ESTUDIANTE
y {pro} referencia PROYECTO-FIN-CARRERA
```
•   Segunda opción:
- `DEFENSA` (trib, pro, est, fecha-defensa)
``` 
donde {trib} referencia TRIBUNAL,
{est} referencia ESTUDIANTE
y {pro} referencia PROYECTO-FIN-CARRERA
```

•   Tercera opción:
- `DEFENSA` (est, pro, trib, fecha-defensa)
```
donde {trib} referencia TRIBUNAL,
{est} referencia ESTUDIANTE
y {pro} referencia PROYECTO-FIN-CARRERA
```
En los tres casos, es posible comprobar que la clave identifica completamente la relación si se tiene en cuenta la conectividad de la interrelación defensa.