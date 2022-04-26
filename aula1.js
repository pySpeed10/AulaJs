console.log("Codigo separado");

let num1 = 20;
let num2 = 40;

console.log(num1 + num2);

let nomes = []; //um array vazio
nomes = ["Eduardo", "Antônio"];
nomes.push("Marcos");
nomes.unshift("Márcia");
nomes[4] = "Felipe";
nomes[-1] = "Miguel";
nomes[17] = 34;
let quantNomes = nomes.length;
console.log(quantNomes);
console.log(nomes);
//operador spread ...nomeVariavel

let disp = ["Português", "Logica", "Matematica", 123];

for (let [indice, disc] of disp.entries()){
    console.log("O conteudo", disc, "está no indice: ", indice);
}

let precos = [300.3, 249, 100.5];
let precosDescontados = precos.map((p) => {
let desconto = p * 0.1;
return p - desconto;
});
console.log(precos);
console.log(precosDescontados);


let Pessoa = {
    nome: "Fulano Ribeiro",
    idade: 20,
    telefone: "88 9 7777 5555",
};

    console.log(Pessoa);
    console.log
    (Pessoa.nome);
    console.log(Pessoa["nome"]);
    console.log(Pessoa["telefone"]);
    console.log((Pessoa.email = "teste@teste.com"));
    console.log(Pessoa);

    let aluno = {
        nome: "Rodrigo",
        sobrenome: "Andrade",
        idade: 31,
        endereco: {
            rua: "Alameda exemplo",
            numero: 213
        }
    };
        
    let {nome, sobrenome} = aluno;
    let nome2 = aluno.nome;
    let {endereco: {rua}} = aluno;
    console.log(nome, sobrenome, nome2, rua);

let x = "123" + 10; //retorna “12310” 
console.log(typeof(x)); //retorna ‘string’
let y;
console.log(y = "texto" * 1); //retorna NaN (Not a Number)
console.log(typeof(aluno));

//ternario
let res = (5 > 3) ? "Maior" : "Menor";
console.log(res);

var ex = function soma(x, y) { 
  let resp = x + y; 
  return resp; 
};

//let calc = soma(5,7); 
//console.log(calc);

var as = ex;

console.log(as(5,3));

console.log(typeof(as));

function mensagens() {
    setTimeout(function () {
    console.log("Primeira mensagem");}, 5000);
    setTimeout( () =>{
    console.log("Segunda mensagem");}, 3000);
    setTimeout(function () {
    console.log("Terceira mensagem");}, 1000);
}

mensagens();

//const textos = document.querySelectorAll("p");

function selecionaParagrafos() {
    const textos = document.querySelectorAll("p");
    let listaImpressao = Array.from(textos);
    listaImpressao.map((p) => console.log(p.innerText));
}

selecionaParagrafos();



    