class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar(ataque) {
        console.log(`O ${this.nome}, que é um ${this.tipo}, atacou usando ${ataque}`);
    }
}


let novoAtaque = new Heroi("Arthur", 30, "guerreiro");

novoAtaque.atacar("uma espada");