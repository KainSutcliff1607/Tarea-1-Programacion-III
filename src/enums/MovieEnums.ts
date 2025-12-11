// --- Enums en TypeScript ---
// Los Enums (Enumerados) nos sirven para definir un grupo de valores fijos y permitidos.
// Esto evita errores de escritura, por ejemplo, escribir "Accion" sin tilde o "action" en minúscula.
// Aquí definimos los Géneros de películas permitidos en nuestra aplicación.

export enum MovieGenre {
    Action = "Acción",
    Comedy = "Comedia",
    Drama = "Drama",
    Horror = "Terror",
    SciFi = "Ciencia Ficción",
    Romance = "Romance"
}

// De igual forma, definimos una lista cerrada de Países.
// Esto nos ayudará a llenar los selectores en el formulario HTML.
export enum MovieCountry {
    USA = "Estados Unidos",
    UK = "Reino Unido",
    Spain = "España",
    Japan = "Japón",
    France = "Francia",
    Italy = "Italia"
}
