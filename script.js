const perguntas = [
  {
    pergunta: "Qual é a sintaxe correta para comentários de uma única linha em JavaScript?",
    respostas: [
      "// Comentário",
      "/* Comentário */",
      "' Comentário",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do operador '==' em JavaScript?",
    respostas: [
      "Comparação estrita de igualdade",
      "Atribuição de valor",
      "Comparação de igualdade",
    ],
    correta: 2
  },
  {
    pergunta: "Como se declara uma variável em JavaScript?",
    respostas: [
      "var nomeDaVariavel;",
      "variavel nomeDaVariavel;",
      "variavel = nomeDaVariavel;",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'querySelector()'?",
    respostas: [
      "Selecionar todos os elementos com uma classe específica",
      "Selecionar o primeiro elemento que corresponde a um seletor CSS especificado",
      "Selecionar todos os elementos dentro de um elemento específico",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de escrever um condicional 'if' em JavaScript?",
    respostas: [
      "if (condição) { código }",
      "if condicao { código }",
      "se (condição) { código }",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é a função do método 'addEventListener()' em JavaScript?",
    respostas: [
      "Remover um ouvinte de evento de um elemento",
      "Adicionar um ouvinte de evento a um elemento",
      "Executar uma função assincronamente",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a maneira correta de comentar várias linhas em JavaScript?",
    respostas: [
      "/* Comentário */",
      "// Comentário",
      "<!-- Comentário -->",
    ],
    correta: 0
  },
  {
    pergunta: "O que significa 'DOM' em JavaScript?",
    respostas: [
      "Document Object Model",
      "Data Object Model",
      "Documentary Object Module",
    ],
    correta: 0
  },
  {
    pergunta: "Qual é o resultado da expressão '3 + '3' em JavaScript?",
    respostas: [
      "6",
      "33",
      "Erro",
    ],
    correta: 1
  },
  {
    pergunta: "Qual é a função do método 'push()' em um array em JavaScript?",
    respostas: [
      "Remover o último elemento do array",
      "Adicionar um ou mais elementos ao final do array",
      "Inverter a ordem dos elementos do array",
    ],
    correta: 1
  },
];

/* Parece complicado, porém é bem simples. Acima, existe um Array e dentro
desse array possui um, dois, três... Dez objetos. Para cada objeto abre um
{} e dentro desse objeto, é criado um novo array, para dar a possibilidade
de escolha das opções da pergunta. */

const quiz = document.querySelector('#quiz') //Pegando o id no html
const template = document.querySelector('template') 

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector ('#acertos span')
mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas

for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

  for(let resposta of item.respostas) {
    const dt = quizItem.querySelector('dl dt').cloneNode(true)
    dt.querySelector('span').textContent = resposta
    dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
    dt.querySelector('input').value = item.respostas.indexOf(resposta)
    dt.querySelector('input').onchange = (event) => {

      const estaCorreta = event.target.value == item.correta
      corretas.delete(item)
      if (estaCorreta) {
        corretas.add(item)
      }

      mostrarTotal.textContent = corretas.size + " de " + totalDePerguntas
    }


    quizItem.querySelector('dl').appendChild(dt)
  }

quizItem.querySelector('dl dt').remove()

quiz.appendChild(quizItem)
}
