/*
    01 - Implemente um método para percorrer um array, verificando se o número é par.
    Se for verdadeiro, multiplicar por dois, e se algum for maior que 50 retornar verdadeiro.
    Criar outro método seguindo os mesmos requisitos, porém para números ímpares, e o valor de teste para verdadeiro é 40.
*/

/* Verifica se há numeros pares na array e se multiplicado por 2, há algum maior que 50. */
function isNumberEvenValid(arrayParam) {
    let arrayStatus = "false";
    
    if(!Array.isArray(arrayParam) || arrayParam.length === 0) { // Valida se a array é valida
        return arrayStatus;
    }
    
    for(let item in arrayParam) {
        if(arrayParam[item] % 2 === 0) {
            if((arrayParam[item] * 2) > 50) {
                arrayStatus = "true";
            }
        }
    };
    
    return arrayStatus;
}

/* Verifica se há numeros ímpares na array e se multiplicado por 2, há algum maior que 40. */
function isNumberOddValid(arrayParam) {
    let arrayStatus = "false";
    
    if(!Array.isArray(arrayParam) || arrayParam.length === 0) { // Valida se a array é valida
        return arrayStatus;
    }
    
    for(let item in arrayParam) {
        if(arrayParam[item] % 2 > 0) {
            if((arrayParam[item] * 2) > 40) {
                arrayStatus = "true";
            }
        }
    };
    
    return arrayStatus;
}


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

/*
    03 - Valor único:
    Faça um método que recebe um array de objetos e retorna um novo array somente com os valores que só ocorrem uma vez no array.
*/

let objCars = [{
        marca: 'Ford',
        modelo: 'Ka',
        cor: 'Branco',
        ano: 2006,
        motor: 1.0
    },{
        marca: 'Renault',
        modelo: 'Sandeiro',
        cor: 'Branco',
        ano: 2009,
        motor: 1.6
    },{
        marca: 'Chevrolet',
        modelo: 'Onix',
        cor: 'Branco',
        ano: 2012,
        motor: 1.4
    },{
        marca: 'Ford',
        modelo:  'Fiesta',
        cor: 'Vermelho',
        ano: 2006,
        motor: 1.0
    },{
        marca: 'Chevrolet',
        modelo: 'Onix',
        cor: 'azul',
        ano: 2009,
        motor: 1.0
    }];
    
// Deve retornar: ["1.4", "1.6", "2012", "Fiesta", "Ka", "Renault", "Sandeiro", "Vermelho", "azul"].
function getUniqueProperty(obj) {
    let auxReturn = [];
    let elementReturn = [];

    for(let i = 0; i < obj.length; i++) {
        if(auxReturn.length) {
            auxReturn += ',' + Object.values(obj[i]);
        } else {
            auxReturn = Object.values(obj[i]);
        } 
    }
    
    auxReturn = auxReturn.split(',').sort(); // Ordena a array para facilitar a filtragem dos elementos unicos.
    
    let register = '';
    let cont = 0;
    for(let i = 0; i <= auxReturn.length; i++) {
        if(register === '') {
            register = auxReturn[i];
            cont = 1;
        } else if(register != '' && register === auxReturn[i]) {
            cont++;
        } else if(register && register != auxReturn[i]) {
            if(cont === 1) {
                elementReturn.push(register);
            }
            register = auxReturn[i];
            cont = 1;
        } else if(i == (auxReturn.length)) {
            if(cont === 1) {
                elementReturn.push(register);
            }
        }
    }
    
    return elementReturn;
}

getUniqueProperty(objCars); // ["1.4", "1.6", "2012", "Fiesta", "Ka", "Renault", "Sandeiro", "Vermelho", "azul"]


/*
    04 - Compactador: Escreva dois métodos, um que recebe uma String de zeros e uns e comprime ela da seguinte maneira:
    ( 11100110000 -> 31202140 )
    Outro que recebe a String comprimida e escreve ela descomprimida:
    ( 31202140 -> 11100110000 )
*/

/* Converte binário para customizado. */
function binaryForCustomized(str) {
    let cont = 0;
    let element = '';
    let elementReturn = '';
    
    for(let i = 0; i < str.length; i++) {
        if(element === '') {
            element = str[i];
            cont++;
        } else if(element !== '' && element === str[i]) {
            cont++;
        } else {
            elementReturn += cont.toString();
            elementReturn += element;
            element = str[i]
            cont = 1; 
        }
        
        if(i === ((str.length) - 1)) {
            elementReturn += cont.toString();
            elementReturn += element;
        }
    }
    
    return elementReturn;
}

let str = '11100110000';
binaryForCustomized(str)// 31202140

/* Converte customizado para binário. */
function customizedForBinary(str) {
    let elementReturn = '';
    
    for(let i = 0; i < str.length; i += 2) {
        let cont = 0;  
        
        while(cont < Number.parseInt(str[i])) {
            elementReturn += str[i + 1];
            cont++;
        }    
    }
    
    return elementReturn;
}

let str = '31202140';
customizedForBinary(str)// 11100110000

/*
    05 - FilaVip: Implemente os métodos abaixo, necessários para uma FilaVip.
    - Enfilerar - insere um elemento no fim da fila.
    - Atender - remove o elemento do início da fila.
    - EnfilerarVip - insere um elemento no atrás do último elemento vip ou no início da fila se for o primeiro Vip (Precisa especificar melhor, a parde "elemento no atrás" deixa a questão confuça).
*/

let filaVip = [];
let filaNormal = [];
let filaAll = [];

/* Insere um elemento no fim da fila. */
function Enfilerar(filaNormal, elemento) {
    filaNormal.push(elemento);
    return (' > ' + elemento + ' foi adicionado a fila normal.');
}

/* Remove o elemento do início da fila. */
function Atender(filaVip, filaNormal) {
    // filaAll - Dá preferencia de atendimento para a fila vip.
    filaAll = filaVip.concat(filaNormal);
    let atendimento = filaAll.shift();
    return (' > ' + atendimento + ' foi atendido e removido da fila.');
}

/* Insere um elemento no fim da fila vip. */
function EnfilerarVip(filaVip, elemento) {
    filaVip.push(elemento);
    return (' > ' + elemento + ' foi adicionado a fila vip.');
}

