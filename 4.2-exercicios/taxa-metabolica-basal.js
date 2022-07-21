let age = 21; //idade
let sex = 'F'; //
let weight = 90;
let height = 170;
let result;

// Calculo para se for paciênte homem
if (sex == 'M') {
    result = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5;
// Calculo para se for paciênte mulher
} else {
    result = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161;
}
// Imprimindo string com resultado do calculo para determinado paciênte
console.log('A taxa metabólica basal é: ' + result + ' Kcal');