import { Router, Request, Response } from 'express';
// Importamos los Enums que definimos para asegurarnos que los géneros y países sean válidos
import { MovieGenre, MovieCountry } from '../enums/MovieEnums';

const router = Router();

// --- Definición de la Interface ---
// Esto es TypeScript en acción: Creamos un "molde" o contrato de cómo debe lucir una Película.
// Así nos aseguramos de no cometer errores al escribir los datos.
interface Movie {
    id: number;
    title: string;
    genre: MovieGenre; // El género DEBE ser uno de los que definimos en el Enum
    country: MovieCountry; // Lo mismo para el país
}

// --- Almacenamiento Temporal ---
// Usamos un simple arreglo (array) para guardar las películas mientras el servidor esté encendido.
// Si reiniciamos el servidor, esto se borrará (para hacerlo permanente necesitaríamos una Base de Datos)
const movies: Movie[] = [];

// --- Ruta GET: Mostrar formulario y lista ---
router.get('/', (req: Request, res: Response) => {
    // Convertimos los Enums en arreglos simples para poder recorrerlos en el HTML con un ciclo for
    const genres = Object.values(MovieGenre);
    const countries = Object.values(MovieCountry);

    // Renderizamos la vista 'movies.ejs' y le enviamos toda la información necesaria:
    // 1. Título de la página
    // 2. La lista de géneros disponibles (para el <select>)
    // 3. La lista de países disponibles (para el otro <select>)
    // 4. Las películas que ya hemos guardado (movies)
    res.render('movies', {
        title: 'Ejercicio 2: Gestión de Películas',
        genres: genres,
        countries: countries,
        movies: movies
    });
});

// --- Ruta POST: Guardar una nueva película ---
router.post('/add', (req: Request, res: Response) => {
    // Extraemos los datos que envió el formulario desde el cuerpo de la petición (body)
    const { title, genre, country } = req.body;

    // Creamos un nuevo objeto siguiendo nuestra interface 'Movie'
    const newMovie: Movie = {
        id: Date.now(), // Usamos la hora actual como un ID único (un truco rápido)
        title: title as string,
        genre: genre as MovieGenre,
        country: country as MovieCountry
    };

    // Agregamos la nueva película a nuestro arreglo
    movies.push(newMovie);

    // Finalmente, recargamos la página para que aparezca la nueva película en la tabla
    res.redirect('/ejercicio2');
});

export default router;
