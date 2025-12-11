import { Router, Request, Response } from 'express';

// Creamos un "Router" que es como un mini-gestor de caminos o sub-rutas
const router = Router();

// --- Ruta GET (Cuando entramos a la página) ---
// URL: http://localhost:3000/ejercicio1
router.get('/', (req: Request, res: Response) => {
    // Aquí le decimos al servidor: "Muestra (renderiza) el archivo html/ejs llamado 'animal-form'"
    // También le pasamos una variable 'title' para que se vea en la pestaña del navegador
    res.render('animal-form', { title: 'Ejercicio 1: Tu Animal Favorito' });
});

// --- Ruta POST (Cuando enviamos el formulario) ---
// URL: http://localhost:3000/ejercicio1/animal
// Esta ruta se activa cuando el usuario hace clic en el botón "Enviar" del formulario
router.post('/animal', (req: Request, res: Response) => {
    // 'req.body' contiene los datos que escribió el usuario. 
    // 'animalName' es el nombre que le pusimos al <input> en el HTML
    const animalName = req.body.animalName;

    // Ahora le decimos al servidor: "Muestra la vista 'animal-result' y pásale el nombre que capturamos"
    // Así es como logramos "interceptar" el nombre y mostrarlo en otra página
    res.render('animal-result', {
        title: 'Ejercicio 1: Resultado',
        animal: animalName
    });
});

// Exportamos estas rutas para poder usarlas en el archivo principal app.ts
export default router;
