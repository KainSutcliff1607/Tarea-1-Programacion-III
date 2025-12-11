import express from 'express';
import path from 'path';

// Importamos las rutas que hemos creado para cada ejercicio
import animalRoutes from './routes/animalRoutes';
import movieRoutes from './routes/movieRoutes';

// Iniciamos la aplicación de Express, que es como el cerebro de nuestro servidor
const app = express();

// Definimos el puerto donde va a escuchar nuestro servidor (3000 por defecto)
const PORT = process.env.PORT || 3000;

// --- Configuración de Vistas ---
// Le decimos a Express que vamos a usar EJS como motor de plantillas
// Esto nos sirve para crear HTML que puede recibir datos (variables) desde el servidor
app.set('view engine', 'ejs');

// Indicamos en qué carpeta están guardados nuestros archivos .ejs
// 'path.join' nos ayuda a unir las rutas de las carpetas sin importar si estamos en Windows o Linux
app.set('views', path.join(__dirname, '../views'));

// --- Middlewares (Funciones intermedias) ---

// Este comando es vital: permite que cuando enviamos un formulario, el servidor entienda los datos
// que vienen en el "body" de la petición. Sin esto, req.body estaría vacío.
app.use(express.urlencoded({ extended: true }));

// Configuramos la carpeta 'public' para poner ahí cosas como imágenes o archivos CSS
// que el navegador puede pedir directamente.
app.use(express.static(path.join(__dirname, '../public')));

// --- Rutas de la Aplicación ---

// Conectamos las rutas de los ejercicios a direcciones específicas
// Si alguien entra a /ejercicio1, lo maneja el archivo animalRoutes
app.use('/ejercicio1', animalRoutes);
// Si alguien entra a /ejercicio2, lo maneja el archivo movieRoutes
app.use('/ejercicio2', movieRoutes);

// Esta es la ruta principal (la "home" o inicio) de nuestra página
app.get('/', (req, res) => {
    // Renderizamos (dibujamos) la vista 'index.ejs' y le pasamos un título
    res.render('index', { title: 'Evaluación Práctica 1' });
});

// Finalmente, ponemos el servidor a escuchar en el puerto configurado
app.listen(PORT, () => {
    console.log(`¡Listo! El servidor está funcionando en http://localhost:${PORT}`);
});
