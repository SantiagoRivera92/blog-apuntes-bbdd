---
title: Ejercicio 21-11-2025
date: 2025-11-21
author: Santi Rivera
slug: ejercicio-21-11-2025
categories:
	- Ejercicios
---

## Ejercicio 1

- `Matriculas` (<u>DNI</u> (1), Nombre, Apellidos)
- `NotasAsignaturas` (<u>DNI</u> (1), <u>Cod_asignatura</u> (2), Nota)
- `Asignaturas` (<u>Cod_asignatura</u> (2), Curso, Aula, Lugar)

## Ejercicio 2

- `Empleados` (<u>NumEmp</u> (1), NSS, Seccion (2))
- `Secciones` (<u>Seccion</u> (2), NumJefeSeccion (1))
- `Cursos` (<u>NumCurso</u>, Tema)
- `Matrículas` (<u>NumEmp</u> (1), <u>NumCurso</u> (2))

## Ejercicio 3

- `Facturas` (<u>Id_orden</u> (1), id_cliente (3), fecha)
- `LíneasFacturas` (<u>Id_orden</u> (1), <u>id_art</u> (2), cantidad, precio)
- `Clientes` (<u>id_cliente</u> (3), nombre, ciudad)
- `Artículos` (<u>id_art</u> (2), nom_art, precio)

## Ejercicio 4

- `Factura` (<u>id_factura</u> (2), fecha, id_cliente (1))
- `LíneasFacturas` (<u>id_factura</u> (2), <u>id_producto</u> (3), precio_unitario, cantidad)
- `Producto` (<u>id_producto</u> (3), categoria, desc_prod, precio_unitario)
- `Clientes` (<u>id_cliente</u> (1), nombre, dirección, NIT, ciudad, teléfono)