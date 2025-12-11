import express from 'express';
import path from 'path';

// Inicializamos la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// Configuración del motor de plantillas EJS
// Esto permite renderizar vistas dinámicas desde la carpeta 'views'
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));

// Middleware para procesar datos de formularios (URL encoded)
app.use(express.urlencoded({ extended: true }));
// Middleware para servir archivos estáticos (CSS, JS, IMAGES) desde 'public'
app.use(express.static(path.join(__dirname, '../public')));

// Importar rutas
import animalRoutes from './routes/animalRoutes';
import movieRoutes from './routes/movieRoutes';

// Usar rutas
app.use('/ejercicio1', animalRoutes);
app.use('/ejercicio2', movieRoutes);

// Ruta Principal
app.get('/', (req, res) => {
    res.render('index', { title: 'Evaluación Práctica 1' });
});

// Inicialización del servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
