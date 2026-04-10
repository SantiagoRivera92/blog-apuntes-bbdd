---
title: Bases de Datos - Tema 6 - DML (Data Manipulation Language)
date: 2026-02-10
author: Santi Rivera
slug: tema6
categories:
    - Bases de Datos
---

# Tema 6: DML (Data Manipulation Language)

## DML

- `INSERT` (añadir nuevas filas/registros)
- `DELETE` (borrar filas)
- `UPDATE` (modificar filas)
- `SELECT` (consultar datos)

## INSERT

Añadir registros

```sql
INSERT INTO <tabla> (col1, col2, ...) 
VALUES (a,b,...), (c,d, ...), (e,f, ...);
``` 

### UPDATE

La sentencia UPDATE permite modificar el contenido existente de cualquier columna de cualquier fila de una tabla.

Usaremos UPDATE cuando necesitemos modificar los datos.

```sql
UPDATE jugadores 
SET Peso=Peso*0.4535;
```

```sql
UPDATE jugadores 
SET Nombre_equipo='Knicks' 
WHERE Nombre='Pau Gasol';`
``` 

```sql
UPDATE jugadores
SET Nombre_equipo='Lakers', Peso=120
WHERE Nombre='Pau Gasol';
```

### DELETE

```sql
DELETE FROM jugadores;
```

```sql
DELETE FROM jugadores WHERE Nombre='Pau Gasol';
```

Hay que tener en cuenta no borrar filas referenciadas mediantes claves ajenas (tal vez no nos deje por integridad referencial).

## Filtros WHERE

Condiciones impuestas a los registros para estar incluidos en el resultado.

Los filtros se constryen mediante expresioens (combinación de operadores, opreandos y funciones => resultado):

- Operadores: aritméticos (`+, -, *, /, %`), relacionales(`>, <, <>, >=, <=, =`), lógicos (`AND, OR, NOT`), `IN, BETWEEN, IS, IS NOT, LIKE, LIMIT` y los paréntesis.
- Operandos: constantes (1, 2.3, 'Santi', '2010-01-02') o variables (columna1, ...)
- Funciones

## Subconsultas


### Tipos de subconsultas:

- Comparación (`=`, `>=`, `<=`, `<>`, `>`, `<`, `LIKE`)
    - Una subconsulta de comparación produce un único valor y debe estar a la derecha del operador.
- Pertenencia a conjunto (IN)
    - Una subconsulta de pertenencia produce cualquier número de valores, y debe estar a la derecha del operador.
- Existencia (EXISTS, NOT EXISTS)
    - Filtramos la consulta si existen filas en la subconsulta asociada. Por cada resultado de la consulta se comprueban todos los resultados de la subconsulta. La consulta principal enlaza cada registro de su resultado con el resultado de la subconsulta.
- ALL y ANY
    - Operadores de test cuantificados. ALL representa a todos, ANY representa a alguno. 
- Multivalor
    - WHERE
    - HAVING

### Subconsultas anidadas

```sql
SELECT (        SELECT(         SELECT (...)))
```

Reflejan la potencia del lenguaje SQL estructurado. Siempre se ejecutan desde dentro hasta fuera.


### Join

#### SQL1

En SQL 1, sólo existe este tipo de `JOIN`:

```sql
SELECT * 
FROM departamentos, empleados 
WHERE departamentos.dep_no = empleados.dep_no;
```

deberes: buscar UNION, MINUS e INTERSECT

##### UNION

Combina los conjuntos de resultados de dos o más sentencias `SELECT` en una única tabla final eliminando los registros duplicados.

##### UNION ALL

Como `UNION` pero sin eliminar los duplicados.

##### MINUS / EXCEPT

Devuelve las filas de la primera sentencia `SELECT` que no aparecen en la segunda sentencia `SELECT`. Diferencia de conjuntos.

##### INTERSECT

Devuelve las filas que son comunes a ambos conjuntos de resultados de las sentencias `SELECT`.

#### SQL2

En SQL 2:

- `INNER JOIN ... ON ...`
- `NATURAL JOIN`
- `CROSS JOIN`
- `OUTER JOIN`
    - `LEFT OUTER JOIN ... ON ...`
    - `RIGHT OUTER JOIN ... ON ...`
    - `FULL OUTER JOIN ... ON ...`


![SQL JOINS](/images/tema6/sqljoin.jpeg)

![Hair Join](/images/tema6/hairjoin.png)


##### INNER JOIN

Producto cartesiano. Los valores null no se combinan.

##### NATURAL JOIN

Tiene que haber una columna con el mismo nombre en las dos tablas. 

##### CROSS JOIN

Producto cartesiano. Los valores null son incluídos y combinados.

##### OUTER JOIN

Admite nulos. 

###### LEFT OUTER JOIN

La primera tabla incluirá todos sus registros y la segunda sólo los relacionados.

###### RIGHT OUTER JOIN

La segunda tabla incluirá todos sus registros y la primera sólo los relacionados.

###### FULL OUTER JOIN

No existe en MySQL, pero lo podemos simular con la `UNION` de dos `JOIN`.

```sql
SELECT * FROM animales
LEFT OUTER JOIN propietarios
ON animales.propietario=propietarios.dni
UNION
SELECT * FROM animales
RIGHT OUTER JOIN propietarios
ON animales.propietari=propietarios.dni
```


#### Relaciones reflexivas

Consulta sobre la misma tabla.

Diferencias entre INNER JOIN y LEFT/RIGHT OUTER JOIN.

```sql
SELECT CONCAT(emp.nombre, ' ', emp.apellido1) AS Empleado
CONCAT(jefe.nombre, ' ', jefe.apellido1) AS Jefe
FROM Empleados emp
INNER JOIN Empleados jefe
ON emp.Codigojefe=jefe.CodigoEmpleado;
```

Si utilizamos `INNER JOIN`, no aparecerán los empleados sin jefe.

```sql
SELECT CONCAT(emp.nombre, ' ', emp.apellido1) AS Empleado,
CONCAT(jefe.nombre, ' ', jefe.apellido1) AS Jefe
FROM empleados emp
LEFT OUTER JOIN empleados jefe
ON emp.Codigojefe=jefe.CodigoEmpleado;
```

Utilizando un `LEFT OUTER JOIN`, aparecerán los empleados sin jefe. Aparecerán todos los empleados.

```sql
SELECT CONCAT(emp.nombre, ' ', emp.apellido1) AS Empleado
CONCAT(jefe.nombre, ' ', jefe.apellido1) AS Jefe
FROM Empleados emp
RIGHT OUTER JOIN Empleados jefe
ON emp.Codigojefe=jefe.CodigoEmpleado;
```

Utilizando un `RIGHT OUTER JOIN`, aparecerán todos los jefes (incluídos los que no tienen empleados). Aparecerán todos los empleados en la segunda tabla.


#### Subconsultas correlacionadas

Utilizan referencias externas.

La subconsulta correlacionada se ejecuta tantas veces como filas se procesen en la referencia externa.

Es necesario hacer un nombrado de columnas explícito e unívoco.


```sql
SELECT emp_no, dep_no, oficio, salario
FROM empleados
WHERE salario>(
	SELECT AVG(salario)
	FROM EMPLEADOS);
```

La media se calcularía para cada fila.

```sql
SELECT e1.dep_no, e1.oficio, salario
FROM empleados e1
WHERE e1.salario>(
    SELECT AVG(e2.salario)
    FROM empleados e2
    WHERE e2.dep_no=e1.dep_no)+1000;
```

La media se se calculará para cada fila.

```sql
EXPLAIN SELECT NAME 
FROM country 
WHERE CODE LIKE 'A%';
```

Esto nos cuenta si la consulta es correlacionada o simple. Si dice DEPENDENT SUBQUERY tenemos una subconsulta correlacionada, si dice SIMPLE es una consulta sencilla.

#### Subconsultas con tablas derivadas

Utilizan sentencias `SELECT` en la cláusula `FROM` en lugar de nombres explícitos de tablas.

Las tablas derivadas son tablas temporales.

Consultas avanzadas.

Sobre las tablas derivadas se pueden aplicar filtros, agrupaciones, etc.