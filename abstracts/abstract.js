/* p.s:logica de fazer um café
const cor = "branco"
const tamanho = 2.5

function verificarSeOCopoEstaSujo(sujo) {
 p.s: logica para verificar se o copo está sujo.
return `o copo: ${sujo}`
}

const copo = {
  cor,
  tamanho,
  verificarSeOCopoEstaSujo,
}

console.log(copo.verificarSeOCopoEstaSujo("não está sujo"))
console.log(copo.verificarSeOCopoEstaSujo("está sujo"))
console.log(copo.verificarSeOCopoEstaSujo("não está sujo"))
console.log(copo.verificarSeOCopoEstaSujo("está sujo"))
  
 p.s: se quiser vê o que está acontecendo
no programa pode usar uma opção chamada
console que tem uma funcionalidade de 
escreve no terminal integrado qualquer 
coisa que for mandado.

p.s.: Configurar o servidor para apresentar arquivo estáticos
server.use(express.static('public'))

Habilitar o body do formulário.
server.use(express.urlencoded({extended: true}))

p.s.: Configurando a templete engine
const nunjucks = require("nunjucks")
nunjucks.configure("./", {
  express:server
  noCache: true, p.s.: é um boolean ou boleano que apenas aceita 2 
  valores como : true ou false.
})

P.s:vetor ou array serve para colecionar objeto, dados e textos.
const estante = [
  {marca:"coca-cola"},
  {marca:"coca-cola"},
  {marca:"coca-cola"},

  ou 
  "Mayk"
  "Diego"
  "Gustavo"
]


p.s.: configurando o servidor
const express = require("express")
const server = express

p.s.:configurar a apresentação da página
server.get("/", function(req,res) {
  return res.send("ok, cheguei aqui com nodemon")
}

GET pega dados.
POST regista dados.
PUSH coloca um valor dentro do array.

p.s: Ligar o servidor e permitir o acesso na porta 3000
server.listen(300,function(){
  console.log("iniciei o servidor.")
})

Banco de dados: 
dados não podem ficar na aplicação;
perda/corromper
segurança 

linguagem do banco de dado
SQL - structured Query Laguage (Linguagem de Consulta Estruturada)
Não é uma linguagem de programção
Linguagem para criar as tabelas, buscar os dados nas tabelas, atualizar ou apagar.

POSRGRES - Sistema Gerenciador de Banco de dados Relacional (SGBDR)
open source
gratuito









*/