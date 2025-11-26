---
title: Ejercicios - Bases de Datos - Modelo Relacional
date: 2025-11-11
author: Santi Rivera
slug: ejercicios-modelo-relacional
categories:
	- Ejercicios
---

## Empresa

![Empresa](/images/ejercicios/empresa.jpg)

- `Clientes` (<u>id</u> **(1)**, nombre, apellido, dirección, fecha_n)
- `Compras` (<u>fecha</u>, <u>id_cliente</u> **(1)**, <u>id_producto</u> **(2)**, cantidad, precio)
- `Productos` (<u>id</u> **(2)**, nombre, precio, id_proveedor **(3)**)
- `Proveedores` (<u>id</u> **(3)**, nombre, dirección)

## Transportes

![Transportes](/images/ejercicios/transportes.jpg)

- `Camioneros` (<u>id</u> **(1)**, nombre, teléfono, dirección, salario, población)
- `Paquetes` (<u>id_paquete</u> **(2)**, id_camionero **(1)**, id_provincia **(3)**, dirección, destinatario, descripción)
- `Provincias` (<u>id</u> **(3)**, nombre)
- `Camiones` (<u>matricula</u> **(4)**, modelo, tipo, potencia)
- `Turnos` (<u>id_camionero</u> **(1)**, <u>matricula</u> **(4)**, <u>fecha</u>)

## Instituto

![Instituto](/images/ejercicios/instituto.jpg)

- `Profesores` (<u>id</u> **(1)**, nombre, dirección, teléfono)
- `Módulos` (<u>código</u> **(2)**, <u>id_profesor</u> **(1)**, nombre)
- `Alumnos` (<u>id</u> **(3)**, nombre, apellido, fecha_nacimiento, id_delegado **(3)**)
- `Matrículas` (<u>id_alumno</u> **(3)**, <u>código_modulo</u> **(2)**)

## Biblioteca

- `Autores` (<u>código</u> (1), nombre)
- `Autorías` (<u>código_autor</u> (1), <u>código libro</u> (2))
- `Libros` (<u>código</u> (2), nombre, ISBN, editorial, páginas)
- `Ejemplares` (<u>código</u> (3), localización, código_libro (3))
- `Préstamos` (<u>código_ejemplar</u> (3), <u>código_usuario</u> (4), <u>fecha_préstamo</u>, fecha_devolución)
- `Usuarios` (<u>código</u>, nombre, teléfono, dirección)

### Ejemplos

- `Autores`: 1, "Terry Pratchett"
- `Autorías`: 1, 1
- `Libros`: 1, "Mort", 9788483463284, "DEBOLSILLO", 288
- `Ejemplares`: 1, "Estantería 3", 1
- `Préstamos`: 1, 1, 16/11/25, 23/11/25
- `Usuarios`: 1, Santiago Rivera, 654321987, "C/ Falsa, 123"

## Fútbol

- `Jugadores`(<u>código</u> (1), nombre, posición, fecha_nac, código_equipo (3))
- `Goles` (<u>código</u>, código_jugador (1), código_partido (2), minuto, desc)
- `Partidos`(<u>código</u> (2), goles_fuera, goles_casa, fecha)
- `Participaciones` (<u>código_partido</u> (2), <u>código_equipo</u> (3))
- `Equipos` (<u>código</u> (3), año, aforo, estadio, ciudad, nombre, dni_presidente (4))
- `Presidentes` (<u>dni</u>, nombre, apellido, año, fecha_nacimiento)

### Ejemplos

- `Jugadores`: 1, "Jacinto Fernández", "Delantero", 16/11/04, 1
- `Goles`: 1, 1, 1, 26, "Gol del minuto 26"
- `Partidos`: 1, 3, 1, 16/11/04
- `Participaciones`: 1, 1
- `Equipos`: 1, 2025, 27618, "Nuevo Estadio José Zorrilla", "Valladolid", "Real Valladolid", "12345678-X"
- `Presidentes`: "12345678-X", "Jorge", "Suárez", 2025, 08/11/87 

## Hotel

- `Hoteles` (<u>nombre</u> (1), código_categoría (2), dirección, teléfono, año)
- `Categorías` (<u>código</u> (2), descripción, iva)
- `Habitaciones` (<u>código</u> (3), nombre_hotel (1), tipo)
- `ReservasDeAgencias` (<u>código_habitación</u> (3), <u>código_agencia</u> (4), <u>fecha_inicio</u>, fecha_fin)
- `Agencias` (<u>código</u> (4), nombre, teléfono, nombre_persona, dirección)
- `ReservasDeParticulares` (<u>código_habitación</u> (3), <u>código_persona</u> (5), <u>fecha_inicio</u>, fecha_fin)
- `Particulares` (<u>código</u> (5), nombre, dirección, teléfono)

### Ejemplos

- `Hoteles`: "Catalonia Punta del Rey", 4, "Av. Marítima, 165, 38520, Tenerife, España", 922501899, 2025
- `Categorías`: 4, "4 Estrellas", 21
- `Habitaciones`: 1, "Catalonia Punta del Rey", "Individual"
- `ReservasDeAgencias`: 1, 1, 09/11/25, 16/11/25
- `Agencias` 1, "Viajes Francisco", 919191919, "Jacinto Fernández", "C/ Falsa, 123"
- `ReservasDeParticulares`: 1, 1, 16/11/25, 23/11/25
- `Particulares`: 1, "Jorge Suárez", "C/ Falsa, 124", 654321987