// Crie um objeto que receba ao menos três propriedades sobre você.
let sobre = {
    nome: "alessandra",
    signo: "aquario",
    curso: "ciencias sociais"
}
console.log(sobre)

// Adicione uma nova propriedade sem alterar seu objeto inicial.
sobre.idade = 30
console.log(sobre)

// Remova uma propriedade desse objeto.
delete sobre.curso
console.log(sobre)

//Mostre no console todas as propriedades desse objeto.
sobre.curso = "ciencias sociais"
console.log(sobre)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.

let cadastro = [
    {
        nome: "alessandra", 
        idade: 30,
        telefone: 21969399903,
        amigos: ["joao", "jose", "ana", "renata"]
    },
    {
        nome: "alessandra", 
        idade: 30,
        telefone: 21969399903,
        amigos: ["geraldo", "juliana", "fara", "tati"]
    }
]

// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[2])
console.log(cadastro[1].amigos[1])