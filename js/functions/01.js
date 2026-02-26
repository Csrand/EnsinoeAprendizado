// 1.
const calculadora = (x,y,operacao) => operacao(x,y);
const soma = (x,y) => x + y;
const subtracao = (x,y) => x - y;
const multiplicacao = (x,y) => x * y;
const divisao = (x,y) => x / y;
console.log(calculadora(5,5,soma));
console.log(calculadora(5,5,subtracao));
console.log(calculadora(5,5,multiplicacao));
console.log(calculadora(5,5,divisao));

//2.
const mensagemPersonalizada = (nome) => () => console.log(`ola ${nome}`);
const oiCs = mensagemPersonalizada('cs')
oiCs();

// 3.
const dobro = x => x * 2;
const soma1 = x => x + 1;
const compor = (func1,func2) => x => func1(func2(x))
const dobraDepoisoma1 = compor(soma1, dobro);
console.log(dobraDepoisoma1(7));

// 4
const criarSaudacao = saudacao => nome => console.log(`${saudacao} ${nome}!`);
saudarPt = criarSaudacao('ola')
saudarEn = criarSaudacao('hello')
saudarPt('cs')
saudarEn('cs')

// 5
const criarSaudacao2 = saudacoes => idioma => nome => console.log(`${saudacoes[idioma]}, ${nome}`);

const saudacoes = {pt:'ola', en:'hello', fr:'bonjour'}
const idiomas = ['pt', 'en', 'fr'];
const saudadores = idiomas.map(criarSaudacao2(saudacoes));

saudadores[0]('css')
saudadores[1]('css')
saudadores[2]('css')
