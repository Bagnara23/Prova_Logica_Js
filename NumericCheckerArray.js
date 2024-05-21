/*
    01 - Implemente um método para percorrer um array, verificando se o número é par.
    Se for verdadeiro, multiplicar por dois, e se algum for maior que 50 retornar verdadeiro.
    Criar outro método seguindo os mesmos requisitos, porém para números ímpares, e o valor de teste para verdadeiro é 40.
*/


/* Verifica se há numeros pares na array e se multiplicado por 2 (se há algum algum for maior que 50 retornar verdadeiro). */
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

/* Verifica se há numeros ímpares na array e se multiplicado por 2 (se há algum algum for maior que 40 retornar verdadeiro). */
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