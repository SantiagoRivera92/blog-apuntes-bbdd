---
title: Bases de Datos - Tema 8 - Programación de BBDD
date: 2026-04-10
author: Santi Rivera
slug: tema8
categories:
    - Bases de Datos
---

# Tema 8 - Programación de BBDD

# Tablas de la base de datos mysql:

`procs_priv`: todos los permisos que se han otorgado a nivel de programa

`user`: todas las rutinas de todas las bases de datos

`db`: los permisos para todas las rutinas de una base de datos

## Bloques de código

### Anónimos

```sql
SELECT dept_no, dept_name
FROM departments;
```

### Rutinas almacenadas

```sql
USE employeespractica2526;

DELIMITER $$
CREATE PROCEDURE department_getList2()
BEGIN
    SELECT dept_no, dept_name
    FROM departaments;
END$$
DELIMITER ;
```

Las rutinas están asociadas a la base de datos porque se guardan en ella. 

Para llamar al procedimiento, hacemos lo siguiente:

```sql
CALL department_getList2();
```

## Variables

### Variables de usuario

Sin existencia fuera de la sesión de usuario actual (sesión)

```sql
SELECT SUM(PrecioUnidad * Cantidad)
INTO @totalFacturado
FROM detallepedidos;

SELECT @totalFacturado;
```

> `@totalFracturado` es una variable de usuario.

```sql
SET @var1:=10001;

SELECT * FROM employees WHERE emp_no=@var1;
```

> `@var1` es una variable de usuario.

```sql
SET @salarioMinimo = 10000;

SELECT DISTINCT emp_no
FROM salaries
WHERE salary > @salarioMinimo;
```

```sql
SELECT COUNT(*)
INTO @numEmpleados
FROM dept_emp
WHERE dept_no = 'd005';

SELECT @numEmpleados;
```

```sql
SET @dept_no:='H999',
@dept_name:='Departamento de prueba 2';

INSERT INTO departments (dept_no, dept_name)
VALUES (@dept_no, @dept_name);
```

```sql
SELECT salary INTO @s FROM salaries;
SELECT @s AS 'Salario';
```

> Esto crashea: En una variable **sólo se puede introducir un único valor**, sin varias columnas o filas.

```sql
SELECT MAX(salary), MIN(salary)
INTO @maximo, @minimo
FROM salaries;

SELECT @maximo AS 'Salario Maximo', 
@minimo AS 'Salario Minimo';
```

> Podemos utilizar variables usando otras variables

```sql
set @dept_no = 'D999',
@dept_name='Departamento de prueba';

set @cadenaCompleta = CONCAT(@dept_no, ' --> ', @dept_name);

select @cadenaCompleta;
```

> Cuenta de usuario con más conexiones abiertas al servidor y el número de conexiones.

```sql
SET @usuario:='', @conexiones:=0;

SELECT USER, COUNT(USER) as conexiones
INTO @usuario, @conexiones
FROM information_schema.PROCESSLIST
GROUP BY USER
ORDER BY conexiones DESC
LIMIT 1;

SELECT @usuario as 'Usuario',
@conexiones as 'Veces';
```



### Variables locales / de bloque

Sin existencia fuera del bloque donde se declaran (bloque)

```sql
DELIMITER $$
CREATE PROCEDURE department_getList4()
BEGIN
	 DECLARE d CHAR(4) DEFAULT 'd001';
	SELECT dept_name
	FROM departments
	WHERE dept_no=d;
END$$

DELIMITER ;

CALL department_getList4();

SELECT d;
```

> La variable `d` sólo está disponible dentro del bloque delimitado por `BEGIN` y `END`, por lo que `SELECT d` dará un error.

```sql
DELIMITER $$
CRETE PROCEDURE department_getList3()
BEGIN
    DECLARE d CHAR(4);
    SET d := 'd002';
    SELECT dept_name
    FROM departments
    WHERE dept_no=d
END$$
DELIMITER ;

CALL department_getList3();
```

### Globales

Pertenecen al servidor general. 

```sql
SHOW GLOBAL VARIABLES LIKE 'max_%';
SET GLOBAL max_conncetions=1000;

SHOW GLOBAL VARIABLES like 'max_%';
SET GLOBAL max_connections=DEFAULT;

SHOW GLOBAL VARIABLES LIKE 'max_%';
SELECT @@GLOBAL.max_connections;
```

> `SHOW GLOBAL VARIABLES` para mostrar variables globales, `SET GLOBAL` para darles valor, `SELECT @@GLOBAL.{nombre}` para mostrarlas.

#### Ficheros para mostrar las variables globales:

| Nombre fichero | OS |
| --- | --- |
| my.ini | Windows |
| my.cnf | Linux |


### Estructuras de control

#### Condicionales

- IF-THEN-ELSEIF-THEN-ELSE-END IF;
- CASE-WHEN-THEN-ELSE-END CASE;

#### Repeticiones

- WHILE-DO-END WHILE;
- REPEAT-UNTIL-END REPEAT;
- LOOP-END LOOP;
- LEAVE, ITERATE

#### Etiquetas

- :

## Parámetros

Parámetro formal vs. parámetro real/valor

### Tipos de parámetros

- Entrada
- Salida
- E/S

#### Entrada:

Usamos la palabra reservada `IN` o no ponemos nada (es el tipo por defecto)

#### Salida

Usamos la palabra reservada `OUT`