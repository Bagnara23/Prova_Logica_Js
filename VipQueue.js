/*
    05 - FilaVip: Implemente os métodos abaixo, necessários para uma FilaVip.
    - Enfilerar - insere um elemento no fim da fila.
    - Atender - remove o elemento do início da fila.
    - EnfilerarVip - insere um elemento no atrás do último elemento vip ou no início da fila se for o primeiro Vip.
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