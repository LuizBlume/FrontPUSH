// JSON.parse(); // Transforma o texto JSON em um objeto
// JSON.stringify(); // Transforma um objeto em um texto JSON
const caneta = {
    nome: 'Caneta Bic',
    cor: 'Azul',
    quantidade: 10

}
const json = JSON.parse('{"id": 1, "name": "Notebook Dell", "modelo": "Gamer", "quantidade": 5}');
console.log(json);
const stringJson = JSON.stringify(caneta);
console.log(stringJson);