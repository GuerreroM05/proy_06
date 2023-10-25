const functions = {}


function mayusculas(Daimer) {
    return Daimer.toUpperCase();
}
function minusculas(Guerrero) {
    return Guerrero.toLowerCase();
}
function mayusculasyminusculas(Daimer , Guerrero) {
    return Daimer[0].toUpperCase() + Daimer.substring(1).toLowerCase() +"  " +
     Guerrero[0].toUpperCase() + Guerrero.substring(1).toLowerCase();
}





functions.minusculas = minusculas;
functions.mayusculas = mayusculas;
functions.mayusculasyminusculas = mayusculasyminusculas;

module.exports = functions;