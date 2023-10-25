require('colors');

const functions = require('./modules/math')


const main = async() => {
  
    console.log('*****************************************'.cyan);
    console.log(`*            `.cyan, 'MAYUSCULAS'.bgRed, `               *`.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*              `.cyan, "" + functions.mayusculas('Daimer'), `                  *   `.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*            `.cyan, 'MINUSCULAS'.bgRed, `               *`.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*              `.cyan, "" + functions.minusculas('GUERRERO'), `                  *   `.cyan);
    console.log('*****************************************'.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*     `.cyan, 'MAYUSCULAS Y MINUSCULAS'.bgRed, `         *`.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*            `.cyan, "" + functions.mayusculasyminusculas('DAIMER', 'GUERRERO'), `             *   `.cyan);
    console.log('*****************************************'.cyan);
    console.log('*****************************************'.cyan);
    console.log(`*     `.cyan, 'SE QUITA LA ULTIMA LETRA'.bgRed, `        *`.cyan);
    console.log('*****************************************'.cyan);
    let derecha = "Daimer Guerrero";

    function quitarLetra() {
      if ( derecha.length > 0) {
        derecha = derecha.slice(0, -1);
        console.log( derecha);
        quitarLetra1(); 
      }
    }
    quitarLetra();
    console.log('*****************************************'.cyan);
}
main();
console.log('*****************************************'.cyan);
    console.log(`*  `.cyan, 'SE QUITA LA PRIMERA LETRA'.bgRed, `          *`.cyan);
    console.log('*****************************************'.cyan); 

let alreves = "Daimer Guerrero";

function QuitarLetra() {
  if (alreves.length > 0) {
    console.log(alreves);
    alreves = alreves.slice(1); 
    QuitarLetrauitarLetra();
  }
}

QuitarLetra();
console.log('*****************************************'.cyan);