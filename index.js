const fruits = ['manzana', 'pera', 'fresa', 'mango', 'naranja'];
const products = ['gafas', 'pantalones', 'camiseta', 'zapatillas', 'abrigo', 'jersey'];
const devices = ['móvil', 'televisión', "tablet", "altavoces"];
const furniture = ['silla', 'mesa', "cama", "sofá"];

function isValidArray(checkedElement) {
    return !checkedElement || !Array.isArray(checkedElement)? false : true;
}

// 1. Array operations
// 1.1. Head
// Implementa una función head (inmutable), tal que, dado un array como 
// entrada extraiga y devuelva su primer elemento. 
// Utiliza destructuring.
const head = (elements = []) => {
    try {
        if (!isValidArray(elements)) throw new Error("Invalid parameter, expected an array");
        [ firstElement ] = elements;
        return firstElement ?? "Not found";
    } catch (e) {
        console.log(e);
    }
}
console.log('1.1. ------ head ------');
console.log(head(fruits));

// 1.2. Tail
// Implementa una función tail (inmutable), tal que, dado un array como 
// entrada devuelta todos menos el primer elemento. 
// Utiliza rest operator.
const tail = (elements = []) => {
    try {
        if (!isValidArray(elements)) throw new Error("Invalid parameter, expected an array");
        [ firstElement, ...otherElements] = elements;
        return otherElements?.length > 0? otherElements : [];
    } catch (e) {
        console.log(e);
    }
    if (!elements) return [];
}
console.log('1.2. ------ tail ------');
console.log(tail(products));

// 1.3. Init
// Implementa una función init (inmutable), tal que, dado un array como entrada 
// devuelva todos los elementos menos el último. 
// Utiliza los métodos que ofrece Array.prototype.
const init = (elements = []) => {
    try {
        if (!isValidArray(elements)) throw new Error("Invalid parameter, expected an array");
        let copy = elements.length > 0? [...elements] : [];
        if (copy.length > 0) copy.pop();
        return copy;
    } catch (e) {
        console.log(e);
    }
}
console.log('1.3. ------ init ------');
console.log(init(products));

// 1.4. Last
// Implementa una función last (inmutable), tal que, dado un array como entrada devuelva el último elemento.
const last = (elements = []) => {
    try {
        if (!isValidArray(elements)) throw new Error("Invalid parameter, expected an array");
        return elements.length > 0? [...elements].pop() : [];
    } catch (e) {
        console.log(e);
    }
}
console.log('1.4. ------ last ------');
console.log(last(products));

// 2. Concat
// 2.1. Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. 
// Utiliza rest / spread operators.
const concat = (baseArray = [], secondaryArray = []) => {
    try {
        if (!isValidArray(baseArray) || !isValidArray(secondaryArray)) throw new Error("Invalid parameters, expected 2 arrays");
        return [...baseArray, ...secondaryArray];
    } catch (e) {
        console.log(e);
    }
};
console.log('2.1. ------ concat ------');
console.log(concat(fruits, products));

// Opcional
// 2.2. Implementa una versión del ejercicio anterior donde se acepten múltiples arrays de entrada (más de 2).
// const concat = function() {
//     try {
//         let baseArray = [];
//         for (let i in arguments) {
//             let secondaryArray = arguments[i];
//             if (!isValidArray(secondaryArray)) throw new Error("Invalid parameter, expected an array");
//             baseArray.push(...secondaryArray);
//         }
//         return baseArray;
//     } catch (e) {
//         console.log(e);
//     }
// };
// console.log('2.2. ------ concat ------');
// console.log(concat(fruits, products, devices, furniture));

// 3. Clone Merge
// 3.1. Clone
// Implementa una función clone que, a partir de un objeto de entrada source devuelva un nuevo objeto con las propiedades de source:
function clone(source = {}) {
    try {
        if (!source) throw new Error("Invalid parameter");
        return { ...source };
    } catch (e) {
        console.log(e);
    }
}
const user = { 
    id: 1,
    name: "Tom",
    country: {
        id: 3,
        name: "United States of America",
        iso3: "USA",
        state: {
            id: 7,
            name: "New York",
        }
    }
};
console.log('3.1. ------ Clone ------');
console.log(clone(user));

// 3.2 Merge
// Implementa una función merge que, dados dos objetos de entrada source y target, 
// devuelva un nuevo objeto con todas las propiedades de target y de source, 
// y en caso de propiedades con el mismo nombre, source sobreescribe a target.
function merge(source = {}, target = {}) {
    try {
        return clone({ ...target, ...source });
    } catch (e) {
        console.log(e);
    }
}
const a = { 
    name: "Maria",
    surname: "Ibañez",
    country: "SPA"
};
const b = { 
    name: "Luisa",
    age: 31,
    married: true
};
console.log('3.2. ------ Merge ------');
console.log(merge(a, b));

// 4. Read Books
// 4.1. Crea una función isBookRead que reciba una lista de libros y un título y devuelva si se ha leído o no dicho libro. 
// Un libro es un objeto con title como string y isRead como booleano. 
// En caso de no existir el libro devolver false 
// TIP: Existe un método de Array.prototype que te ayudará a buscar según un patrón.
function isBookRead(books = [], titleToSearch) {
    try {
        if (!isValidArray(books)) throw new Error("Invalid parameter, expected an array");
        if (!titleToSearch || typeof titleToSearch !== "string") return false;

        let foundBook = books.find(book => book.title.toLowerCase() === titleToSearch.trim().toLowerCase());
        return foundBook? foundBook.isRead : false;
    } catch (e) {
        console.log(e);
    }
}
const books = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];
console.log('4.1. ------ Read books ------');
console.log(isBookRead(books, "Devastación")); // true
console.log(isBookRead(books, "Canción de hielo y fuego")); // false
console.log(isBookRead(books, "Los Pilares de la Tierra")); // false

// 5. Slot Machine
// 5.1. El objetivo de este ejercicio es crear una máquina tragaperras utilizando clases donde cada vez que juguemos insertemos una moneda. 
// Cada máquina tragaperras (instancia) tendrá un contador de monedas que automáticamente se irá incrementando conforme vayamos jugando.
// Cuando se llame al método play:
//      1. el número de monedas se debe incrementar de forma automática 
//      2. debe generar tres booleanos aleatorios que representarán el estado de las 3 ruletas.
// El usuario habrá ganado en caso de que los tres booleanos sean true, y por tanto 
// deberá mostrarse por consola el mensaje: "Congratulations!!!. You won <número de monedas> coins!!"; y 
// reiniciar las monedas almacenadas, ya que las hemos conseguido y han salido de la máquina. 
// En caso contrario deberá mostrar otro mensaje: "Good luck next time!!".

class SlotMachine {
    constructor() {
        this.coins = 0;
    }
    
    play() {
        this.coins += 10;
        let spinOutcome = Array(3).fill(Math.random() >= 0.5);
        let playerWon = spinOutcome.every(spinValue => spinValue === true);
        if (playerWon) {
            console.log(`Congratulations!!!. You won ${this.coins} coins!!`);
            this.coins = 0;
        } else {
            console.log("Good luck next time!!");
        }
    }
}
  
console.log('5.1. ------ Slot Machine ------');
const machine1 = new SlotMachine();
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 3 coins!!"
machine1.play(); // "Good luck next time!!"
machine1.play(); // "Congratulations!!!. You won 2 coins!!"