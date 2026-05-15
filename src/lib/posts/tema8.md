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

#### Desde el S.O.

`mysql -u root -e "select gender from employeespractica2324.employees where emp_no=10001;" > sexo.txt`

> Esto lo crea en el directorio actual con cabecera

#### Desde el S.O. (con redirección)

`mysql -u root -p -e "select gender from employeespractica2324.employees where emp_no=10001 into outfile '2.txt';"`

> Esto lo crea en el directorio data y sin cabecera

#### Desde un cliente de MySQL.

`select * from employees into outfile 'empleados.txt'`

> Esto lo crea en la carpeta de la bases de datos con la que estoy trabajando y sin cabeceras

---

## Cursores

- `CURSOR`
    - `DECLARE`
    - `OPEN`
    - `FETCH`
    - `CLOSE`

Un cursor nos permite trabajar con más de un registro a la vez. Es una estructura en memoria ram que nos permite recorrer fila a fila el resultado, guardando los datos de cada fila en variables. El procesado de un cursor suele ser similar en todos los SGBD que los soportan. 

Estos son los pasos necesarios:

- Declarar el cursor, reservar memoria ram y definir el manejador de excepciones
- Abrir el cursor, ejecutar el código SQL y situarse en el primer resultado devuelto
- Recorrer el cursor hasta que no haya más filas
- Cerrar el cursor y librar recursos

La forma que tiene MySQL de saber si ha llegado al final del cursor es capturando una excepción.


```sql
DELIMITER $$
CREATE PROCEDURE cursores1()
BEGIN
    DECLARE varA VARCHAR(14);
    DECLARE varB VARCHAR(16);
    
    DECLARE done INT DEFAULT FALSE;
    -- Declaramos el cursor y reservamos la memoria RAM
    DECLARE nombreCursor CURSOR FOR SELECT first_name, last_name FROM employees WHERE emp_no<10100;
    -- Definimos el manejador de excepciones
    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE; 

    -- Abrimos el cursor, ejecutamos el código SQL y nos situamos en el primer resultado
    OPEN nombreCursor;
    -- Recorremos el cursor registro a registro
    read_loop: LOOP
        -- Recuperamos las columnas de cada registro en varA y varB
        FETCH nombreCursor INTO varA, varB;
        IF done THEN
            LEAVE read_loop;
        END IF;
        SELECT CONCAT(varA, ' ', varB);
    END LOOP
    -- Cerramos el cursor y liberamos los recursos.
    CLOSE nombreCursor;
END $$
DELIMITER ;

CALL cursores1();
```

## Errores y excepciones

Durante la ejecución pueden aparecer errores que detengan la ejecución. MySQL permite capturar esos errores y tratarlos.

Si por ejemplo intentnamos dar de alta con un insert una clave primaria que ya existe, nos dirá que la clave primaria está duplicada y se rompe la ejecución.

```sql
DELIMITER $$
CREATE PROCEDURE employee_add(numEmp int, fechaNac date, nombre varchar(14), apellidos varchar(16), mujer boolean)
BEGIN
    DECLARE error boolean default false;
    DECLARE genero char(1);

    IF(mujer) THEN
        SET genero = 'F';
    ELSE
        SET genero = 'M';
    END IF;

    INSERT INTO employees(emp_no, birth_date, first_name, last_name, gender, hire_date)
    VALUES (numEmp, fechaNac, nombre, apellidos, genero, CURDATE());
    IF (error) THEN
        SELECT -1, 'Clave primaria duplicada';
    ELSE
        SELECT 0, 'Fila añadida';
    END IF;
END$$
```

## Otras rutinas

Además de los procedimientos y las funciones encontramos otros tipos de rutinas almacenadas en los SGBD relacionales como son:

- Disparadores o triggers (`acción DML <tabla>`)
- Vistas (`datos <BD>`)
- Eventos (`calendario <servidor>`)

### Triggers

- Uso:
    - CREATE
    - ALIAS
    - Ordenación

- SHOW
    - TRIGGERS
    - CREATE TRIGGER
    - INFORMATION_SCHEMA.TRIGGERS

Es una rutina avanzada que se va a ejecutar cuando sobre una tabla se realice alguna operación DML. Hemos de indicar una temporalidad (antes o después) con las palabras reservadas `BEFORE` o `AFTER`. 

Existen limitaciones: 
- Los triggers no se ejecutan en cascada. 
- En MySQL, se ejecutan una vez por cada fila. 
- No podemos utilizar transacciones dentro de los triggers
- En versiones antiguas de MySQL no pueden existir dos triggers con el mismo nombre


### ¿Para qué se usan los triggers?

Los disparadores se usan (normalmente) para:

- Hacer control de sesiones, como controlar en variables de usuario el trabajo que se está realizando desde cliente.
- También se utilizan para auditar los usuarios (monitorizar qué está haciendo cada usuario).
- Para verificar los datos antes de utilizarlos.
- Para generar estadísticas e informes en tiemo real.
- Para generar copias de seguridad de los datos antes de que sean modificados o borrados.

Para crear triggers, necesitamos el permiso `TRIGGER`. Tenemos que saber que existen dos alias: `NEW` y `OLD`, que según la operación que estemos realiazndo harán referencia a los valores nuevos y a los valores antiguos.

No es posible modificar disparadores: Tenemos que borrarlo y volver a crearlo.

