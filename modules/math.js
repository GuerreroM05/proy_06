const functions = {}; // Se inicializa un objeto vacío llamado 'functions'

// Definición de la función 'mayusculas', que convierte una cadena a mayúsculas
function mayusculas(Daimer) {
    return Daimer.toUpperCase(); // Devuelve la cadena 'Daimer' en mayúsculas
}

// Definición de la función 'minusculas', que convierte una cadena a minúsculas
function minusculas(Guerrero) {
    return Guerrero.toLowerCase(); // Devuelve la cadena 'Guerrero' en minúsculas
}

// Definición de la función 'mayusculasyminusculas', que convierte la primera letra de una cadena en mayúscula y el resto en minúsculas para ambas cadenas
function mayusculasyminusculas(Daimer , Guerrero) {
    return Daimer[0].toUpperCase() + Daimer.substring(1).toLowerCase() +"  " +
     Guerrero[0].toUpperCase() + Guerrero.substring(1).toLowerCase(); // Devuelve la primera letra de 'Daimer' y 'Guerrero' en mayúscula, y el resto en minúsculas
}

// Asigna las funciones definidas anteriormente como propiedades del objeto 'functions'
functions.minusculas = minusculas;
functions.mayusculas = mayusculas;
functions.mayusculasyminusculas = mayusculasyminusculas;

// Exporta el objeto 'functions' para su uso en otros archivos de JavaScript mediante la declaración 'require'
module.exports = functions;