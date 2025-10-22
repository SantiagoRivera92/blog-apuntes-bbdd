---
title: Tema 2 - Bases de datos relacionales
date: 2025-10-22
author: Santi Rivera
slug: tema2
---

## 2.1: Conceptos de bases de datos relacionales.

### Base de datos relacional

#### Colección de datos con una estructura basada en relaciones entre entidades/tablas y restricciones en campos/datos.

#### Su seguridad se basa en: integridad, confidencialidad y disponibilidad.

- Integridad: los datos tienen que ser veraces, sin discrepancias entre los datos.
- Confidencialidad: los datos sólo serán accesibles por las personas con privilegios para ello.
- Disponibilidad: los datos deberían estar siempre disponibles.
- No existe redundancia de datos, o si existe hay que minimizarla lo máximo posible.
- Etapas para crear una BD relacional: conceptual, lógica y física.

## 2.2: Relaciones

- Nombre único
- Valores atómicos / concretos
- Los registros no están ordenados. No existe un orden específico para atributos/columnas ni para tuplas/filas
- Las tuplas están bien diferenciadas mediante claves.

## 2.3: Claves

### Clave primaria: 

#### La clave de la relación será el conjunto mínimo de atributos que identifica de forma unívoca cada tupla

### Clave ajena

#### Conjunto no vacío de atributos cuyos valores coinciden normalmente con la clave primaria de otra relación o tabla permitiendo establecer relaciones.

## 2.4: Restricciones

### Inherentes al modelo

#### Diferencias entre una relación y una tabla

### Semánticas 

#### Reflejadas en el diseño de la base de datos

- **UNIQUE** (no duplicado)
- **NOT NULL** (no vacío)
- **PRIMARY KEY** (clave principal)
- **FOREIGN KEY** (clave ajena)
- **RESTRICT** (restringido)
- **ON DELETE/UPDATE CASCADE** (borrado/actualización en cascada)
- **SET NULL** (valor vacío)
- **DEFAULT** (valor por defecto)

## 2.5 Operaciones de conjuntos

#### La base matemática de nuestro esquema

### Teoría de conjuntos

#### Unión (compatible): A U B. 
Incluye todas las tuplas de A y todas las tuplas de B. No incluye las tuplas repetidas.
> Dos tablas son compatibles si tienen el mismo número y tipo de columnas.

#### Intersección (compatible): A ^ B. 
Incluye todas las tuplas que pertenezcan a la vez a los conjuntos A y B.

#### Diferencia (compatible): A - B. 
Incluye todas las tuplas de A que no aparecen en B.

#### Producto cartesiano: A x B. 
Incluye la combinación de cada tupla de A con todas las tuplas de B.

#### Conjunto vacío:
Aquél conjunto que no contiene elementos. Es un resultado válido.


