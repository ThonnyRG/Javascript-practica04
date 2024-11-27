// Ejercicio 1
const año = prompt("Ingresa un año");

function esBisciesto(año) {
    if ((año % 4 === 0 && año % 100 !== 0) || (año % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}
console.log(esBisciesto(año));
// Ejercicio 2.1
let product = 1;

const sentinel = -1;

let numero = prompt("ingresa una cantidad");

while(numero !== sentinel){
    if(numero > 0){
        product *= numero;
    }else{
        alert("Ingresa un numero positivo");
    }
    numero = parseInt(prompt("Ingresa otro numero"))
}
alert("El resultado es" + producto);


// Ejercicio 2.2
const sentinel = -1;

let numero = prompt("ingresa una cantidad");

while(numero !== sentinel){
    if(numero > 0){
        const raiz = Math.sqrt(numero);
        alert("El resultado es" + raiz);
    }else{
        alert("Ingresa un numero positivo");
    }
    
}
// Ejercicio 2.3
const akinator = Math.floor(Math.random() * 10);

const sentinel = -1;

let adivinado = prompt("ingresa el numero del 1 al 10 a adivinar");

while(adivinado !== akinator){
    if(adivinado >= 1 && guess <= 10){
        adivinado = prompt("Incorreto vuelva a ingresar el numero del 1 al 10 a adivinar");
    }
}

for(let count = 10; count >= 0;){
    console.log(count);
    count -= 2;
}

// Ejercicio 7

const n = parseInt(prompt("Ingrese el valor de n:"));
let sum = 0;

for (let i = 1; i <= n; i++) {
    sum += 1 / i; // Calcula el recíproco y suma
}

alert('La suma de los recíprocos de los primeros' + n + 'números naturales es:' + sum);

// ejercicio 8

const n = parseInt(prompt("Ingrese el valor de n:"));
let suma = 0;

for (let i = 1; i <= n; i++) {
    suma += 1 / i; // Suma de recíprocos
}

alert("La suma de los recíprocos de los primeros "+ n + "números naturales es:" + suma.toFixed(4));

// ejercicio 9

let countEven = 0;
let input;

while (true) {
    input = prompt("Ingrese un número (o escriba 'stop' para finalizar):");

    if (input.toLowerCase() === "stop") {
        break;
    }

    const number = parseInt(input);

    if (number % 2 === 0) {
        alert("Par");
        countEven++;
    } else {
        alert("Impar");
    }
}

alert(`Se ingresaron ${countEven} números pares.`);

// ejercicio 10

const firtsName = prompt("ingresa tu nombre"); 

const lastName = prompt("ingresa tu apellido");

console.log("Hola, "+ firtsName + lastName + " Bienvenido a lis!");

// ejercicio 12
let uprCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lwrCaseLetters = "abcdefghijklmnopqrstuvwxyz";
let letters = uprCaseLetters + lwrCaseLetters;

console.log(uprCaseLetters.toLowerCase()); // abcdefghijklmnopqrstuvwxyz
console.log(lwrCaseLetters.toLowerCase()); // abcdefghijklmnopqrstuvwxyz

console.log(uprCaseLetters.slice(0, 5)); // ABCDE
console.log(uprCaseLetters.slice(20)); // UVWXYZ
console.log(lwrCaseLetters.slice(1, 6)); // bcdef

console.log(letters.slice(26, 52)); // abcdefghijklmnopqrstuvwxyz
console.log(letters.indexOf("a")); // 26
console.log(letters.lastIndexOf("A")); // -1
console.log(letters.replace("abc", "123")); // ABCDEFGHIJKLMNOPQRSTUVWXYZ123defghijklmnopqrstuvwxyz

console.log(uprCaseLetters == lwrCaseLetters); // false
console.log(uprCaseLetters == lwrCaseLetters.toUpperCase());

// Inicializar las dos matrices
let arrOfEvens = [2, 4, 6, 8, 10];
let arrOfOdds = [1, 3, 5, 7, 9];

// Crear una tercera matriz para almacenar los resultados
let arrOfSums = [];

// Sumar los elementos de las dos matrices
for (let i = 0; i < arrOfEvens.length; i++) {
    arrOfSums.push(arrOfEvens[i] + arrOfOdds[i]);
}

// Imprimir la matriz resultante
console.log(arrOfSums);


// Declarar el arreglo original
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];

// a) Eliminar el primer y último elemento usando shift y pop
daysOfWeek.shift(); // Elimina 'Sun'
daysOfWeek.pop();   // Elimina 'Sat'

// El arreglo ahora es: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']

// b) Agregar 'Sat' y 'Sun' al final usando push
daysOfWeek.push('Sat', 'Sun');

// El arreglo ahora es: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun']

// Imprimir el resultado final
console.log(daysOfWeek);

