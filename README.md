# online-store

a [Sails](http://sailsjs.org) application

### Estructura del Proyecto

 - Se crearon dos modelos: Brands, ClothingTypes.
 - Se trabajo con mongodb creando la colleción "online-store".
 - Para el manejo del DOM se utilizó Jquery.
 - Para el maquetado se utilizó el framework Foundation 5.
 

### Funcionamiento de la aplicación

La vista store/index contiene el formulario con el campo de busqueda.

 En el archivo assets/js/dependencies/app.js se especifica la lógica del cliente. En este archivo hay una llamada al servidor via ajax, la cual envía el patrón de busqueda del usuario,y una vez que el servidor retorne la respuesta, se formatean las palabras que coincidan con la marca y con el tipo de ropa según los requerimientos.
   
 
 El controlador StoreController contiene el action 'search' donde se realiza el proceso de busqueda.En este action , se recibe el patron de busqueda y se construye una estructura con el siguiente formato.
  
      data = {
            [word: 'hugo', att: ''],
            [word: 'boss', att: ''],
            [word: 'pants', att: ''],
            [word: 'red', att: '']
    }
            
  Una vez que se tiene esta estructura, se realizan las querys a la tabla de marcas y de tipos de ropa , haciendo la comparación
   de cada una de las palabras con el nombre de la marca / tipo de ropa. Si se encuentran coincidencias , se agrega el atributo correspondiente a la palabra introducida por el usuario. Realizadas las comparaciones, se obtiene un arreglo con las palabras y atributos definidos.
   
    data = {
            [word: 'hugo', att: 'bold'],
            [word: 'boss', att: 'bold'],
            [word: 'pants', att: 'italic'],
            [word: 'red', att: '']
    }
            
  
###Instalación y Corrida del Proyecto
   
   - Instalar node.js.
   - Instalar sails.js (version => 0.10.5).
   - Instalar  mongodb.
   - Clonar el repositorio y entrar en el directorio de la aplicación.
   - Instalar las dependencias corriendo el comando npm-install.
   - Levantar el Daemon de MongoDB corriendo el comando mongod.
   - Restaurar la Base de Datos corriendo el comando (mongorestore dump/)
   - Correr la Aplicación con el corriendo sails lift.
    

