const nome = document.querySelector("#nome");

// Pergunta: Qual ID deve ser usado para selecionar a primeira nota?
// No html localize o elemento ou tag input e dentro tem a propriedade
// que corresponde ao hashtag ou jogo de velha dentro das
// das aspas abaixo.
const nota01 = document.querySelector("#nota01");

// Pergunta: Qual ID deve ser usado para selecionar a segunda nota?
// Responda substituindo "#" por "#nota02".// No html localize o elemento ou tag input e dentro tem a propriedade
// que corresponde ao hashtag ou jogo de velha dentro das
// das aspas abaixo.const nota02 = document.querySelector("#");
const nota02 = document.querySelector("#nota02");
const nota03 = document.querySelector("#nota03");

// Pergunta: Qual ID deve ser usado para selecionar
// a div que exibe o resultado?
// No html localize o elemento ou tag div e dentro tem a propriedade
// que corresponde ao hashtag ou jogo de velha dentro das
// das aspas abaixo.
const resultado = document.querySelector("#resultado");

// Pergunta: Qual é o ID do botão que envia o formulário?
// No html localize o elemento ou tag button e dentro tem a propriedade
// que corresponde ao hashtag ou jogo de velha dentro das
// das aspas abaixo.
const btnEnviar = document.querySelector("#btn-enviar");

const btnLimpar = document.querySelector("#btn-limpar");

/*
  Pergunta 1:
  Dê um NOME para a função que irá calcular a média do aluno
  (ex.: calcularMedia, mediaAluno).
  quantos parâmetros precisamos para calcular a media, os nomes dos
  parâmetros pode ser ex: n1, .., ..
  OBS: não esquecer das virgulas para separa os parâmetros.
*/
function calcularMedia(n1, n2, n3) {
  /*
    Pergunta 2:
    Entre o sinal de somar você precia colocar os parâmetros que 
    você colocou dentro dos parenteses.
  */
  return (n1 + n2 + n3) / 3;
}

/*
  Pergunta 3:
  Dê um NOME para a função que mostra o resultado
  (ex.: mostrarResultado, mostrarMediaDoAluno)
  você escolhe o nome que for ideal para a função.
  Dica, do primero parametro é nome
*/
function mostrarResultado(nome, n1, n2, n3, media) {
  /*
    Pergunta 4:
    Dentro dos templates strings abaixo, colocar dentro das
    chaves ${....} o parametro que corresponde a cada uma das
    constantes abaixo:
  */
  const msgAprovado = `
    <div class="aprovado">
      <h2><strong>Nome do Aluno:</strong> ${nome}</h2>
      <div><strong>Notas:</strong> ${n1}, ${n2}, ${n3},</div>
      <div><strong>Média:</strong> ${media}</div>
      <div class="status">
        <div><strong>Parabéns você está</strong></div>
        <div><strong>🎉🎉🎉 Aprovado 🎉🎉🎉</strong></div>
        <div>🤪🤪👻👻🎃🎃🩻🩻👽👽🤡🤡</div>
      </div>
    </div>
  `;

  const msgReprovado = `
    <div class="reprovado">
      <h2><strong>Aluno:</strong> ${nome}</h2>
      <div><strong>Notas:</strong> ${n1}, ${n2}, ${n3},</div>
      <div><strong>Média:</strong> ${media}</div>
      <div class="status">
        <div><strong>Você está</strong></div>
        <div><strong>😭😭😭 Reprovado 😭😭😭 </strong></div>
        <!-- Dica pedagógica: considere substituir esta linha por uma mensagem respeitosa/educativa. -->
        <div>Seu completo idiota! 💩💩😈😈☠️☠️💩💩</div>
      </div>
    </div>
  `;

  /*
    Pergunta 5:
    Complete a condição para verificar reprovação:
    Estamos dentro da função e está recebendo alguns parametros,
    qual deles você irá colocar antes do sinal de menor e depois
    do sinal de menor você pode colocar o valor que desejar 
    ex: 7 ou 8 ou 6, escolha um valor e realize os testes.
    
  */
  if (media < 7) {
    /*
      Pergunta 6:
      O return abaixo irá mostrar a mensagem de aprovado mas o que
      está faltando depois do ponto para mostra essa mensagem no html
    */
    return (resultado.innerHTML = msgReprovado);
  }

  /*
    Pergunta 7:
    O return abaixo irá mostrar a mensagem de aprovado mas o que
    está faltando depois do ponto para mostra essa mensagem no html
  */
  return (resultado.innerHTML = msgAprovado);
}

/*
  Pergunta 8:
  Adicione o ouvinte de evento de CLIQUE no botão limpar.
  Complete o método e o tipo do evento:
  depois do ponto precisa ter o escutador de evento.
  dentro das aspas precisa ter o evento de .......
*/
btnEnviar.addEventListener("click", (e) => {
  /*
    Pergunta 9:
    Para impedir o comportamento padrão do formulário precisamos
    utilizar o que depois do ponto.
  */
  e.preventDefault();

  /*
    Pergunta 10:
    Capture os valores digitados:
    - Nas 4 const abaixo precisam pegar o valor dos campos inputs
    do html, depois do ponto precisa ter o que?
    - Para as notas precisamos tranfromar em numeros porque estão
    como string, o que você precisa colocar antes dos parenteses
    com a primeira letra maiuscula?
  */
  const nomeVal = nome.value;
  const n1 = Number(nota01.value);
  const n2 = Number(nota02.value);
  const n3 = Number(nota03.value);

  /*
    Pergunta 11:
    Calcule a média chamando a função criada na Pergunta 1,
    passando os TRÊS pareametros corretos.
    Quais as consts que você irá colocar nos parenteses na função 
    calcularMedia para que retorne a media
  */
  const media = calcularMedia(n1, n2, n3);

  /*
    Pergunta 12:
    Chame a função que mostra o resultado (Pergunta 3),
    passando TODOS os paremetros, acima foi criado constantes, você
    precis colocar os parametros na ordem que você definiu na
    função da pergunta 3.
    Dica, o primeiro é o nome
    Coloquei o nome da função como mostrarResultado como exemplo,
    lembrado que você tem que colocar o mesmo nome da função
    na pergunta 3.
  */
  mostrarResultado(nomeVal, n1, n2, n3, media);
});

/*
  Pergunta 13:
  Adicione o ouvinte de evento de CLIQUE no botão limpar.
  Complete o método e o tipo do evento:
  depois do ponto precisa ter o escutador de evento.
  dentro das aspas precisa ter o evento de .......
*/
btnLimpar.addEventListener("click", () => {
  /*
    Pergunta 14:
    Limpe o conteúdo da div de resultado:
  */
  resultado.innerHTML = "";
});
