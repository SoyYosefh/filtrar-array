// 6. Filtrado de elementos en un arreglo: Crea un arreglo de números y
// filtra los elementos para mostrar solo aquellos que sean mayores que 
// un valor dado por el usuario.

const numeros = [5, 3, 8, 1, 2, 9, 4, 7, 6, 10];
const readline = require('readline');

// Configuración del módulo readline para recibir la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitar al usuario que un numero
rl.question('Ingrese un numero entre el 1 y 10: ', (n) => {

    // Filtrar los elementos del arreglo que sean mayores que el número ingresado
    const numerosFiltrados = numeros.filter(numero => numero > parseInt(n));
    console.log(`Los números mayores que ${n} son: ${numerosFiltrados}`);
    rl.close();
});
