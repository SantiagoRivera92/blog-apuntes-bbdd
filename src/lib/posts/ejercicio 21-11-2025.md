---
title: Ejercicio 21-11-2025
date: 2025-11-21
author: Santi Rivera
slug: ejercicio-21-11-2025
categories:
	- Ejercicios
---

## Ejercicio 1


```python
def holaMundo():
	print("Hola Mundo")
```

### 1FN

- `Matrículas` (<u>DNI</u>, Nombre, Apellido1, Apellido2)
- `Asignaturas` (<u>Cod_asignatura</u>, Nota, Curso, Aula, Lugar)

### 2FN

- `Matriculas` (<u>DNI</u> (1), Nombre, Apellido1, Apellido2)
- `NotasAsignaturas` (<u>DNI</u> (1), <u>Cod_asignatura</u> (2), Nota)
- `Asignaturas` (<u>Cod_asignatura</u> (2), Curso, Aula, Lugar)

### 3FN

- `Matriculas` (<u>DNI</u> (1), Nombre, Apellido1, Apellido2)
- `NotasAsignaturas` (<u>DNI</u> (1), <u>Cod_asignatura</u> (2), Nota)
- `Asignaturas` (<u>Cod_asignatura</u> (2), Curso, Aula (3))
- `Aulas` (<u>Aula</u> (3), Lugar)

## Ejercicio 2

### 1FN

- `Empleados`: (<u>NumEmp</u>, NSS, Seccion, NumJefeSec)
- `Matrículas` (<u>NumEmp</u> (1), <u>NumCurso</u> (2), Tema)

### 2FN

- `Empleados`: (<u>NumEmp</u>, NSS, Seccion, NumJefeSec)
- `Cursos`: (<u>NumCurso</u>, Tema)
- `Matrículas` (<u>NumEmp</u> (1), <u>NumCurso</u> (2))

### 3FN

- `Empleados` (<u>NumEmp</u> (1), NSS, Seccion (2))
- `Secciones` (<u>Seccion</u> (2), NumJefeSeccion (1))
- `Cursos` (<u>NumCurso</u>, Tema)
- `Matrículas` (<u>NumEmp</u> (1), <u>NumCurso</u> (2))

## Ejercicio 3

### 1FN

- `Facturas` (<u>id_orden</u>, id_cliente, fecha, nombre_cli, ciudad)
- `LíneasFacturas` (<u>id_orden</u>, <u>id_art</u>, nom_art, cant, precio)

### 2FN

- `Facturas` (<u>id_orden</u>, id_cliente, fecha, nombre_cli, ciudad)
- `LíneasFacturas` (<u>id_orden</u>, <u>id_art</u>, cant)
- `Artículos` (<u>id_art</u>, nom_art, precioU)

### 3FN

- `Facturas` (<u>Id_orden</u> (1), id_cliente (3), fecha)
- `LíneasFacturas` (<u>Id_orden</u> (1), <u>id_art</u> (2), cantidad)
- `Clientes` (<u>id_cliente</u> (3), nombre, ciudad)
- `Artículos` (<u>id_art</u> (2), nom_art, precio)

## Ejercicio 4

### 1FN

- `Facturas` (<u>id_factura</u>, fecha, nombre_cliente, dirección_cliente, cedula_cliente, ciudad_cliente, telefono_cliente)
- `LíneasFacturas`(<u>id_producto</u>, <u>id_factura</u>, categoría_producto, desc_prod, precio_unitario, cantidad)

### 2FN

- `Facturas` (<u>id_factura</u>, fecha, nombre_cliente, dirección_cliente, cedula_cliente, ciudad_cliente, telefono_cliente)
- `LíneasFacturas` (<u>id_factura</u>, <u>id_producto</u>, cantidad)
- `Productos`(<u>id_producto</u>, categoría_producto, desc_prod, precio_unitario)
### 3FN

- `Facturas` (<u>id_factura</u> (2), fecha, cedula (1))
- `LíneasFacturas` (<u>id_factura</u> (2), <u>id_producto</u> (3), cantidad)
- `Productos` (<u>id_producto</u> (3), categoria, desc_prod, precio_unitario)
- `Clientes` (<u>cedula</u> (1), nombre, dirección, ciudad, teléfono)