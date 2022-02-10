class contaBancaria{
    constructor(agencia, numero, tipo, saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo(){
        return this._saldo
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor > this._saldo){
            return console.log('Saque negado; saldo insuficiente!');
    }
    this._saldo = this._saldo - valor;

    return this._saldo
    }

    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }
}

class contaCorrente extends contaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this.cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return console.log('Operação Negada!')
        }

        this._saldo = this._saldo - valor;
    }
}

var btn = document.querySelector('.botao');


btn.addEventListener('click', function(){
    var agenciaDigitada = document.querySelector('#agencia').value;
    var contaDigitada = document.querySelector('#conta').value;
    console.log(agenciaDigitada, contaDigitada);   
})



