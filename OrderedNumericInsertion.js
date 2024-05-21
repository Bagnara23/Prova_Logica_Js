/*
    02 - Inserção ordenada: Faça um método que recebe um array de números inteiros e um novo número para ser inserido.
    Insira o novo número no array de forma ordenada, ou seja, na posição do array em que ele continue ordenado do menor 
    para o maior, sem usar o método sort.
*/

/* Função para ordenar a array. */
function classificationInOrder(receivedArray) {
    function classificationInOrder (receivedArray) {
        /* Verifica se o array possui mais de um elemento. Caso possua até um elemento, será retornada a propria array. */
        if (receivedArray.length <= 1) {
            return receivedArray;
        }
        
        /* Verifica a mediana da Array. */
        const mediana = Math.floor(receivedArray.length / 2);

        /* Divide a Array em duas metades (left e right). */
        const left = receivedArray.slice(0, mediana);
        const right = receivedArray.slice(mediana);

        /* Utiliza a recursão para particionar a array principal. */
        return concatElements(classificationInOrder(left), classificationInOrder(right));
    }

    /* Concatena as sub arrays (left e right). */
    function concatElements (left, right) {
        let resultArray = [], leftIndex = 0, rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                resultArray.push(left[leftIndex]); // Insere o valor no array.
                leftIndex++; // Adiciona uma nova posição para a array.
            } else {
                resultArray.push(right[rightIndex]);
                rightIndex++; // move right array cursor
            }
        }

        return resultArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
    
    /* Verifica se o array possui mais de um elemento. Caso possua até um elemento, será retornada a propria array. */
    if (receivedArray.length <= 1) {
        return receivedArray;
    }
    
    /* Verifica a mediana da Array. */
    const mediana = Math.floor(receivedArray.length / 2);

    /* Divide a Array em duas metades (left e right). */
    const left = receivedArray.slice(0, mediana);
    const right = receivedArray.slice(mediana);

    /* Utiliza a recursão para particionar a array principal. */
    return concatElements(classificationInOrder(left), classificationInOrder(right));
}

function orderInsertArray(arrayParam, newElement) {
    if(!Array.isArray(arrayParam) || !newElement || !Number.isInteger(newElement)) { // Valida se os paramêtros são validos
        return "Parâmetros inválidos. Verifique-os!";
    }
    
    let arraySorted = [];
    if(arrayParam.length) {
        // Ordena o Array inicial (Não está descrito que é necessário, mas por via de divida está implementado).
        let auxAraay = classificationInOrder(arrayParam);
        let changedArray = false;
        
        for(let item in auxAraay) {
            if(auxAraay[item] > newElement && !changedArray) {
                arraySorted.push(newElement);
                changedArray = true;
            }
            arraySorted.push(auxAraay[item]);
        };
    
    } else {
        arraySorted.push(newElement);
    }
    
    return arraySorted;
}

let arr1 = [11, 20, 17, 23, 32, 15];
let element = 19;


orderInsertArray(arr1, element); // [11, 15, 17, 17, 20, 23, 32]