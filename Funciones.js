// Funcion Computer Aided Learning o CAL

// Crear las variables de los numeros usando numeros random
let n1 = Math.floor(Math.random() * 10);
let n2 = Math.floor(Math.random() * 10);

// PASO 2. Crear la pregunta para el usuario
let problemInWords = 'What is ' + n1 + '+' + n2 + '?';
let correctAnswer = n1 + n2; // Calcula la respuesta correcta

// Array de mensajes para respuestas incorrectas y correctas
const motivationalMessages = ["Well done!", "Very good!", "Correct!", "Keep it up!", "Nice work!"];
const wrongMessages = ["Not quite! Try again.", "Oops! Give it another shot.", "Incorrect, keep going!", "You can do it! Try again."];

// PASO 3. Procesar la respuesta
let userResponse; // Declarar la variable para la respuesta del usuario
do {
    // Solicita al usuario una respuesta
    userResponse = prompt(problemInWords);

    // Bucle para si el usuario ingresó un número
    if (isNaN(userResponse) || userResponse.trim() === "") {
        alert("Please enter a valid number.");
        continue; // Vuelve a pedir la respuesta
    }

    userResponse = Number(userResponse); // Parsea la respuesta en número

    // Comparar la respuesta del usuario con la respuesta correcta
    if (userResponse !== correctAnswer) {
        // Mensaje aleatorio para respuestas incorrectas
        let = selectionBullet = Math.floor(Math.random() * wrongMessages.length)
        let wrongMessage = wrongMessages[selectionBullet];
        alert(wrongMessage);
    }

} while (userResponse !== correctAnswer); // Repite hasta que la respuesta sea correcta

// PASO 4. Mostrar un mensaje motivacional
let = selectionBullet = Math.floor(Math.random() * wrongMessages.length)
let motivationalMessage = motivationalMessages[selectionBullet];
alert(motivationalMessage);
