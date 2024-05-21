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

