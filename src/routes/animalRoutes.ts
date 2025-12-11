import { Router, Request, Response } from 'express';

const router = Router();

// Vista del formulario: GET /ejercicio1
router.get('/', (req: Request, res: Response) => {
    // Renderizamos la vista 'animal-form'
    res.render('animal-form', { title: 'Ejercicio 1: Tu Animal Favorito' });
});

// Procesamiento del formulario: POST /ejercicio1/animal
router.post('/animal', (req: Request, res: Response) => {
    // Obtenemos el nombre del animal desde el cuerpo de la petición (req.body)
    const animalName = req.body.animalName;

    // Renderizamos la vista 'animal-result' pasando el nombre capturado
    res.render('animal-result', {
        title: 'Ejercicio 1: Resultado',
        animal: animalName
    });
});

export default router;
