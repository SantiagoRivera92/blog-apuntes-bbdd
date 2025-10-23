---
title: Tema 1 - Almacenamiento de datos
date: 2025-10-20
author: Santi Rivera
slug: tema1
---

## 1.1 - Ficheros

**Definición:** Estructura de datos organizada, almacenada en un dispositivo de almacenamiento. Se caracterizan por su tipo y extensión, que determina su formato. Son creados y gestionados por el S.O.

**Tipos**

* **Según su contenido**
    * Binario
    * Texto
* **Según su organización**
    * **Secuenciales**: No se puede saltar.
    * **Aleatorios**: Se puede saltar.
    * **Indexados**: Se puede saltar gracias a un índice.

**ASCII**

* 1 byte = 1 carácter = 8 bits.
* 2^8 = 256 caracteres.

![Tabla ASCII](/images/tema1/ascii.jpg)

* **Ejemplo:** "A" en ASCII es 65 (decimal), que en binario es 0100 0001. Esto se puede ver en la calculadora del ordenador, opción "programador".

**Ficheros Secuenciales**

Los símbolos delimitadores son elegidos por el usuario y ocupan el espacio de campo, registro y EOF.

* **Campos** (#): teléfono, nombre y apellidos.
* **Registros** (|): datos de la siguiente persona.
* **EOF (end of file)** ($): final del fichero.
* Si no se desea poner nada en uno de los campos, se debe usar doble símbolo.

**Ficheros Directos o Aleatorios**

Se basan en el conocimiento previo del tamaño en bytes de los campos y, por lo tanto, del tamaño de los registros.

* **Ejemplo de Tamaños:**
    * Campo 1 (teléfono): 10 bytes.
    * Campo 2 (nombre): 3 bytes.
    * Campo 3 (apellido): 5 bytes.
    * El registro completo tendrá un tamaño de 18 bytes (suma de los campos).
* Para ir al tercer registro y al nombre: `18 x 2 + 10 = 46 bytes`.

**Ficheros Indexados**

Se componen de dos partes:

1.  **Índice:** Cada valor del índice permite saber dónde se encuentra ese registro dentro del fichero.
2.  **Fichero de datos/Campos**: Estos ficheros no tienen que tener tamaño fijo.
* Se caracterizan por tener un dato relevante, y el fichero del índice es aleatorio.

## 1.2 - Conceptos de Bases de Datos.

**Definición:** Conjunto de datos con una estructura propia pertenecientes a un mismo problema.

* **Más utilizados:** Bases de datos relacionales (tablas, relaciones y coherencia).

**Conceptos**

* **Datos tipo:** texto, numérico o fecha.
* **Campo/columna/atributo:** Todos los datos a los que se da el mismo nombre (ejemplo: edad, fecha, nombre).
* **Registro/tupla/fila:** Representadas en horizontal, hacen referencia a todos los atributos de un caso.
* **Clave primaria:** Columna más importante que permite conocer las demás (una o varias columnas).
* **Tabla:** Conjunto de filas y columnas al que se le pone nombre en plural.
* **Consulta:** Mediante código SQL se pueden lanzar consultas a la base de datos.
* **Vista:** Estructura similar a una tabla que, por motivos de seguridad, solo muestra los datos a los que se tiene acceso.
* **Informe:** Resúmenes de tablas de las bases de datos que incluyen textos y gráficos.
* **Script/procedimiento:** Pequeños trozos de código para programar las bases de datos.
* **Esquema:** Conjunto de todos los elementos anteriores.

**Línea de Tiempo**

* **Antes de 1950:** No existen las BD, solo Ficheros.
* **1960:** Inicio BD jerárquicas y de red.
* **1970:** Inicio BD relacionales (IBM).
* **1980:** SQL (IBM).
* **1990:** Inicio BD paralelas y orientadas a objetos.
* **2000:** NoSQL.

## 1.3. Sistema Gestor de Bases de Datos (SGBD)

**Definición:** Conjunto de herramientas que facilitan el trabajo con base de datos.

* Pueden tener interfaz gráfica o de texto.
* Utilizan lenguajes de programación como PL-SQL, Python, PhP, C++... para realizar scripts de base de datos y acceder a los mismos.
* Pueden pertenecer al ámbito de escritorio o ser online.

**Componentes**

* **Datos/esquemas:** Valores/estructura.
* **Herramientas de acceso a datos:** Lenguajes para crear, leer y modificar datos y metadatos. Diccionario de datos.
* **Utilidades:** Pequeñas aplicaciones para modificar datos, estructuras, copias de seguridad, etc.

**Tipos de SGBD**

* **Ofimáticos:** 
    * Access + VB

* **Empresariales:** 
    * Oracle + PL/SQL
    * Microsoft SQL Server
    * MySQL + SQL
    * PostgreSQL + PgPl/SQL...

* **Según el tipo de cliente**
    * Gráfico
    * Modo texto

**Funciones**

* Independizar los datos y hacerlos accesibles mediante conectores
* Manejar datos y esquemas de forma concurrente, eficiente y sencilla
* Garantizar la integridad de los datos según las restricciones del programador
* Seguridad (Usuarios y Backups - copias de seguridad)
* Transacciones (ejemplo: cajeros de banco)
* Monitorización y estadísticas de uso

**Ejemplos de SGBD**

| SGBD | Imagen | Características | Tipo |
| :--- | :--- | :--- | :--- |
| **MySQL** | ![MySQL](/images/tema1/mysql.jpg) |Permite elegir distintos mecanismos de almacenamiento por tabla. Ofrece transacciones ACID y claves foráneas. Alta compatibilidad y portabilidad. | **Relacional** |
| **PostgreSQL** | ![PostgreSQL](/images/tema1/postgresql.jpg) | Soporte fuerte para extensiones y tipos de datos avanzados. Cumplimiento robusto de estándares SQL y mejor soporte para características complejas del SQL. Control de concurrencia mediante MVCC que mejora el manejo de transacciones paralelas sin bloqueos excesivos. | **Relacional** |
| **SQL Server** | ![SQL Server](/images/tema1/sqlserver.jpg) | Integración profunda con el ecosistema Microsoft. Buenas herramientas de administración visual. Alto soporte para transacciones, replicación, clustering, integridad referencial, etc. | **Relacional** |
| **SQLite** | ![SQLite](/images/tema1/sqlite.jpg) | Biblioteca embebida (“in-process”), ligera y sin servidor externo. Ideal para aplicaciones locales de bajo o medio volumen, dispositivos móviles o escritorio. Soporta transacciones ACID aunque tiene limitaciones para concurrencia pesada. | **Relacional** |
| **ORACLE** | ![ORACLE](/images/tema1/oracle.jpg) | Muy buen soporte para funciones avanzadas, optimización de consultas, particionamiento, etc. Alta escalabilidad y fiabilidad en entornos empresariales. Extenso sistema de seguridad, roles, auditoría y soporte transaccional sofisticado. | **Relacional** |
| **MariaDB** | ![MariaDB](/images/tema1/mariadb.jpg) | Variante “fork” de MySQL con compatibilidad, pero mejoras. Soporte para distintos motores de almacenamiento como MyRocks, Aria, etc. Comunidad activa y mejoras continuas, manteniendo compatibilidad con MySQL en muchos casos. | **Relacional** |
| **Redis** | ![Redis](/images/tema1/redis.jpg) | Base de datos en memoria (muy alta velocidad). Soporte para múltiples estructuras de datos (listas, hashes, sets, sorted sets, bitmaps, etc.). Persistencia opcional, replicación, clustering, alta disponibilidad. | **NoSQL** |
| **MongoDB** | ![MongoDB](/images/tema1/mongodb.jpg) | Modelo de documentos (JSON / BSON), sin esquema rígido. Capacidad de escalado horizontal vía fragmentación (“sharding”). Indexado flexible, consultas adhoc, agregaciones potentes. | **NoSQL** |
| **Cassandra** | ![Cassandra](/images/tema1/cassandra.jpg) | Distribuido, sin punto único de fallo (arquitectura “masterless”). Modelo de columnas anchas, optimizado para escrituras intensivas. Alta escalabilidad horizontal y disponibilidad configurable de consistencia. | **NoSQL** |
| **Neo4j** | ![Neo4j](/images/tema1/neo4j.jpg) |Base de datos de grafos: representa datos como nodos, relaciones y propiedades. Lenguaje de consulta Cypher para explorar relaciones de forma eficiente. Cumple ACID, buena para consultas de rutas, redes sociales, recomendaciones. | **NoSQL** |

## 1.4. Modelado de datos

**Modelar:** Representar de forma ordenada un problema/idea/servicio mediante abstracciones que proporcionan almacenes/bases de datos.

**A tener en cuenta:**

* Todo parte de una entrevista personal con un experto en el problema.
* El modelado no es personal; existen estándares.
* Se deben conocer las características técnicas del SGBD.
* Conocimiento del lenguaje (lenguajes de programación BD - PL/SQL, lenguajes de programación estándar - Python)

**Modelados siguiendo el proceso de creación de BD relacionales**

1.  **Conceptual:** No incluye datos técnicos. Debe ser expresivo y negociado con el cliente, entendible para el experto no informático
    * **Modelo:** Diagrama E/R.
2.  **Lógico:** Más técnico, dependiente del tipo de base de datos. Adaptación del lenguaje natural al SGBD
    * **Modelo:** MR (Modelo Relacional) para BBDD Relacionales de Peter Chen.
3.  **Físico:** Totalmente dependiente del SGBD y del lenguaje. Genera la BD real.
    * **Modelo:** SQL + Programación de Base de Datos.

**Tipos de modelos (según orden de creación de la BD)**:

* **Conceptuales**:
    * Modelo E-R (entidades, relacionales y atributos).
    * Modelo orientado a objetos (UML, datos y operaciones).
* **Lógicos**:
    * Jerárquico (árbol).
    * En red (grafo no lineal, más de un padre).
    * Relacional (tablas, claves univocas).
* **Físicos**: SQL sobre un SGBD empresarial concreto.

## SQL

Lenguaje de base de datos para interactuar desde SGBD relacionales con los datos, las tablas, etc. Está estandarizado por la ISO.

**Sublenguajes**:

* **DDL (Definición de datos):** Diseñador de BD (CREATE, DROP).
* **DML (Manipulación de datos):** Usuarios o programas de BD (SELECT, INSERT, UPDATE, DELETE).
* **TCL (Control de transacciones):** Administradores y programadores (COMMIT, ROLLBACK).
* **DCL (Control de acceso a datos):** Administrador BD (GRANT, REVOKE).

## 1.4 Base de datos en la nube.

Se describen tres modelos de servicio de computación en la nube: IaaS, PaaS y SaaS.

1.  **IaaS (Infrastructure as a Service - Infraestructura como Servicio)**:
    * **Definición:** Modelo de computación en la nube que ofrece recursos de TI como servidores, almacenamiento y redes a través de Internet. Permite a las empresas pagar solo por lo que usan y reduce costes de hardware y gestión de centros de datos.
    * **Implica:** Máquinas o sistemas informáticos, servidores, almacenamiento, red para instalar o ejecutar el sistema gestor de bases de datos.
    * **Control/Gestión:** El usuario gestiona Aplicaciones, Datos, Runtime, Middleware y O/S (Sistema Operativo). El proveedor gestiona Virtualización, Servidores, Almacenamiento y Redes.
    * **Usuarios típicos:** Arquitectos de red, Administradores de IT.

2.  **PaaS (Platform as a Service - Plataforma como Servicio)**:
    * **Definición:** Modelo de computación en la nube que proporciona un entorno completo para crear, desplegar y gestionar aplicaciones sin que el desarrollador tenga que encargarse de la infraestructura subyacente (servidores, S.O. o redes).
    * **Implica:** Servicios gestionados de bases de datos. Plataforma en la que se puede crear, implementar y escalar bases de datos. Los proveedores ofrecen herramientas, *middleware*, bases de datos y recursos necesarios para el desarrollo.
    * **Control/Gestión:** El usuario gestiona Aplicaciones y Datos. El proveedor gestiona Runtime, Middleware, O/S, Virtualización, Servidores, Almacenamiento y Redes.
    * **Usuarios típicos:** Desarrolladores de software.

3.  **SaaS (Software as a Service - Software como Servicio)**:
    * **Definición:** Modelo de distribución de software basado en la nube donde los usuarios acceden a aplicaciones a través de Internet, en lugar de instalarlas localmente. El proveedor se encarga del alojamiento, mantenimiento y las actualizaciones del software.
    * **Implica:** Bases de datos *online* que permiten directamente realizar el trabajo de usuario.
    * **Ejemplos:** Gmail, herramientas de gestión de clientes (CRM) y de recursos empresariales (ERP).
    * **Control/Gestión:** El proveedor gestiona la totalidad (Aplicaciones, Datos, Runtime, Middleware, O/S, Virtualización, Servidores, Almacenamiento y Redes).
    * **Usuarios típicos:** Usuarios finales.

## 1.5 Protección de datos

### La ley

Existen leyes a nivel estatal y europeo, siendo las últimas modificaciones del año 2018 en ambas.

* **A nivel europeo:** Reglamento General de Protección de Datos europeo (RGPD - UE).
    * **Características:** Consentimiento, Derecho de los individuos, Protección de datos, Responsabilidad, Transferencia de datos.
* **A nivel España:** Agencia Española de Protección de datos, Ley Orgánica de Protección de Datos Personales y Garantía de los Derechos Digitales (LOPDGDD).
    * **Características:** Registro y tratamiento de datos, Evaluaciones de impacto (qué se hace con los datos y cómo se trabaja con ellos), Existencia obligatoria del delegado de protección de datos en empresas, Notificaciones por violación (cómo notificar el robo de datos a los afectados), Cooperación y coordinación con la Agencia Española de Protección de datos.

### Derecho al olvido (Derecho de supresión)

El derecho de supresión, conectado con el denominado “derecho al olvido” por el RGPD, obliga al responsable del tratamiento que haya hecho públicos datos personales a indicar a otros responsables que supriman todo enlace, copia o réplica de tales datos.

Última modificación: 8 de marzo de 2024.

Se puede ejercitar ante la persona responsable solicitando la supresión de los datos personales cuando concurra alguna de las siguientes circunstancias:

* Los datos personales ya no son necesarios para los fines para los que fueron recogidos o tratados.
* Se retira el consentimiento en el que se basó el tratamiento y este no se basa en otra causa que lo legitime.
* Se ha ejercido el derecho de oposición en las siguientes circunstancias:
    * El tratamiento se fundamentaba en el interés legítimo o en el cumplimiento de una misión de interés público, y no han prevalecido otros motivos para legitimar el tratamiento.
    * Los datos personales son objeto de mercadotecnia directa, incluida la elaboración de perfiles relacionada con ella.
* Los datos personales han sido tratados ilícitamente.
* Los datos personales deben suprimirse para el cumplimiento de una obligación legal establecida en el Derecho de la Unión o de los Estados miembros.
* Los datos personales se han obtenido en relación con la oferta de servicios de la sociedad de la información mencionados en el artículo 8, apartado 1 (condiciones aplicables al tratamiento de datos de los menores).

**Limitaciones:** Este derecho no es ilimitado. Puede no proceder la supresión cuando el tratamiento sea necesario para:

* El ejercicio de la libertad de expresión e información.
* El cumplimiento de una obligación legal.
* El cumplimiento de una misión realizada en interés público o en el ejercicio de poderes públicos conferidos al responsable.
* Razones de interés público, en el ámbito de la salud pública.
* Fines de archivo de interés público, fines de investigación científica o histórica o fines estadísticos.
* La formulación, el ejercicio o la defensa de reclamaciones.