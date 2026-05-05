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

Usamos la palabra reservada `OUT`. Sirve para poder trabajar con variables y obtener un valor fuera del procedimiento.

#### E/S

Usamos la palabra reservada `INOUT`. Sirve para poder sacar valores de la rutina y también introducirlos en la rutina.


### Estructuras funcionales: Procedimientos

Los procedimientos estarán asociados siempre a una base de datos en concreto

- `PROCEDURE`
    - `CREATE`
    - `SHOW`
    - `ALTER`
    - `DROP`
    - `CALL`

Un procedimiento no devuelve ningún valor.


### Estructuras funcionales: Funciones

Funciones deterministas y no deterministas

Parámetros y funciones

- `FUNCTION`
    - `CREATE`
    - `SHOW`
        - `FUNCTION STATUS`
        - `CREATE FUNCTION`
    - `ALTER`
    - `DROP`

Son rutinas que, al ejecutarse, devuelven un dato asociado a su nombre y lo recibe quien hace la llamada a la función.

Se pueden usar dentro de funciones SQL, y son más rápidas de ejecutar que los procedimientos.

Con `RETURNS` indicamos el tipo de dato que devolvemos y con `DETERMINISTIC` indicamos que la función es determinista, es decir, que para la misma entrada siempre obtenemos la misma salida.

Dentro del cuerpo de la función tenemos que utilizar un `RETURN` para devolver el dato.

Para usar una función se hace igual que con las funciones del lenguaje (`AVG`, `MAX`, etc)

```sql
DELIMITER //
CREATE FUNCTION ejemploFuncion2() RETURNS CHAR(7) DETERMINISTIC
BEGIN
    return 'Ejemplo'
END //
DELIMITER ;

SELECT CONCAT(first_name, ejemploFuncion2()) FROM employees;
```

#### Códigos importantes para trabajar con funciones

- `SHOW FUNCTION STATUS`
- `SHOW CREATE FUNCTION <nombre>`
- `ALTER FUNCTION <nombre>`
- `DROP FUNCTION <nombre>`

##### Ejemplo

```sql
DELIMITER $$
CREATE FUNCTION department_getName(numero char(4)) RETURNS varchar(40) DETERMINISTIC
BEGIN
    DECLARE nombre varchar(40) default 'DESCONOCIDO';

    SELECT dept_name
        INTO nombre
        FROM departments
    WHERE dept_no=numero;

    RETURN nombre;
END $$
DELIMITER ;
```

##### Casos de uso

```sql
SELECT department_getName('d16');

SET @nombre = department_getName('d009');
SELECT @nombre;

SELECT department_getName(dept_no) FROM departments;

SELECT emp_no FROM dept_manager WHERE depatrment_getName(dept_no) LIKE 'Development' AND to_date>=CURDATE();
```

#### employee_getMaxSalary

```sql
DELIMITER $$
CREATE FUNCTION employee_getMaxSalary(numero INT(11) RETURNS INT(11) DETERMINISTIC)
BEGIN
    DECLARE sueldo int default -1;
    SELECT max(salary) INTO sueldo FROm salaries WHERE emp_no=numero;
    RETURN sueldo;
END $$
DELIMITER ;
```


### Parámetros y salida avanzados

Tipos de variables en MySQL

`mysql -e "<SQL>" > <fichero>`

- S.O.:
    - cmd
    - shell

- S.O. con redirección:
    - `into outfile '<fichero>'`

- intérprete SGBD
    - mysql
    - interfaz gráfica


# Deberes
Buscar qué es un cursor
