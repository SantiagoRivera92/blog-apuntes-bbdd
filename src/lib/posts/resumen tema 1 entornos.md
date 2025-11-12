---
title: Tema 1 - Entornos de Desarrollo
date: 2025-10-11
author: Santi Rivera
slug: entornos-tema1
categories:
    - Entornos
---


# Tema 1: Entornos de Desarrollo

### Software:

Programas que controlan una computadora, haciendo que siga unos pasos lógicos predeterminados. **Es el intermediario entre hardware y hombre.**

### Algoritmo:

Los **pasos a seguir** para resolver un problema.

## Tipos de lenguajes de programación:

### Por nivel de abstracción:

- Bajo nivel: 
    - Ensamblador
- Medio nivel:
    - C
- Alto nivel:
    - Java
    - Ruby
    - Python

### Por propósito:

- General:
    - C
- Específico:
    - Csound
- Programación de sistemas:
    - C
    - Rust

### Scripts

- JavaScript
- Python

### Por evolución histórica:

- 1GL: Código máquina
- 2GL: Ensamblador
- 3GL: C, Java
- 4GL: Mathematica
- 5GL: Prolog
> **GL** significa **"Generation Language"**. Por tanto, 4GL significa "Fourth Generation Language" o "Lenguaje de cuarta generación".

### Por método de ejecución:

- Compilados:
    - C
- Interpretados: 
    - Python
- Mixtos: 
    - Java

### Por manera de abordar la tarea:

- Imperativo: 
    - C
    - Java
    - Python
- Declarativo: 
    - Prolog

### Por paradigma de programación:

- Procedural: 
    - C
    - Pascal
- Orientada a objetos: 
    - Java
    - C++ 
    - C#
- Funcional: 
    - Lisp
    - Haskell
- Lógica
    - Prolog

### Por lugar de ejecución:

- Cliente: JavaScript
- Servidor: PHP

### Obtención del código ejecutable:

#### Código

- Código fuente:
    - El código escrito por una o varias personas.
- Código objeto:
    - El resultado de la compilación del código fuente.
- Código ejecutable:
    - El resultado de enlazar todos los archivos de código objeto mediante un enlazador.

#### Traductores:

- Programas que traducen el código fuente a programas escritos en código máquina

##### Compilador

- El programa original sólo se traduce una vez, creando un nuevo archivo ejecutable que puede ejecutarse varias veces.

##### Intérprete

- El código fuente se lee y ejecuta línea a línea cada vez que quiere ejecutarse.

##### Depurador

- Es un programa independiente, **integrado entre el editor, el compilador y el enlazador**. Sirve para ejecutar un programa línea a línea, detener la ejecución de un programa en cualquier línea e **inspeccionar la memoria memoria** para localizar y corregir errores **en tiempo de ejecución**.

## Fases del desarrollo de una aplicación:

### Análisis

- Establecimiento del producto a desarrollar.
- **Gran comunicación entre usuario y analista** para especificar los requisitos.
- **Desarrollo de prototipos** para conocer los requisitos con más precisión.

#### Técnicas:

- Diagrama de flujo de datos.
- Modelo de datos.
- Diccionario de datos.
- Definición de interfaz de usuario.

### Diseño

#### Se alcanza con mayor precisión una solución, teniendo en cuenta los recursos físicos y lógicos disponibles.

- Diseño externo:
    - Formatos de información de entrada y salida.
- Diseño de datos:
    - Estructuras de datos de acuerdo con su soporte físico y lógico.
- Diseño modular:
    - División de la aplicación en módulos.
- Diseño procedimental:
    - Especificaciones de cada módulo y sus algoritmos.

### Codificación

#### Traducir los resultados de análisis + diseño a un lenguaje de programación teniendo en cuenta las especificaciones. Se deben realizar pruebas.

- Pruebas unitarias: 
    - Cada método / clase / módulo realiza su tarea correctamente.
- Pruebas de interconexión: 
    - Los métodos / clases / módulos se conectan correctamente entre sí.
- Pruebas de integración: 
    - El sistema completo funciona correctamente.

### Integración

- Se implanta la aplicación en los sistemas donde van a funcionar.
- Instalación del programa.
- Pruebas de aceptación al nuevo sistema.
- Conversión de la información del antiguo sistema al nuevo.
- Eliminación del sistema anterior.
- Al final se debe completar la información al usuario sobre el nuevo sistema y cómo usarlo, y darle la documentación necesaria.

### Mantenimiento

Última fase del ciclo de vida. Arreglamos problemas que vayan surgiendo en la aplicación con el uso. En algunas ocasiones, es necesario empezar el ciclo de vida desde cero.

- Mantenimiento correctivo:
    - Solucionar errores que no detectamos en las pruebas anteriores.
- Mantenimiento adaptativo:
    - Modificar el programa por cambios en el sistema (sistema operativo, versiones de librerías, etc)
- Mantenimiento perfectivo:
    - Modificar el programa para mejorarlo o añadir nuevas funcionalidades.

#### Los dos últimos reinician el ciclo de vida.