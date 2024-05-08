// Clase Escritor
class Escritor {
    constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
        this._librosEscritos = [];
    }

    getNombre() {
        return this._nombre;
    }

    agregarLibro(libro) {
        this._librosEscritos.push(libro);
    }

    getLibrosEscritos() {
        return this._librosEscritos;
    }
}

// Clase base Libro
class Libro {
    #titulo;
    #genero;
    #escritor;

    constructor(titulo, genero, escritor) {
        this.#titulo = titulo;
        this.#genero = genero;
        this.#escritor = escritor;
        this.#escritor.agregarLibro(this); // Relacionar el libro con el escritor
    }

    getTitulo() {
        return this.#titulo;
    }

    getGenero() {
        return this.#genero;
    }

    getEscritor() {
        return this.#escritor;
    }
}



// Generos de libros 

// Clases derivadas
class Aventuras extends Libro {
    constructor(titulo, escritor) {
        super(titulo, 'Aventuras', escritor);
    }
}


class CienciaFiccion extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Ciencia Ficción', escritor);
    }
}

class Fantasia extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Fantasía', escritor);
    }
}

class Policiaca extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Policíaca', escritor);
    }
}

class Terror extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Terror', escritor);
    }
}

class Romantica extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Romántica', escritor);
    }
}

class Poesia extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Poesía', escritor);
    }
}

class Mitologia extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Mitología', escritor);
    }
}

class Teatro extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Teatro', escritor);
    }
}

class Cuento extends Libro {

    constructor(titulo, escritor) {
        super(titulo, 'Cuento', escritor);
    }
}

