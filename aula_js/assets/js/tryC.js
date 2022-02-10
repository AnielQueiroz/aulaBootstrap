function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError('Envie os Parametros');

        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo Objeto');

        if(typeof num !== 'number') throw new TypeError('Numero precisa ser do tipo Number');

        if(arr.length !== num) throw new RangeError('Tamanho Inválido');

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este é o ReferenceError!");
            throw(e.message);
        } else if (e instanceof TypeError){
            console.log("Este é o TypeError!");
            throw(e.message);
        } else if (e instanceof RangeError){
           console.log("Este é o RangeError!");
           throw(e.message);
        }else{
            throw("Erro não esperado: " + e);
        }
    }
}

console.log(validaArray([4,5,6,4,8], 5));