---
title: Solución ejercicios modelo relacional
date: 2025-11-11
author: Santi Rivera
slug: ejercicios-modelo-relacional
categories:
	- Ejercicios
---

## Empresa

![Empresa](/images/ejercicios/empresa.jpg)

- `Clientes` (<u>id</u> **(1)**, nombre, apellido, dirección, fecha_n)
- `Compras` (<u>id_compra</u>, <u>id_cliente</u> **(1)**, <u>id_producto</u> **(2)**, cantidad, precio)
- `Productos` (<u>id</u> **(2)**, nombre, apellido, id_proveedor **(3)**)
- `Proveedores` (<u>id</u> **(3)**, nombre, dirección)

## Transportes

![Transportes](/images/ejercicios/transportes.jpg)

- `Camioneros` (<u>id</u> **(1)**, nombre, teléfono, dirección, salario, población)
- `Paquetes` (<u>id</u> **(2)**, id_camionero **(1)**, id_provincia **(3)**, dirección, destinatario, descripción)
- `Provincias` (<u>id</u> **(3)**, nombre)
- `Camiones` (<u>matricula</u> **(4)**, modelo, tipo, potencia)
- `Turnos` (<u>id_camionero</u> **(1)**, <u>matricula</u> **(4)**, fecha)

## Instituto

![Instituto](/images/ejercicios/instituto.jpg)

- `Profesores` (<u>id</u> **(1)**, nombre, dirección, teléfono)
- `Módulos` (<u>código</u> **(2)**, <u>id_profesor</u> **(1)**, nombre)
- `Alumnos` (<u>id</u> **(3)**, nombre, apellido, fecha_nacimiento, id_delegado **(3)**)
- `Cursos` (<u>id_alumno</u> **(3)**, <u>código_modulo</u> **(2)**)