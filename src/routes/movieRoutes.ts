import { Router, Request, Response } from 'express';
import { MovieGenre, MovieCountry } from '../enums/MovieEnums';

const router = Router();

// Interfaz para el objeto Película
interface Movie {
    id: number;
    title: string;
    genre: MovieGenre;
    country: MovieCountry;
}

// Almacenamiento en memoria (simulando una base de datos)
const movies: Movie[] = [];

// Ruta GET /ejercicio2 - Muestra el formulario y la lista
router.get('/', (req: Request, res: Response) => {
    // Renderizamos la vista 'movies' pasando los enums y la lista de películas
    res.render('movies', {
        title: 'Ejercicio 2: Gestión de Películas',
        genres: Object.values(MovieGenre),
        countries: Object.values(MovieCountry),
        movies: movies // Pasamos la lista actual de películas
    });
});

// Ruta POST /ejercicio2/add - Procesa el registro de una nueva película
router.post('/add', (req: Request, res: Response) => {
    const { title, genre, country } = req.body;

    // Creamos el nuevo objeto película
    const newMovie: Movie = {
        id: Date.now(), // ID simple basado en timestamp
        title: title as string,
        genre: genre as MovieGenre,
        country: country as MovieCountry
    };

    // Agregamos al array en memoria
    movies.push(newMovie);

    // Redirigimos de vuelta a la lista para ver los cambios
    res.redirect('/ejercicio2');
});

export default router;
