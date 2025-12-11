# Evaluación Práctica 1. Resolución de ejercicios

Profesor: Carlos Márquez
Estudiante: Juan Henríquez 

## Descripción de la Actividad

Para nuestra primera evaluación vamos a realizar los siguientes ejercicios, en los cuales deberás aplicar los contenidos desarrollados hasta ahora en la Unidad Curricular. Si realizaste el análisis con el mapa conceptual, participaste activamente en el foro y en el canal de telegram para aclarar tus dudas, dispones de las herramientas para cumplir con éxito la evaluación y obtener su **25% de ponderación (5 puntos)**.

Debes responder a los siguientes enunciados:

### Ejercicio 1
Solicitar el nombre de un animal que sea su favorito y mediante NODE, intercepta y recarga otra página html que muestra dicho nombre, requiere dos vistas.

### Ejercicio 2
Utilizando typescript enumerar: género de películas, país de la película y luego mostrarlos.


## Recomendaciones Docentes

Todo el código fuente debe ser documentado con las palabras del estudiante, sobre todo en lo que se programa, no en lo que se genera automáticamente por cada framework que se utiliza ni lo común de las librerías.

La entrega de los resultados debe hacerse siguiendo las indicaciones dadas oportunamente por tu docente a través del canal de telegram de la Unidad Curricular.

---

## Estructura del Proyecto

Esta aplicación ha sido construida utilizando:
- **Node.js**: Entorno de ejecución.
- **Express**: Framework para el servidor web.
- **EJS**: Motor de plantillas para generar las vistas HTML.
- **TypeScript**: Lenguaje utilizado para garantizar el tipado estático (Enums, Interfaces).

### Instrucciones para Ejecutar

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar en modo desarrollo** (con reinicio automático):
   ```bash
   npm run dev
   ```
   Abre tu navegador en `http://localhost:3000`.

3. **Compilar y ejecutar en producción**:
   ```bash
   npm run build
   npm start
   ```