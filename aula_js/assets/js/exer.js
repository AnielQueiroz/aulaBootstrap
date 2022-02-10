const pessoa = {
    nome: 'Aniel',
};

const animal = {
    nome: 'Dom',
};

function getSomething(){
    console.log(this.nome);
}

getSomething.apply(animal);
/*---------------------------*/

const myObj = {
    num1: 2,
    num2: 6,
};

function soma (a, b){
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(myObj, [1, 5]);
/*----------------------------- */

/**Exercicios */
console.log("Atividade 1");

const alunos = [
    {
        nome: 'Aniel',
        nota: 5,
        turma: '20',
    },
    {
        nome: 'Noélia',
        nota: 9,
        turma: '1A',
    },
    {
        nome: 'Pedro',
        nota: 6,
        turma: '7',
    },
    {
        nome: 'Juan',
        nota: 3,
        turma: '11',
    },
];

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){

        const {nota, nome} = arr[i];

        if(nota >= media){
            aprovados.push(nome)
        }
    }
    return aprovados;
}

console.log(alunosAprovados(alunos, 5));

/**------------------------------------- */

console.log("Atividade 2");

function calculaIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: 'Aniel',
    idade: 23
};

const pessoa2 = {
    nome: 'Carla',
    idade: 26
};

const animal2 = {
    nome: 'Fiona',
    idade: 5,
    raca: 'Pug'
};

console.log(calculaIdade.call(pessoa1, 30))
/**--------------------------------------- */
console.log("Atividade 3");

function getAdmins(map){
    let admins = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admins.push(key)
        }
    }
    return admins;
}

const user = new Map();

user.set('Aniel', 'Admin');
user.set('Leonardo', 'Admin');
user.set('Leina', 'Admin');
user.set('Jurema', 'User');

console.log(getAdmins(user));

/**Throw, try e catch */

console.log("Atividade 4");

function verificaPalindromo(string){
    if (!string) throw "String Inválida";

    return string === string.split('').reverse().join('');
}

function tryCatchExemplo(string){
    try{
        verificaPalindromo(string)
    }
    catch(e){
        throw(e);
    }
    finally{
        console.log('A String enviada foi: ' + string);
    }
}

tryCatchExemplo('');
/**------------------------------- */

/**Objeto Error */

const MeuErro = new Error('Mensagem Inválida');
MeuErro.name = 'InvalidMessage';

throw MeuErro;

/**---------------------------- */

function validaArray(arr, num){
    try{
        if(!arr && !num) throw new ReferenceError("Envie os Parametros");

        if(typeof arr !== 'object') throw new TypeError("Array precisa ser do tipo Objeto");

        if(typeof arr !== 'number') throw new TypeError("Numero precisa ser do tipo Objeto");

        if(arr.length !== num) throw new RangeError('Tamanho Inválido');

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log("Este é o ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("Este é o TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log("Este é o RangeError!");
            console.log(e.message);
        }else{
            console.log("Erro não esperado: " + e);
        }
    }
}

console.log(validaArray());
