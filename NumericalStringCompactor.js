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
binaryForCustomized(str) // 31202140

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
customizedForBinary(str) // 11100110000