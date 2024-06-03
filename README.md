
    EXAMEN 




Proyecto de Programación
Descripción del Proyecto

Este proyecto consiste en una aplicación web que incluye un formulario de inicio de sesión y registro, así como clases en JavaScript para representar escritores, libros y usuarios.

Características principales:

    Formulario de inicio de sesión y registro: La aplicación web cuenta con un formulario de inicio de sesión que permite a los usuarios acceder a la plataforma, así como un formulario de registro para nuevos usuarios.

    Clases de escritor y libro: Se han implementado clases en JavaScript para representar escritores y libros. Los escritores pueden tener una lista de libros escritos.

    Clases de género de libros: Se han creado clases para diferentes géneros de libros, como Aventuras, Ciencia Ficción, Fantasía, entre otros.

    Gestión de usuarios: La aplicación incluye una clase de usuario que permite registrar nuevos usuarios y almacenarlos en un array.

Tecnologías Utilizadas

    HTML y CSS: Para la estructura y el estilo visual de la aplicación.
    JavaScript: Para la lógica del lado del cliente y las clases de escritor, libro y usuario.
    React.js: Para construir la interfaz de usuario de manera eficiente y modular.
    MongoDB: Como base de datos NoSQL para almacenar información de usuarios, escritores y libros.

Estructura de Archivos

    index.html: Contiene la estructura HTML de la aplicación, incluyendo los formularios de inicio de sesión y registro.
    style.css: Archivo CSS que define los estilos visuales de la aplicación.
    script.js: Archivo JavaScript que contiene las clases de escritor, libro, géneros de libros y gestión de usuarios, así como la lógica para manejar los eventos del formulario.
    App.js: El componente principal de React que maneja la lógica del inicio de sesión y registro.
    UserContext.js: Un contexto de React para gestionar el estado global de los usuarios.
    Writer.js y Book.js: Componentes de React que representan a los escritores y libros respectivamente.
    server.js: Archivo que maneja la configuración del servidor y las rutas de la API.
    models/: Directorio que contiene los modelos de MongoDB para usuarios, escritores y libros.

Uso

    Iniciar la aplicación:
        Ejecutar npm install para instalar las dependencias necesarias.
        Configurar la conexión a MongoDB en el archivo server.js.
        Ejecutar npm start para iniciar el servidor y la aplicación React.

    Interacción con la aplicación:
        Abrir el archivo index.html en un navegador web compatible.
        Utilizar el formulario de inicio de sesión para acceder a la plataforma si ya tiene una cuenta.
        Si es un nuevo usuario, puede registrarse utilizando el formulario de registro.
        Una vez dentro de la plataforma, puede explorar las funcionalidades disponibles.


¡IMPORTANTE!
        Mantenemos tambien archivos de versiones antiguas con errores, para mostrar el progreso y o la facil reescritura para el usuario
