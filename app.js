// Se importa el paquete 'colors' y el módulo 'math' definido en './modules/math'
require('colors');
const functions = require('./modules/math');

// Definición de la función principal como una función asíncrona
const main = async() => {
    // Imprime una serie de líneas de asteriscos en color cyan
    console.log('*****************************************'.cyan);
    // Imprime un encabezado para la sección 'MAYUSCULAS' en color cyan con fondo rojo
    console.log(`*            `.cyan, 'MAYUSCULAS'.bgRed, `               *`.cyan);
    // Imprime una serie de líneas de asteriscos en color cyan
    console.log('*****************************************'.cyan);
    // Imprime el resultado de la función 'mayusculas' del objeto 'functions' en color cyan
    console.log(`*              `.cyan, "" + functions.mayusculas('Daimer'), `                  *   `.cyan);
    // Imprime una serie de líneas de asteriscos en color cyan
    console.log('*****************************************'.cyan);
    // ... Repite el mismo patrón para las secciones restantes 'MINUSCULAS', 'MAYUSCULAS Y MINUSCULAS', 'SE QUITA LA ULTIMA LETRA' ...

    // Imprime una serie de líneas de asteriscos en color cyan
    console.log('*****************************************'.cyan);
}

// Llama a la función principal
main();

// Imprime una serie de líneas de asteriscos en color cyan
console.log('*****************************************'.cyan);
// Imprime un encabezado para la sección 'SE QUITA LA PRIMERA LETRA' en color cyan con fondo rojo
console.log(`*  `.cyan, 'SE QUITA LA PRIMERA LETRA'.bgRed, `          *`.cyan);
// Imprime una serie de líneas de asteriscos en color cyan
console.log('*****************************************'.cyan);

// Se define una variable 'alreves' y una función 'QuitarLetra' que quita la primera letra de la cadena en cada iteración
let alreves = "Daimer Guerrero";

function QuitarLetra() {
    if (alreves.length > 0) {
        console.log(alreves);
        alreves = alreves.slice(1); 
        QuitarLetra(); // Llama a sí misma para continuar quitando letras de la cadena
    }
}

// Llama a la función 'QuitarLetra' para iniciar el proceso de eliminación de letras
QuitarLetra();
console.log('*****************************************'.cyan);
