let alimentos = [
    {fruta: 'maça'},
    {fruta: 'laranja'},
    {fruta: 'uva'},
    {fruta: 'pera'},
    {fruta: 'melancia'},
    {vegetal: 'batata'},
    {vegetal: 'cenoura'},
    {vegetal: 'iame'},
    {vegetal: 'rucula'},
    {vegetal: 'mandioca'},
]

let frutas = alimentos
    .filter(alimento=>alimento.fruta)
    .map(alimento => alimento.fruta);

let vegetais = alimentos
    .filter(alimento=>alimento.vegetal)
    .map(alimento => alimento.vegetal);

console.log(alimentos);
console.log(`frutas: ${frutas}`);
console.log(`vegetais: ${vegetais}`);
