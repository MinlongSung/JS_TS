const fruits = ['manzana', 'pera', 'fresa', 'mango', 'naranja'];
const products = ['gafas', 'pantalones', 'camiseta', 'zapatillas', 'abrigo', 'jersey'];
const devices = ['móvil', 'televisión', "tablet", "altavoces"];
const furniture = ['silla', 'mesa', "cama", "sofá"];

// 1. Array operations
// 1.1. Head
// Implementa una función head (inmutable), tal que, dado un array como 
// entrada extraiga y devuelva su primer elemento. 
// Utiliza destructuring.
const head = (elements = []) => {
    try {
        if (!elements || !Array.isArray(elements)) throw new Error("Invalid parameter");
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
        if (!elements || !Array.isArray(elements)) throw new Error("Invalid parameter");
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
        if (!elements || !Array.isArray(elements)) throw new Error("Invalid parameter");
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
        if (!elements || !Array.isArray(elements)) throw new Error("Invalid parameter");
        return elements.length > 0? [...elements].pop() : [];
    } catch (e) {
        console.log(e);
    }
}
console.log('1.4. ------ last ------');
console.log(last(products));

// 2. Concat
// Implementa una función concat (inmutable) tal que, dados 2 arrays como entrada, devuelva la concatenación de ambos. 
// Utiliza rest / spread operators.
const concat = (baseArray = [], secondaryArray = []) => {
    try {
        if ((!baseArray || !secondaryArray) || 
            (!Array.isArray(baseArray) || !Array.isArray(secondaryArray))) {
            throw new Error("Invalid parameters");
        }
        return baseArray.concat(secondaryArray);
    } catch (e) {
        console.log(e);
    }
};
// const concat = function() {
//     try {
//         let baseArray = [];
//         for (let i in arguments) {
//             let secondaryArray = arguments[i];
//             if (!secondaryArray || !Array.isArray(secondaryArray)) throw new Error("Invalid parameters");
//             baseArray = baseArray.concat(secondaryArray);
//         }
//         return baseArray;
//     } catch (e) {
//         console.log(e);
//     }
// };
console.log('2.1. ------ concat ------');
console.log(concat(fruits, products));
// console.log(concat(fruits, products, devices, furniture));