```sql
DELIMITER $$
CREATE TRIGGER departments_BEFORE_INSERT
BEFORE INSERT
ON departments
FOR EACH ROW
BEGIN
    IF (CHAR_LENGTH(NEW.dept_name)<5) then
        CALL `'Nombre de departamento menor de 5 caracteres'`;
    END IF;
END$$
DELIMITER ;

insert into departments values('d000', 'a');
insert into departments values('d000', 'abcdef')
```

## Eventos programados

Se basan en una marca temporal.

Los eventos son tareas que se ejecutan en base a una marca horaria definida previamente. Antes de la versión 5.7 no existen en el SGBD MySQL tal y como nosotros los vamos a tratar. Un evento se identificará por su nombre, está asociado a una base de datos y se ejecuta en una marca de tiempo determinada, una única vez o periódicamente. Un evento ejecuta una instrucción SQL o un conjunto de instrucciones SQL formado por un bloque BEGIN … END.

Aparecen en MySQL v5.7

`Show variables like ‘event_scheduler’;` (valor actual) 

`Show processlist` (tareas de ejecución)

`Set evento_scheduler=ON|OFF|DISABLED;` (configurar valor)

Para poder crear eventos programados y que estos se ejecuten es necesario hacer uso de la variable global evento scheduler.

    - **OFF**: El hilo que se encarga de ejecutar los eventos está desactivado y por lo tanto no se ejecutará ningún evento. La tarea `event_scheduler` no se muestra con la orden SHOW PROCESSLIST. Es el valor por defecto. Para activar el planificador de eventos debemos dar el valor `ON` a esta variable.

```sql
SET GLOBAL event_scheduler = OFF
```

    - **ON**: El planificador de eventos está iniciado. En este caso aparecerá como un proceso más al ejecutar la orden `SQL SHOW PROCESSLIST`

    - **DISABLED**: En este caso el planificador de eventos no podría ser activado dinámicamente cambiando el valor de la variable global a `ON`. Sólo sería posible desde el fichero de configuración del servidor MySQL.

```sql
SELECT VERSION();
```

```sql
SHOW GLOBAL VARIABLES LIKE 'event_scheduler';
```

```sql
SHOW PROCESSLIST;
```

La orden SQL para crear eventos es CREATE EVENT. Se necesita el privilegio EVENT sobre la base de datos.

```sql
/*Accede con root y crear: Un usuario llamado programador1 con todos los permisos globales asignados*/ 
CREATE USER programador1@localhost; 
GRANT ALL PRIVILEGES  
ON *.* TO programador1@localhost; 

/*Un usuario programador2 con todos los permisos globales asignados menos EVENT*/
CREATE USER programador2@localhost; 
GRANT ALL PRIVILEGES  
ON *.* TO programador2@localhost; 
REVOKE EVENT ON *.* FROM programador2@localhost; 

FLUSH PRIVILEGES; 

CREATE EVENT myevent 

ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 HOUR -- Si uso AT se ejecuta el evento una unica vez 
EVERY -- Si se usa EVERY se deberá indicar la frecuencia 
    ON COMPLETION [NOT] PRESERVE -- Con el NOT se borra una vez ejecutado sin el NOT se preserva 
DO 

UPDATE myschema.mytable SET mycol = mycol + 1; 
```

```sql
/*Crear un evento le ponemos marca temporal de que se ejecute una unica vez (AT)  
en la fecha y hora actuales + 20 segundo, Lo que haces es actualizar la la tabla  
mytable a la columna mycol le suma 100*/ 
CREATE EVENT myevent33 
ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 20 SECOND  
DO 
    UPDATE myschema.mytable SET mycol = mycol + 100; 
```

Se borran por defecto, si quiero que se preserve se debe especificar.

```sql
CREATE EVENT myevent10  
ON SCHEDULE EVERY 12 HOUR  
STARTS CURRENT_TIMESTAMP + INTERVAL 30 MINUTE  
ENDS CURRENT_TIMESTAMP + INTERVAL 4 WEEK 
ON COMPLETION PRESERVE 
DO
    UPDATE myschema.mytable SET mycol = mycol + 1; 

/*Crear un evento que meta en la tabla empleados_mes  
los empleados de ese mes */	 

DELIMITER \\ 
CREATE EVENT empleados_del_mes  
ON SCHEDULE  
EVERY 1 MONTH 
COMMENT 'Guarda los empleados contratados en el mes anterior' 
DO 

BEGIN 
    INSERT INTO empleados_mes (nombre) 
    SELECT CONCAT(first_name,' ',last_name) 
    FROM employeespractica2324.employees 
    WHERE hire_date >= DATE_SUB(NOW(), INTERVAL 1 MONTH); 
END\\ 

DELIMITER ;	 


/*Crear un evento que regale 100 euros, dentro de un mes 
a las nuevas cuentas creadas durante los proximos 30 dias*/ 

DELIMITER \\ 
CREATE EVENT regalo_100_euros  
ON SCHEDULE  
AT CURRENT_TIMESTAMP + INTERVAL 1 MONTH  
DO 
    UPDATE ebanca.cliente 
    SET saldo = saldo + 100 WHERE fecha_creacion 
    BETWEEN NOW() AND DATE_ADD(NOW(), INTERVAL -1 MONTH); 

$$ 

DELIMITER ; 
```

```sql
DROP EVENT 
SHOW EVENT
```