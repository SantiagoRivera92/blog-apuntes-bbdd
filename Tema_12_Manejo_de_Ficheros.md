# MANEJO DE FICHEROS

**Unidad 1 — Acceso a Datos**

---

## Objetivos

Al término de esta unidad el alumno debe ser capaz de:

- Utilizar clases para la gestión de ficheros y directorios.
- Valorar las ventajas y los inconvenientes de las distintas formas de acceso.
- Utilizar las operaciones básicas para acceder a ficheros de acceso secuencial y aleatorio.
- Utilizar clases para almacenar y recuperar información almacenada en un fichero XML.
- Utilizar clases para convertir a otro formato información contenida en un fichero XML.
- Gestionar excepciones.

---

## Contenidos

1. [Introducción](#11-introducción)
2. [Clases asociadas a las operaciones de gestión de ficheros](#12-clases-asociadas-a-las-operaciones-de-gestión-de-ficheros)
3. [Flujos o Streams. Tipos](#13-flujos-o-streams-tipos)
   - 3.1 [Flujos de bytes (Byte Streams)](#131-flujos-de-bytes-byte-streams)
   - 3.2 [Flujos de caracteres (Character Streams)](#132-flujos-de-caracteres-character-streams)
4. [Formas de acceso a un fichero](#14-formas-de-acceso-a-un-fichero)
5. [Operaciones sobre ficheros](#15-operaciones-sobre-ficheros)
   - 5.1 [Operaciones sobre ficheros secuenciales](#151-operaciones-sobre-ficheros-secuenciales)
   - 5.2 [Operaciones sobre ficheros aleatorios](#152-operaciones-sobre-ficheros-aleatorios)
6. [Clases para gestión de flujos de datos desde/hacia ficheros](#16-clases-para-gestión-de-flujos-de-datos-desdehacia-ficheros)
   - 6.1 [Ficheros de texto](#161-ficheros-de-texto)
   - 6.2 [Ficheros binarios](#162-ficheros-binarios)
   - 6.3 [Ficheros de acceso aleatorio](#163-ficheros-de-acceso-aleatorio)
7. [Trabajo con ficheros XML](#17-trabajo-con-ficheros-xml)
   - 7.1 [Acceso a ficheros XML con DOM](#171-acceso-a-ficheros-xml-con-dom)
   - 7.2 [Acceso a ficheros XML con SAX](#172-acceso-a-ficheros-xml-con-sax)
   - 7.3 [Serialización de objetos a XML](#173-serialización-de-objetos-a-xml)
   - 7.4 [Conversión de ficheros XML a otro formato](#174-conversión-de-ficheros-xml-a-otro-formato)
8. [Excepciones: Detección y Tratamiento](#18-excepciones-detección-y-tratamiento)
   - 8.1 [Capturar excepciones](#181-capturar-excepciones)
   - 8.2 [Especificar excepciones](#182-especificar-excepciones)

---

## 1.1 Introducción

Un **fichero o archivo** es un conjunto de bits almacenado en un dispositivo, como por ejemplo un disco duro. La ventaja de utilizar ficheros es que los datos que guardamos permanecen en el dispositivo aun cuando apaguemos el ordenador, es decir, no son volátiles. Los ficheros tienen un nombre y se ubican en directorios o carpetas; el nombre debe ser único en ese directorio, no puede haber dos ficheros con el mismo nombre en el mismo directorio. Por convención cuentan con diferentes extensiones que por lo general suelen ser de 3 letras (PDF, DOC, GIF, ...) y nos permiten saber el tipo de archivo.

Un fichero está formado por un conjunto de registros o líneas y cada registro por un conjunto de campos relacionados. Por ejemplo, un fichero de empleados puede contener datos de los empleados de una empresa; un fichero de texto puede contener líneas de texto, correspondientes a líneas impresas en una hoja de papel. La manera en que se agrupan los datos en el fichero depende completamente de la persona que lo diseñe.

En este tema aprenderemos a utilizar los ficheros con el lenguaje Java.

---

## 1.2 Clases asociadas a las operaciones de gestión de ficheros

Antes de ver las clases que leen y escriben datos en ficheros, vamos a manejar la clase **File**. Esta clase proporciona un conjunto de utilidades relacionadas con los ficheros que nos van a proporcionar información acerca de los mismos: su nombre, sus atributos, los directorios, etc. Puede representar el nombre de un fichero particular o los nombres de un conjunto de ficheros de un directorio; también se puede usar para crear un nuevo directorio o una trayectoria de directorios completa si esta no existe.

Para crear un objeto `File`, se puede utilizar cualquiera de los tres constructores siguientes:

- `File(String directorioyfichero)`: en Linux: `new File("/directorio/fichero.txt")`; en plataformas Microsoft Windows: `new File("C:\\directorio\\fichero.txt")`.
- `File(String directorio, String nombrefichero)`: `new File("directorio", "fichero.txt")`.
- `File(File directorio, String fichero)`: `new File(new File("directorio"), "fichero.txt")`.

En Linux se utiliza como prefijo de una ruta absoluta `"/"`. En Microsoft Windows, el prefijo de un nombre de ruta consiste en la letra de la unidad seguida de `":"` y, posiblemente, seguida por `"\\"` si la ruta es absoluta.

**Ejemplos de uso de la clase File:**

```java
File fichero1 = new File("C:\\EJERCICIOS\\UNI1\\ejemplo1.txt"); //Windows
File fichero1 = new File("/home/ejercicios/uni1/ejemplo1.txt"); //Linux

String directorio = "C:/EJERCICIOS/UNI1";
File fichero2 = new File(directorio, "ejemplo2.txt");

File direc = new File(directorio);
File fichero3 = new File(direc, "ejemplo3.txt");
```

**Ejemplo: listar ficheros del directorio actual**

```java
import java.io.*;
public class VerDir {
    public static void main(String[] args) {
        System.out.println("Ficheros en el directorio actual:");
        File f = new File(".");
        String[] archivos = f.list();
        for (int i = 0; i < archivos.length; i++) {
            System.out.println(archivos[i]);
        }
    }
}
```

Para mostrar la lista del directorio `d:\db`:

```java
File f = new File("d:\\db");
```

Para mostrar la lista del directorio introducido desde la línea de comandos:

```java
String dir = args[0];
System.out.println("Archivos en el directorio " + dir);
File f = new File(dir);
```

> **Actividad 1:** Realiza un programa Java que muestre los ficheros de un directorio. El nombre del directorio se pasará al programa desde la línea de comandos al ejecutarlo.

### Métodos importantes del objeto File

| Método | Descripción |
|--------|-------------|
| `getName()` | Devuelve el nombre del fichero o directorio. |
| `getPath()` | Devuelve el camino relativo. |
| `getAbsolutePath()` | Devuelve el camino absoluto del fichero/directorio. |
| `canRead()` | Devuelve `true` si el fichero se puede leer. |
| `canWrite()` | Devuelve `true` si el fichero se puede escribir. |
| `length()` | Devuelve el tamaño del fichero en bytes. |
| `createNewFile()` | Crea un nuevo fichero vacío, asociado a `File`, si y solo si no existe un fichero con dicho nombre. |
| `delete()` | Borra el fichero o directorio asociado al `File`. |
| `exists()` | Devuelve `true` si el fichero/directorio existe. |
| `getParent()` | Devuelve el nombre del directorio padre, o `null` si no existe. |
| `isDirectory()` | Devuelve `true` si el objeto `File` corresponde a un directorio. |
| `isFile()` | Devuelve `true` si el objeto `File` corresponde a un fichero normal. |
| `mkdir()` | Crea un directorio con el nombre indicado en la creación del objeto `File`. |
| `renameTo(File nuevonombre)` | Renombra el fichero. |

**Ejemplo: mostrar información de un fichero**

```java
import java.io.*;
public class VerInf {
    public static void main(String[] args) {
        System.out.println("INFORMACIÓN SOBRE EL FICHERO:");
        File f = new File("VerInf.java");
        if (f.exists()) {
            System.out.println("Nombre del fichero : " + f.getName());
            System.out.println("Ruta               : " + f.getPath());
            System.out.println("Ruta absoluta      : " + f.getAbsolutePath());
            System.out.println("Se puede escribir  : " + f.canRead());
            System.out.println("Se puede leer      : " + f.canWrite());
            System.out.println("Tamaño             : " + f.length());
            System.out.println("Es un directorio   : " + f.isDirectory());
            System.out.println("Es un fichero      : " + f.isFile());
        }
    }
}
```

**Ejemplo: crear directorio y ficheros**

```java
import java.io.*;
public class CrearDir {
    public static void main(String[] args) {
        File d  = new File("NUEVODIR");
        File f1 = new File(d, "FICHERO1.TXT");
        File f2 = new File(d, "FICHERO2.TXT");

        d.mkdir(); //CREAR DIRECTORIO

        try {
            if (f1.createNewFile())
                System.out.println("FICHERO1 creado correctamente...");
            else
                System.out.println("No se ha podido crear FICHERO1...");
            if (f2.createNewFile())
                System.out.println("FICHERO2 creado correctamente...");
            else
                System.out.println("No se ha podido crear FICHERO2...");
        } catch (IOException ioe) { ioe.printStackTrace(); }

        f1.renameTo(new File(d, "FICHERO1NUEVO")); //renombro FICHERO1

        try {
            File f3 = new File("NUEVODIR/FICHERO3.TXT");
            f3.createNewFile(); //crea FICHERO3 en NUEVODIR
        } catch (IOException ioe) { ioe.printStackTrace(); }
    }
}
```

Para borrar un fichero usamos el método `delete()`:

```java
if (f2.delete())
    System.out.println("Fichero borrado...");
else
    System.out.println("No se ha podido borrar el fichero...");
```

> El método `createNewFile()` puede lanzar la excepción `IOException`, por ello se utiliza el bloque `try-catch`.

---

## 1.3 Flujos o Streams. Tipos

El sistema de entrada/salida en Java presenta una gran cantidad de clases que se implementan en el paquete **java.io**. Usa la abstracción del **flujo (stream)** para tratar la comunicación de información entre una fuente y un destino; dicha información puede estar en un fichero en el disco duro, en la memoria, en algún lugar de la red, e incluso, en otro programa.

Se definen dos tipos de flujos:

- **Flujos de bytes (8 bits):** realizan operaciones de entradas y salidas de bytes y su uso está orientado a la lectura/escritura de datos binarios. Todas las clases de flujos de bytes descienden de las clases `InputStream` y `OutputStream`.
- **Flujos de caracteres (16 bits):** realizan operaciones de entradas y salidas de caracteres. El flujo de caracteres viene gobernado por las clases `Reader` y `Writer`. La razón de ser de estas clases es la internacionalización; la antigua jerarquía de flujos de E/S solo soporta flujos de 8 bits, no manejando caracteres Unicode de 16 bits.

### 1.3.1 Flujos de bytes (Byte Streams)

**Tipos de InputStream:**

| Clase | Función |
|-------|---------|
| `ByteArrayInputStream` | Permite usar un espacio de almacenamiento intermedio de memoria. |
| `StringBufferInputStream` | Convierte un String en un InputStream. |
| `FileInputStream` | Para leer información de un fichero. |
| `PipedInputStream` | Implementa el concepto de "tubería". |
| `FilterInputStream` | Proporciona funcionalidad útil a otras clases InputStream. |
| `SequenceInputStream` | Convierte dos o más objetos InputStream en un InputStream único. |

**Tipos de OutputStream:**

| Clase | Función |
|-------|---------|
| `ByteArrayOutputStream` | Crea un espacio de almacenamiento intermedio en memoria. Todos los datos que se envían al flujo se ubican en este espacio. |
| `FileOutputStream` | Para enviar información a un fichero. |
| `PipedOutputStream` | Cualquier información que se desee escribir aquí acaba automáticamente como entrada del PipedInputStream asociado. Implementa el concepto de "tubería". |
| `FilterOutputStream` | Proporciona funcionalidad útil a otras clases OutputStream. |

Dentro de los flujos de bytes están las clases `FileInputStream` y `FileOutputStream` que manipulan los flujos de bytes provenientes o dirigidos hacia ficheros en disco.

### 1.3.2 Flujos de caracteres (Character Streams)

Las clases `Reader` y `Writer` manejan flujos de caracteres Unicode. Para convertir entre streams de bytes y caracteres existen clases "puente": `InputStreamReader` (convierte un `InputStream` en un `Reader`) y `OutputStreamReader` (convierte un `OutputStream` en un `Writer`).

**Correspondencia entre clases de flujos:**

| Clases de flujos de bytes | Clase correspondiente de flujo de caracteres |
|---------------------------|----------------------------------------------|
| `InputStream` | `Reader`, convertidor `InputStreamReader` |
| `OutputStream` | `Writer`, convertidor `OutputStreamReader` |
| `FileInputStream` | `FileReader` |
| `FileOutputStream` | `FileWriter` |
| `StringBufferInputStream` | `StringReader` |
| (sin clase correspondiente) | `StringWriter` |
| `ByteArrayInputStream` | `CharArrayReader` |
| `ByteArrayOutputStream` | `CharArrayWriter` |
| `PipedInputStream` | `PipedReader` |
| `PipedOutputStream` | `PipedWriter` |

**Las clases de flujos de caracteres más importantes son:**

- Para acceso a ficheros, lectura y escritura de caracteres en ficheros: **`FileReader`** y **`FileWriter`**.
- Para acceso a caracteres, leen y escriben un flujo de caracteres en un array de caracteres: **`CharArrayReader`** y **`CharArrayWriter`**.
- Para buferización de datos: **`BufferedReader`** y **`BufferedWriter`**, se utilizan para evitar que cada lectura o escritura acceda directamente al fichero, ya que utilizan un buffer intermedio entre la memoria y el stream.

---

## 1.4 Formas de acceso a un fichero

Hay dos formas de acceso a la información almacenada en un fichero: **acceso secuencial** y **acceso directo o aleatorio**.

- **Acceso secuencial:** los datos o registros se leen y se escriben en orden, del mismo modo que se hace en una antigua cinta de vídeo. Si se quiere acceder a un dato o un registro que está hacia la mitad del fichero es necesario leer antes todos los anteriores. La escritura de datos se hará a partir del último dato escrito, no es posible hacer inserciones entre los datos que ya hay escritos.
- **Acceso directo o aleatorio:** permite acceder directamente a un dato o registro sin necesidad de leer los anteriores y se puede acceder a la información en cualquier orden. Los datos están almacenados en registros de tamaño conocido, nos podemos mover de un registro a otro de forma aleatoria para leerlos o modificarlos.

En Java el acceso secuencial más común en ficheros puede ser binario o a caracteres. Para el acceso binario se usan las clases `FileInputStream` y `FileOutputStream`; para el acceso a caracteres (texto) se usan las clases `FileReader` y `FileWriter`. En el acceso aleatorio se utiliza la clase `RandomAccessFile`.

---

## 1.5 Operaciones sobre ficheros

Las operaciones básicas que se realizan sobre cualquier fichero independientemente de la forma de acceso al mismo son:

- **Creación del fichero.** El fichero se crea en el disco con un nombre que después se debe utilizar para acceder a él. La creación es un proceso que se realiza una vez.
- **Apertura del fichero.** Para que un programa pueda operar con un fichero, la primera operación que tiene que realizar es la apertura del mismo. El programa utilizará algún método para identificar el fichero con el que quiere trabajar, por ejemplo asignar a una variable el descriptor del fichero.
- **Cierre del fichero.** El fichero se debe cerrar cuando el programa no lo vaya a utilizar. Normalmente suele ser la última instrucción del programa.
- **Lectura de los datos del fichero.** Este proceso consiste en transferir información del fichero a la memoria principal, normalmente a través de alguna variable o variables de nuestro programa, en las que se depositarán los datos extraídos del fichero.
- **Escritura de datos en el fichero.** En este caso el proceso consiste en transferir información de la memoria (por medio de las variables del programa) al fichero.

Las operaciones típicas que se realizan sobre un fichero una vez abierto son:

- **Altas:** consiste en añadir un nuevo registro al fichero.
- **Bajas:** consiste en eliminar del fichero un registro ya existente. La eliminación puede ser lógica (cambiando el valor de algún campo del registro) o física (eliminando físicamente el registro del fichero). El borrado físico consiste muchas veces en reescribir de nuevo el fichero en otro fichero sin los datos que se desean eliminar y luego renombrarlo al fichero original.
- **Modificaciones:** consiste en cambiar parte del contenido de un registro. Antes de realizar la modificación será necesario localizar el registro a modificar dentro del fichero; y una vez localizado se realizan los cambios y se reescribe el registro.
- **Consultas:** consiste en buscar en el fichero un registro determinado.

### 1.5.1 Operaciones sobre ficheros secuenciales

En los ficheros secuenciales los registros se insertan en orden cronológico, es decir, un registro se inserta a continuación del último insertado. Si hay que añadir nuevos registros estos se añaden a partir del final del fichero.

- **Consultas:** para consultar un determinado registro es necesario empezar la lectura desde el primer registro, y continuar leyendo secuencialmente hasta localizar el registro buscado.
- **Altas:** en un fichero secuencial las altas se realizan al final del último registro insertado, es decir, solo se permite añadir datos al final del fichero.
- **Bajas:** para dar de baja un registro de un fichero es necesario leer todos los registros uno a uno y escribirlos en un fichero auxiliar, salvo el que deseamos dar de baja. Una vez reescritos hemos de borrar el fichero inicial y renombrar el fichero auxiliar dándole el nombre del fichero original.
- **Modificaciones:** consiste en localizar el registro a modificar, efectuar la modificación y reescribir el fichero inicial en otro fichero auxiliar que incluya el registro modificado. El proceso es similar a las bajas.

Los ficheros secuenciales se usan típicamente en aplicaciones de proceso por lotes (como el respaldo de los datos o backup), y son óptimos en dichas aplicaciones si se procesan todos los registros. La ventaja de estos ficheros es la rápida capacidad de acceso al siguiente registro; también son sencillos de usar y aplicar.

La desventaja es que no se puede acceder directamente a un registro determinado, hay que leer antes todos los anteriores; es decir, no soporta acceso aleatorio. Otra desventaja es el proceso de actualización, la mayoría de los ficheros secuenciales no pueden ser actualizados, habrá que reescribirlos totalmente.

### 1.5.2 Operaciones sobre ficheros aleatorios

Las operaciones en ficheros aleatorios son las vistas anteriormente pero teniendo en cuenta que para acceder a un registro hay que localizar la posición o dirección donde se encuentra. Los ficheros de acceso aleatorio en disco manipulan direcciones relativas en lugar de direcciones absolutas (número de pista y número de sector en el disco).

Normalmente para posicionarnos en un registro es necesario aplicar una función de conversión que usualmente tiene que ver con el tamaño del registro y con la clave del mismo (la clave es el campo o campos que identifica de forma unívoca a un registro).

- **Consultas:** para consultar un determinado registro necesitamos saber su clave, aplicar la función de conversión a la clave para obtener la dirección y leer el registro ubicado en esa posición.
- **Altas:** para insertar un registro necesitamos saber su clave, aplicar la función de conversión a la clave para obtener la dirección y escribir el registro en la posición devuelta.
- **Bajas:** las bajas suelen realizarse de forma lógica; se suele utilizar un campo del registro a modo de switch que tenga el valor 1 cuando el registro exista y le damos el valor 0 para darle de baja. Físicamente el registro no desaparece del disco.
- **Modificaciones:** para modificar un registro hay que localizarlo, necesitamos saber su clave para aplicar la función de conversión y así obtener la dirección, modificar los datos que nos interesen y reescribir el registro en esa posición.

Una de las principales ventajas de los ficheros aleatorios es el rápido acceso a una posición determinada para leer o escribir un registro. El gran inconveniente es establecer la relación entre la posición que ocupa el registro y su contenido.

---

## 1.6 Clases para gestión de flujos de datos desde/hacia ficheros

En Java podemos utilizar dos tipos de ficheros: de texto o binarios; y el acceso a los mismos se puede realizar de forma secuencial o aleatoria. Los ficheros de texto están compuestos de caracteres legibles, mientras que los binarios pueden almacenar cualquier tipo de dato (`int`, `float`, `boolean`, ...).

### 1.6.1 Ficheros de texto

Los ficheros de texto, los que normalmente se generan con un editor, almacenan caracteres alfanuméricos en un formato estándar (ASCII, UNICODE, UTF8, etc.). Para trabajar con ellos usaremos las clases **`FileReader`** para leer caracteres y **`FileWriter`** para escribir los caracteres en el fichero. Cuando trabajamos con ficheros, cada vez que leemos o escribimos en uno, debemos hacerlo dentro de un manejador de excepciones `try-catch`.

**Métodos de `FileReader` para lectura** (devuelven el número de caracteres leídos o -1 si se ha llegado al final del fichero):

| Método | Descripción |
|--------|-------------|
| `int read()` | Lee un carácter y lo devuelve. |
| `int read(char[] buf)` | Lee hasta `buf.length` caracteres de datos de una matriz de caracteres `buf`. |
| `int read(char[] buf, int desplazamiento, int n)` | Lee hasta n caracteres de datos de la matriz `buf` comenzando por `buf[desplazamiento]` y devuelve el número leído de caracteres. |

**Ejemplo: leer caracteres de un fichero de texto**

```java
import java.io.*;
public class LeerFichTexto {
    public static void main(String[] args) throws IOException {
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\LeerFichTexto.java");
        FileReader fic = new FileReader(fichero); //crear el flujo de entrada
        int i;
        while ((i = fic.read()) != -1) //se va leyendo un carácter
            System.out.println((char) i);
        fic.close(); //cerrar fichero
    }
}
```

Para ir leyendo de 20 en 20 caracteres:

```java
char b[] = new char[20];
while ((i = fic.read(b)) != -1)
    System.out.println(b);
```

> **Actividad 2:** Crea un fichero de texto con algún editor de textos y después realiza un programa Java que visualice su contenido. Cambia el programa Java para que el nombre del fichero se acepte al ejecutar desde la línea de comandos.

**Métodos de `FileWriter` para escritura:**

| Método | Descripción |
|--------|-------------|
| `void write(int c)` | Escribe un carácter. |
| `void write(char[] buf)` | Escribe un array de caracteres. |
| `void write(char[] buf, int desplazamiento, int n)` | Escribe n caracteres de datos en la matriz `buf` comenzando por `buf[desplazamiento]`. |
| `void write(String str)` | Escribe una cadena de caracteres. |
| `append(char c)` | Añade un carácter a un fichero. |

**Ejemplo: escribir caracteres en un fichero de texto**

```java
import java.io.*;
public class EscribirFichTexto {
    public static void main(String[] args) throws IOException {
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\FichTexto.txt");
        FileWriter fic = new FileWriter(fichero); //crear el flujo de salida
        String cadena = "Esto es una prueba con FileWriter";
        char[] cad = cadena.toCharArray(); //convierte un String en array de caracteres
        for (int i = 0; i < cad.length; i++)
            fic.write(cad[i]); //se va escribiendo un carácter
        fic.append('*'); //añado al final un *
        fic.close();    //cerrar fichero
    }
}
```

Para añadir caracteres al final de un fichero existente, se coloca `true` en el segundo parámetro del constructor:

```java
FileWriter fic = new FileWriter(fichero, true);
```

**`FileReader` no contiene métodos que nos permitan leer líneas completas**, pero `BufferedReader` sí; dispone del método `readLine()` que lee una línea del fichero y la devuelve, o devuelve `null` si no hay nada que leer o llegamos al final del fichero. Para construir un `BufferedReader` necesitamos la clase `FileReader`:

```java
BufferedReader fichero = new BufferedReader(new FileReader(NombreFichero));
```

**Ejemplo: leer fichero línea por línea**

```java
import java.io.*;
public class LeerFichTextoBuf {
    public static void main(String[] args) {
        try {
            BufferedReader fichero = new BufferedReader(
                                         new FileReader("LeerFichTexto.java"));
            String linea;
            while ((linea = fichero.readLine()) != null) //lee una línea del fichero
                System.out.println(linea);
            fichero.close();
        }
        catch (FileNotFoundException fn) {
            System.out.println("No se encuentra el fichero");
        }
        catch (IOException io) {
            System.out.println("Error de E/S ");
        }
    }
}
```

La clase `BufferedWriter` también deriva de la clase `Writer`. Para construir un `BufferedWriter` necesitamos la clase `FileWriter`:

```java
BufferedWriter fichero = new BufferedWriter(new FileWriter(NombreFichero));
```

**Ejemplo: escribir 10 filas con `BufferedWriter`**

```java
import java.io.*;
public class EscribirFichTextoBuf {
    public static void main(String[] args) {
        try {
            BufferedWriter fichero = new BufferedWriter(
                                         new FileWriter("FichTexto.txt"));
            for (int i = 1; i < 11; i++) {
                fichero.write("Fila numero: " + i); //escribe una línea
                fichero.newLine(); //escribe un salto de línea
            }
            fichero.close();
        }
        catch (FileNotFoundException fn) {
            System.out.println("No se encuentra el fichero");
        }
        catch (IOException io) {
            System.out.println("Error de E/S ");
        }
    }
}
```

La clase **`PrintWriter`**, que también deriva de `Writer`, posee los métodos `print(String)` y `println(String)` (idénticos a los de `System.out`) para escribir en un fichero. Para construir un `PrintWriter` necesitamos la clase `FileWriter`:

```java
PrintWriter fichero = new PrintWriter(new FileWriter(NombreFichero));
```

```java
PrintWriter fichero = new PrintWriter(new FileWriter("FichTexto.txt"));
for (int i = 1; i < 11; i++)
    fichero.println("Fila numero: " + i);
fichero.close();
```

### 1.6.2 Ficheros binarios

Los ficheros binarios almacenan secuencias de dígitos binarios que no son legibles directamente por el usuario como ocurría con los ficheros de texto. Tienen la ventaja de que ocupan menos espacio en disco. En Java, las dos clases que nos permiten trabajar con ficheros son **`FileInputStream`** (para entrada) y **`FileOutputStream`** (para salida).

**Métodos de `FileInputStream` para lectura** (devuelven el número de bytes leídos o -1 si se ha llegado al final del fichero):

| Método | Descripción |
|--------|-------------|
| `int read()` | Lee un byte y lo devuelve. |
| `int read(byte[] b)` | Lee hasta `b.length` bytes de datos de una matriz de bytes. |
| `int read(byte[] b, int desplazamiento, int n)` | Lee hasta n bytes de la matriz `b` comenzando por `b[desplazamiento]`. |

**Métodos de `FileOutputStream` para escritura:**

| Método | Descripción |
|--------|-------------|
| `void write(int b)` | Escribe un byte. |
| `void write(byte[] b)` | Escribe `b.length` bytes. |
| `void write(byte[] b, int desplazamiento, int n)` | Escribe n bytes a partir de la matriz de bytes de entrada y comenzando por `b[desplazamiento]`. |

**Ejemplo: escribir y leer bytes en un fichero**

```java
import java.io.*;
public class EscribirFichBytes {
    public static void main(String[] args) throws IOException {
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\FichBytes.dat");
        FileOutputStream fileout = new FileOutputStream(fichero);
        FileInputStream  filein  = new FileInputStream(fichero);
        int i;

        for (i = 1; i < 100; i++)
            fileout.write(i); //escribe datos en el flujo de salida
        fileout.close(); //cerrar stream de salida

        //visualizar los datos del fichero
        while ((i = filein.read()) != -1) //lee datos del flujo de entrada
            System.out.println(i);
        filein.close(); //cerrar stream de entrada
    }
}
```

Para añadir bytes al final del fichero se coloca `true` en el segundo parámetro del constructor:

```java
FileOutputStream fileout = new FileOutputStream(fichero, true);
```

Para leer y escribir datos de tipos primitivos (`int`, `float`, `long`, etc.) usaremos las clases **`DataInputStream`** y **`DataOutputStream`**. Estas clases proporcionan métodos para la lectura y escritura de tipos primitivos de un modo independiente de la máquina.

**Métodos de DataInputStream y DataOutputStream:**

| Métodos para lectura | Métodos para escritura |
|---------------------|----------------------|
| `boolean readBoolean()` | `void writeBoolean(boolean v)` |
| `byte readByte()` | `void writeByte(int v)` |
| `int readUnsignedByte()` | `void writeBytes(String s)` |
| `int readUnsignedShort()` | `void writeShort(int v)` |
| `short readShort()` | `void writeChars(String s)` |
| `char readChar()` | `void writeChar(int v)` |
| `int readInt()` | `void writeInt(int v)` |
| `long readLong()` | `void writeLong(long v)` |
| `float readFloat()` | `void writeFloat(float v)` |
| `double readDouble()` | `void writeDouble(double v)` |
| `String readUTF()` | `void writeUTF(String str)` |

> *UTF (Unicode Transmission Format)* se utiliza para transmitir los caracteres de un String de 16 bits codificada en 8 bits.

**Ejemplo: escribir y leer datos con DataOutputStream/DataInputStream**

```java
import java.io.*;
public class EscribirFichData {
    public static void main(String[] args) throws IOException {
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\FichData.dat");
        FileOutputStream fileout = new FileOutputStream(fichero);
        DataOutputStream dataOS  = new DataOutputStream(fileout);

        String nombres[] = {"Ana","Luis Miguel","Alicia","Pedro","Manuel","Andrés",
                            "Julio","Antonio","María Jesús"};
        int edades[] = {14, 15, 13, 15, 16, 12, 16, 14, 13};

        for (int i = 0; i < edades.length; i++) {
            dataOS.writeUTF(nombres[i]); //inserta nombre
            dataOS.writeInt(edades[i]);  //inserta edad
        }
        dataOS.close(); //cerrar stream
    }
}
```

```java
import java.io.*;
public class LeerFichData {
    public static void main(String[] args) throws IOException {
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\FichData.dat");
        FileInputStream filein = new FileInputStream(fichero);
        DataInputStream dataIS = new DataInputStream(filein);
        String n;
        int e;
        try {
            while (true) {
                n = dataIS.readUTF(); //recupera el nombre
                e = dataIS.readInt(); //recupera la edad
                System.out.println("Nombre: " + n + ", edad: " + e);
            }
        } catch (EOFException eo) { }
        dataIS.close(); //cerrar stream
    }
}
```

#### Objetos serializables

Java permite guardar objetos en ficheros binarios; para poder hacerlo, el objeto tiene que implementar la interfaz **`Serializable`** que dispone de una serie de métodos con los que podremos guardar y leer objetos en ficheros binarios. Los más importantes a utilizar son:

- `void readObject(java.io.ObjectInputStream stream) throws IOException, ClassNotFoundException`: para leer un objeto.
- `void writeObject(ObjectOutputStream stream) throws IOException`: para escribir un objeto.

La serialización de objetos de Java permite tomar cualquier objeto que implemente la interfaz `Serializable` y convertirlo en una secuencia de bits, que puede ser posteriormente restaurada para regenerar el objeto original.

Para leer y escribir objetos serializables a un stream se utilizan las clases Java **`ObjectInputStream`** y **`ObjectOutputStream`** respectivamente.

**Ejemplo: clase Persona serializable**

```java
import java.io.Serializable;
public class Persona implements Serializable {
    private String nombre;
    private int edad;

    public Persona(String nombre, int edad) {
        this.nombre = nombre;
        this.edad   = edad;
    }
    public Persona() { this.nombre = null; }

    public void setNombre(String nom) { nombre = nom; }
    public void setEdad(int ed)       { edad = ed; }

    public String getNombre() { return nombre; }
    public int    getEdad()   { return edad; }
}
```

**Ejemplo: escribir objetos Persona en un fichero**

```java
import java.io.*;
public class EscribirFichObject {
    public static void main(String[] args) throws IOException {
        Persona persona;
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\FichPersona.dat");
        FileOutputStream fileout =
                    new FileOutputStream(fichero);
        ObjectOutputStream dataOS = new ObjectOutputStream(fileout);

        String nombres[] = {"Ana","Luis Miguel","Alicia","Pedro","Manuel","Andrés",
                            "Julio","Antonio","María Jesús"};
        int edades[] = {14, 15, 13, 15, 16, 12, 16, 14, 13};

        for (int i = 0; i < edades.length; i++) {
            persona = new Persona(nombres[i], edades[i]);
            dataOS.writeObject(persona); //escribo la persona en el fichero
        }
        dataOS.close(); //cerrar stream de salida
    }
}
```

**Ejemplo: leer objetos Persona de un fichero**

```java
import java.io.*;
public class LeerFichObject {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        Persona persona;
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\FichPersona.dat");
        FileInputStream filein = new FileInputStream(fichero);
        ObjectInputStream dataIS = new ObjectInputStream(filein);

        try {
            while (true) {
                persona = (Persona) dataIS.readObject(); //leer una Persona
                System.out.println("Nombre: " + persona.getNombre() +
                                   ", edad: " + persona.getEdad());
            }
        } catch (EOFException eo) { }

        dataIS.close(); //cerrar stream de entrada
    }
}
```

> **Nota:** `ObjectOutputStream` puede dar problemas si escribimos datos en el fichero, lo cerramos, volvemos a abrirlo para añadir datos (`FileOutputStream(fichero, true)`), pues entonces se escribe una nueva cabecera al final de los objetos introducidos anteriormente. Esto origina el problema que al leer el fichero se produzca la excepción `StreamCorruptedException`.

### 1.6.3 Ficheros de acceso aleatorio

Java dispone de la clase **`RandomAccessFile`** que dispone de métodos para acceder al contenido de un fichero binario de forma aleatoria (no secuencial) y para posicionarnos en una posición concreta del mismo. Esta clase no es parte de la jerarquía `InputStream/OutputStream`, ya que su comportamiento es totalmente distinto puesto que se puede avanzar y retroceder dentro de un fichero.

Para crear el fichero de acceso aleatorio:

```java
// Por nombre de fichero
fichero = new RandomAccessFile(String nombre, String modoAcceso);
// Con un objeto File
fichero = new RandomAccessFile(File fich, String modoAcceso);
```

El argumento `modoAcceso` puede ser `"r"` para solo lectura o `"rw"` para lectura y escritura.

La clase `RandomAccessFile` maneja un **puntero** que indica la posición actual en el fichero. Cuando en el fichero se crea el puntero se coloca en 0, apuntando al principio del mismo. Las sucesivas llamadas a los métodos `read()` y `write()` ajustan el puntero según la cantidad de bytes leídos o escritos.

**Métodos más importantes:**

| Método | Descripción |
|--------|-------------|
| `long getFilePointer()` | Devuelve la posición actual del puntero del fichero. |
| `void seek(long posicion)` | Coloca el puntero del fichero en una posición determinada desde el comienzo del mismo. |
| `long length()` | Devuelve el tamaño del fichero en bytes. La posición `length()` marca el final del fichero. |
| `int skipBytes(int desplazamiento)` | Desplaza el puntero desde la posición actual el número de bytes indicados. |

Una vez abierto el fichero pueden usarse los métodos `read()` y `write()` de las clases `DataInputStream` y `DataOutputStream` (vistos anteriormente).

**Ejemplo: insertar datos de empleados en un fichero aleatorio**

Los datos a insertar son el apellido, departamento y salario. Cada empleado ocupa 36 bytes:
- Identificador (int): 4 bytes
- Apellido (10 caracteres Unicode): 20 bytes
- Departamento (int): 4 bytes
- Salario (double): 8 bytes

```java
import java.io.*;
public class EscribirFichAleatorio {
    public static void main(String[] args) throws IOException {
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\AleatorioEmple.dat");
        RandomAccessFile file = new RandomAccessFile(fichero, "rw");

        String apellido[] = {"FERNANDEZ","GIL","LOPEZ","RAMOS",
                              "SEVILLA","CASILLA","REY"};
        int    dep[]      = {10, 20, 10, 10, 30, 30, 20};
        Double salario[]  = {1000.45, 2400.60, 3000.0, 1500.56,
                              2200.0, 1435.87, 2000.0};

        StringBuffer buffer = null;
        int n = apellido.length;

        for (int i = 0; i < n; i++) {
            file.writeInt(i + 1);       //identificador
            buffer = new StringBuffer(apellido[i]);
            buffer.setLength(10);       //10 caracteres para el apellido
            file.writeChars(buffer.toString()); //insertar apellido
            file.writeInt(dep[i]);      //insertar departamento
            file.writeDouble(salario[i]); //insertar salario
        }
        file.close(); //cerrar fichero
    }
}
```

**Ejemplo: leer todos los registros del fichero aleatorio**

El posicionamiento empieza en 0 y para recuperar los siguientes registros hay que sumar 36 (tamaño del registro):

```java
import java.io.*;
public class LeerFichAleatorio {
    public static void main(String[] args) throws IOException {
        File fichero = new File("C:\\EJERCICIOS\\UNI1\\AleatorioEmple.dat");
        RandomAccessFile file = new RandomAccessFile(fichero, "r");

        int    id, dep, posicion;
        Double salario;
        char   apellido[] = new char[10], aux;

        posicion = 0; //para situarnos al principio

        for (;;) {
            file.seek(posicion); //nos posicionamos en posicion
            id = file.readInt(); //obtengo id de empleado
            for (int i = 0; i < apellido.length; i++) {
                aux = file.readChar();
                apellido[i] = aux;
            }
            String apellidoS = new String(apellido);
            dep     = file.readInt();    //obtengo dep
            salario = file.readDouble(); //obtengo salario

            System.out.println("ID: " + id + ", Apellido: " + apellidoS +
                               ", Departamento: " + dep + ", Salario: " + salario);

            posicion = posicion + 36; //me posiciono para el siguiente empleado
            if (file.getFilePointer() == file.length()) break;
        }
        file.close(); //cerrar fichero
    }
}
```

Para consultar un empleado determinado conociendo su identificador (por ejemplo el empleado 5):

```java
int identificador = 5;
posicion = (identificador - 1) * 36;
if (posicion >= file.length())
    System.out.println("ID: " + registro + ", NO EXISTE EMPLEADO...");
else {
    file.seek(posicion);
    id = file.readInt();
    //obtener resto de los datos...
}
```

> **Actividad 3:** Crea un programa Java que reciba un identificador de empleado desde la línea de comandos y visualice sus datos. Si el empleado no existe debe visualizar mensaje indicándolo.

Para insertar un nuevo registro con identificador 20:

```java
long posicion = (id - 1) * 36;
file.seek(posicion);
file.writeInt(id);
buffer = new StringBuffer(apellido);
buffer.setLength(10);
file.writeChars(buffer.toString());
file.writeInt(dep);
file.writeDouble(salario);
```

Para modificar el departamento y salario del empleado con identificador 4:

```java
int registro = 4;
long posicion = (registro - 1) * 36; //(4+20+4+8)
posicion = posicion + 4 + 20; //sumo el tamaño de ID+apellido
file.seek(posicion);
file.writeInt(40);           //modif departamento
file.writeDouble(4000.87);   //modif salario
```

> **Actividad 4:** Crea un programa Java que reciba desde la línea de comandos un identificador de empleado y un importe. Se debe sumar al salario del empleado el importe tecleado. El programa debe visualizar el apellido, el salario antiguo y el nuevo. Si el identificador no existe se visualizará un mensaje indicándolo.

---

## 1.7 Trabajo con ficheros XML

**XML** (*eXtensible Markup Language - Lenguaje de Etiquetado Extensible*) es un metalenguaje, es decir, un lenguaje para la definición de lenguajes de marcado. Nos permite jerarquizar y estructurar la información así como describir los contenidos dentro del propio documento. Los ficheros XML son ficheros de texto escritos en lenguaje XML donde la información está organizada de forma secuencial y en orden jerárquico. Existen marcas especiales delimitadas con los símbolos `<` y `>`. Cada marca tiene un nombre y puede tener 0 o más atributos.

**Ejemplo de fichero XML sencillo:**

```xml
<?xml version="1.0"?>
<Empleados>
    <empleado>
        <id>1</id>
        <apellido>FERNANDEZ</apellido>
        <dep>10</dep>
        <salario>1000.45</salario>
    </empleado>
    <empleado>
        <id>2</id>
        <apellido>GIL</apellido>
        <dep>20</dep>
        <salario>2400.6</salario>
    </empleado>
    ...
</Empleados>
```

Los ficheros XML se pueden utilizar para proporcionar datos a una base de datos o para almacenar copias de partes del contenido de la base de datos. También se utilizan para escribir ficheros de configuración de programas o en el protocolo SOAP (*Simple Object Access Protocol*), para ejecutar comandos en servidores remotos.

Para leer los ficheros XML y acceder a su contenido y estructura, se utiliza un **procesador de XML** o *parser*. Los dos procesadores más empleados son:

- **DOM** (*Modelo de Objetos de Documento*): un procesador XML que utilice este planteamiento almacena toda la estructura del documento en memoria en forma de árbol con nodos padre, nodos hijo y nodos finales (que son aquellos que no tienen descendientes). Una vez creado el árbol, se van recorriendo los diferentes nodos y se analiza a qué tipo particular pertenecen. Este tipo de procesamiento necesita más recursos de memoria y tiempo sobre todo si los ficheros XML a procesar son bastante grandes y complejos.
- **SAX** (*API Simple para XML*): un procesador XML que utilice este planteamiento lee un fichero XML de forma secuencial y produce una secuencia de eventos (comienzo/fin del documento, comienzo/fin de una etiqueta, etcétera) en función de los resultados de la lectura. Cada evento invoca a un método definido por el programador. Este tipo de procesamiento prácticamente no consume memoria, pero por otra parte, impide tener una visión global del documento por el que navegar.

### 1.7.1 Acceso a ficheros XML con DOM

Para poder trabajar con DOM en Java necesitamos las clases e interfaces que componen el paquete `org.w3c.dom` (contenido en el JSDK) y el paquete `javax.xml.parsers` del API estándar de Java. Contiene dos clases fundamentales: `DocumentBuilderFactory` y `DocumentBuilder`.

**Interfaces DOM más importantes:**

| Interfaz | Descripción |
|----------|-------------|
| `Document` | Es un objeto que equivale a un ejemplar de un documento XML. Permite crear nuevos nodos en el documento. |
| `Element` | Cada elemento del documento XML tiene un equivalente en un objeto de este tipo. |
| `Node` | Representa a cualquier nodo del documento. |
| `NodeList` | Contiene una lista con los nodos hijos de un nodo. |
| `Attr` | Permite acceder a los atributos de un nodo. |
| `Text` | Son los datos carácter de un elemento. |
| `CharacterData` | Representa a los datos carácter presentes en el documento. |
| `DocumentType` | Proporciona información contenida en la etiqueta `<!DOCTYPE>`. |

**Importaciones necesarias:**

```java
import org.w3c.dom.*;
import javax.xml.parsers.*;
import javax.xml.transform.*;
import javax.xml.transform.dom.*;
import javax.xml.transform.stream.*;
import java.io.*;
```

**Crear un documento XML con DOM (resumen de pasos):**

```java
// 1. Instancia de DocumentBuilderFactory
DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
try {
    DocumentBuilder builder = factory.newDocumentBuilder();

    // 2. Crear documento vacío con nodo raíz
    DOMImplementation implementation = builder.getDOMImplementation();
    Document document = implementation.createDocument(null, "Empleados", null);
    document.setXmlVersion("1.0");

    // 3. Por cada empleado: crear nodo <empleado> y sus hijos
    Element raiz = document.createElement("empleado");
    document.getDocumentElement().appendChild(raiz);
    // Añadir hijos con la función CrearElemento(...)

    // 4. Generar el fichero XML
    Source source   = new DOMSource(document);
    Result result   = new StreamResult(new java.io.File("Empleados.xml"));
    Transformer transformer = TransformerFactory.newInstance().newTransformer();
    transformer.transform(source, result);
}
```

**Función auxiliar para crear nodos hijo:**

```java
static void CrearElemento(String datoEmple, String valor,
                           Element raiz, Document document) {
    Element elem = document.createElement(datoEmple); //creamos hijo
    Text    text = document.createTextNode(valor);     //damos valor
    raiz.appendChild(elem);  //pegamos el elemento hijo a la raíz
    elem.appendChild(text);  //pegamos el valor
}
```

**Leer un documento XML con DOM:**

```java
Document document = builder.parse(new File("Empleados.xml"));
NodeList empleados = document.getElementsByTagName("empleado");

for (int i = 0; i < empleados.getLength(); i++) {
    Node emple = empleados.item(i);
    if (emple.getNodeType() == Node.ELEMENT_NODE) {
        Element elemento = (Element) emple;
        System.out.println("ID: "          + getNodo("id",       elemento));
        System.out.println("Apellido: "    + getNodo("apellido", elemento));
        System.out.println("Departamento: "+ getNodo("dep",      elemento));
        System.out.println("Salario: "     + getNodo("salario",  elemento));
    }
}

// Función auxiliar para obtener el valor de un nodo
private static String getNodo(String etiqueta, Element elem) {
    NodeList nodo = elem.getElementsByTagName(etiqueta).item(0).getChildNodes();
    Node valornodo = (Node) nodo.item(0);
    return valornodo.getNodeValue();
}
```

> **Actividad 5:** A partir del fichero de objetos Persona utilizado anteriormente, crea un documento XML usando DOM.

### 1.7.2 Acceso a ficheros XML con SAX

**SAX** (*API Simple para XML*) es un conjunto de clases e interfaces que ofrecen una herramienta muy útil para el procesamiento de documentos XML. Permite analizar los documentos de forma secuencial (es decir, no carga todo el fichero en memoria como hace DOM); esto implica poco consumo de memoria aunque los documentos sean de gran tamaño. Por otra parte, impide tener una visión global del documento que se va a analizar.

**Correspondencia entre eventos del documento y métodos SAX:**

La lectura de un documento XML produce eventos que ocasionan la llamada a métodos:

| Evento | Método |
|--------|--------|
| Inicio del documento XML | `startDocument()` |
| Inicio de elemento | `startElement()` |
| Datos de texto entre etiquetas | `characters()` |
| Fin de elemento | `endElement()` |
| Fin del documento XML | `endDocument()` |

**Pasos básicos para usar SAX:**

1. Crear un objeto `XMLReader`:
```java
XMLReader procesadorXML = XMLReaderFactory.createXMLReader();
```

2. Indicar el objeto que tratará los eventos (implementa `DefaultHandler`):
```java
GestionContenido gestor = new GestionContenido();
procesadorXML.setContentHandler(gestor);
```

3. Definir el fichero XML a leer:
```java
InputSource fileXML = new InputSource("alumnos.xml");
```

4. Procesar el documento:
```java
procesadorXML.parse(fileXML);
```

**Ejemplo completo con SAX:**

```java
import java.io.*;
import org.xml.sax.Attributes;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.XMLReader;
import org.xml.sax.helpers.DefaultHandler;
import org.xml.sax.helpers.XMLReaderFactory;

public class PruebaSax1 {
    public static void main(String[] args)
                   throws FileNotFoundException, IOException, SAXException {
        XMLReader procesadorXML = XMLReaderFactory.createXMLReader();
        GestionContenido gestor = new GestionContenido();
        procesadorXML.setContentHandler(gestor);
        InputSource fileXML = new InputSource("alumnos.xml");
        procesadorXML.parse(fileXML);
    }
}

class GestionContenido extends DefaultHandler {
    public GestionContenido() { super(); }

    public void startDocument() {
        System.out.println("Comienzo del Documento XML");
    }
    public void endDocument() {
        System.out.println("Final del Documento XML");
    }
    public void startElement(String uri, String nombre,
                              String nombreC, Attributes atts) {
        System.out.println("\tPrincipio Elemento: " + nombre);
    }
    public void endElement(String uri, String nombre, String nombreC) {
        System.out.println("\tFin Elemento: " + nombre);
    }
    public void characters(char[] ch, int inicio, int longitud)
                                                    throws SAXException {
        String car = new String(ch, inicio, longitud);
        car = car.replaceAll("[\t\n]", ""); //quitar saltos de línea
        System.out.println("\tCaracteres: " + car);
    }
}
```

> **Actividad 6:** Utiliza SAX para visualizar el contenido del fichero Empleados.xml creado anteriormente.

### 1.7.3 Serialización de objetos a XML

Para serializar objetos Java a XML y viceversa utilizaremos la librería **XStream**. Para poder utilizarla hemos de descargar los JAR desde el sitio web: http://xstream.codehaus.org/download.html.

Partimos del fichero `FichPersona.dat` y crearemos una lista de objetos `Persona` para convertirlos en un fichero de datos XML. Necesitaremos la clase `Persona` (ya definida) y la clase `ListaPersonas`:

```java
import java.util.ArrayList;
import java.util.List;
public class ListaPersonas {
    private List<Persona> lista = new ArrayList<Persona>();
    public ListaPersonas() { }
    public void add(Persona per) { lista.add(per); }
    public List<Persona> getListaPersonas() { return lista; }
}
```

**Escribir objetos a XML con XStream:**

```java
import java.io.*;
import com.thoughtworks.xstream.XStream;

public class EscribirPersonas {
    public static void main(String[] args) throws IOException, ClassNotFoundException {
        // ... (leer objetos del fichero binario y añadirlos a listaper)

        try {
            XStream xstream = new XStream();
            xstream.alias("ListaPersonasMunicipio", ListaPersonas.class);
            xstream.alias("DatosPersona", Persona.class);
            xstream.addImplicitCollection(ListaPersonas.class, "lista");
            xstream.toXML(listaper, new FileOutputStream("Personas.xml"));
            System.out.println("Creado fichero XML....");
        } catch (Exception e) { e.printStackTrace(); }
    }
}
```

**Leer objetos desde XML con XStream:**

```java
XStream xstream = new XStream();
xstream.alias("ListaPersonasMunicipio", ListaPersonas.class);
xstream.alias("DatosPersona", Persona.class);
xstream.addImplicitCollection(ListaPersonas.class, "lista");

ListaPersonas listadoTodas = (ListaPersonas)
        xstream.fromXML(new FileInputStream("Personas.xml"));
```

> Para leer y escribir se deben utilizar los mismos métodos `alias()` y `addImplicitCollection()`.

### 1.7.4 Conversión de ficheros XML a otro formato

**XSL** (*Extensible Stylesheet Language*) es toda una familia de recomendaciones del *World Wide Web Consortium* para expresar hojas de estilo en lenguaje XML. Una hoja de estilo XSL describe el proceso de presentación a través de un pequeño conjunto de elementos XML. En el siguiente ejemplo, vamos a ver cómo a partir de un fichero XML que contiene datos y otro XSL que contiene la presentación de esos datos se puede generar un fichero HTML usando el lenguaje Java.

Para realizar la transformación se necesita obtener un objeto `Transformer` a partir de `TransformerFactory`:

```java
Transformer transformer =
        TransformerFactory.newInstance().newTransformer(estilos);
transformer.transform(datos, result);
```

**Ejemplo: convertir XML a HTML**

```java
import org.w3c.dom.*;
import javax.xml.parsers.*;
import javax.xml.transform.*;
import javax.xml.transform.dom.*;
import javax.xml.transform.stream.*;
import java.io.*;

public class convertidor {
    public static void main(String[] argv) throws IOException {
        String hojaEstilo   = "alumnosPlantilla.xsl";
        String datosAlumnos = "alumnos.xml";
        File pagHTML        = new File("mipagina.html");
        FileOutputStream os = new FileOutputStream(pagHTML);

        Source estilos = new StreamSource(hojaEstilo); //fuente XSL
        Source datos   = new StreamSource(datosAlumnos); //fuente XML
        Result result  = new StreamResult(os); //resultado de la transformación

        try {
            Transformer transformer =
                        TransformerFactory.newInstance().newTransformer(estilos);
            transformer.transform(datos, result); //obtiene el HTML
        }
        catch (Exception e) { System.err.println("Error: " + e); }

        os.close(); //cerrar fichero
    }
}
```

---

## 1.8 Excepciones: Detección y Tratamiento

Una **excepción** es un evento que ocurre durante la ejecución del programa que interrumpe el flujo normal de las sentencias. Cuando no es capturada por el programa, se captura por el gestor de excepciones por defecto que retorna un mensaje y detiene el programa. Las excepciones en Java son objetos de clases derivadas de la clase base `Exception` que a su vez es una clase derivada de la clase base `Throwable`.

### 1.8.1 Capturar excepciones

Para capturar una excepción se utiliza el bloque **`try-catch`**. Se encierra en un bloque `try` el código que puede generar una excepción; este bloque va seguido por uno o más bloques `catch`. Cada bloque `catch` especifica el tipo de excepción que puede atrapar y contiene un manejador de excepciones. Después del último bloque `catch` puede aparecer un bloque **`finally`** (opcional) que siempre se ejecuta haya ocurrido o no la excepción; se utiliza el bloque `finally` para cerrar ficheros o liberar otros recursos del sistema después de que ocurra una excepción.

**Estructura general:**

```java
try {
    //Código que puede generar excepciones
} catch (excepcion1 e1) {
    //manejo de la excepcion1
} catch (excepcion2 e2) {
    //manejo de la excepcion2
}
//etc...
finally {
    // Se ejecuta después de try o catch
}
```

Para capturar cualquier excepción utilizamos la clase base `Exception`. Si se usa habrá que ponerla al final de la lista de manejadores para evitar que los manejadores que vienen después queden ignorados.

**Métodos de la clase `Throwable` para obtener información sobre la excepción:**

| Método | Descripción |
|--------|-------------|
| `String getMessage()` | Devuelve la cadena de error del objeto. |
| `String getLocalizedMessage()` | Crea una descripción local de este objeto. |
| `String toString()` | Devuelve una breve descripción del objeto. |
| `void printStackTrace()` | Imprime el objeto y la traza de pila de llamadas lanzada. |

**Ejemplo: captura de múltiples excepciones**

```java
public class ejemploExcepciones {
    public static void main(String[] args) {
        String cad1 = "20", cad2 = "0", mensaje;
        int    nume, denom, cociente;
        int[]  arraynum = new int[4];
        try {
            arraynum[10] = 20;                        //excepción: fuera de rango
            nume   = Integer.parseInt(cad1);
            denom  = Integer.parseInt(cad2);
            cociente = nume / denom;
            mensaje  = String.valueOf(cociente);
        } catch (NumberFormatException ex) {
            mensaje = "Caracteres no numéricos";
        } catch (ArithmeticException ex) {
            mensaje = "Division por cero";
        } catch (ArrayIndexOutOfBoundsException ex) {
            mensaje = "Fuera de rango en el array";
        } finally {
            System.out.println("SE EJECUTA SIEMPRE");
        }
        System.out.println(mensaje); //si se ejecuta
    }
}
```

### 1.8.2 Especificar excepciones

Para especificar excepciones utilizamos la palabra clave **`throws`**, seguida de la lista de todos los tipos de excepciones potenciales; si un método decide no gestionar una excepción (mediante `try-catch`), debe especificar que puede lanzar esa excepción.

```java
public static void main(String[] args) throws IOException, ClassNotFoundException {
    // ...
}
```

Aquellos métodos que pueden lanzar excepciones, deben saber cuáles son esas excepciones en su declaración. Una forma típica de saberlo es compilando el programa. Por ejemplo, si al programa `EscribirPersonas.java` le quitamos la cláusula `throws` al método `main()`, al compilarlo aparecerán errores indicando las excepciones no declaradas.

Si el método no gestiona las excepciones con `try-catch` y tampoco las declara con `throws`, el compilador indicará los errores. La opción es capturarlas con `try-catch` o declararlas con `throws`. Una sentencia `try` puede estar dentro de un bloque de otra sentencia `try`. Si la sentencia `try` interna no tiene un manejador `catch`, se busca el manejador en las sentencias `try` más externas.

---

*API de Java: http://docs.oracle.com/javase/6/docs/api/index.html*

*API DOM: http://docs.oracle.com/javase/1.4.2/docs/api/org/w3c/dom/package-tree.html*

*API SAX: http://www.saxproject.org/apidoc/org/xml/sax/package-tree.html*

*API XStream: http://xstream.codehaus.org/javadoc/com/thoughtworks/xstream/XStream.html*
