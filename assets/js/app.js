const nome = document.querySelector("#nome"); 

// Pergunta: Qual ID deve ser usado para selecionar a primeira nota?
// No html localize o elemento ou tag input e dentro tem a propriedade
// que corresponde ao hashtag ou jogo de velha dentro das
// das aspas abaixo.
const nota01 = document.querySelector("#"); 

// Pergunta: Qual ID deve ser usado para selecionar a segunda nota?
// Responda substituindo "#" por "#nota02".// No html localize o elemento ou tag input e dentro tem a propriedade
// que corresponde ao hashtag ou jogo de velha dentro das
// das aspas abaixo.const nota02 = document.querySelector("#");

const nota03 = document.querySelector("#nota03"); 

// Pergunta: Qual ID deve ser usado para selecionar 
// a div que exibe o resultado?
// No html localize o elemento ou tag div e dentro tem a propriedade
// que corresponde ao hashtag ou jogo de velha dentro das
// das aspas abaixo.
const resultado = document.querySelector("#");

// Pergunta: Qual é o ID do botão que envia o formulário?
// No html localize o elemento ou tag button e dentro tem a propriedade
// que corresponde ao hashtag ou jogo de velha dentro das
// das aspas abaixo.
const btnEnviar = document.querySelector("#"); 

const btnLimpar = document.querySelector("#btn-limpar"); 


/*
  Pergunta 1:
  Dê um NOME para a função que irá calcular a média do aluno
  (ex.: calcularMedia, mediaAluno).
  quantos parâmetros precisamos para calcular a media, os nomes dos
  parâmetros pode ser ex: n1, .., ..
  OBS: não esquecer das virgulas para separa os parâmetros.
*/
function () {
  /*
    Pergunta 2:
    Entre o sinal de somar você precia colocar os parâmetros que 
    você colocou dentro dos parenteses.
  */
  return ( +  + ) / 3;
}


/*
  Pergunta 3:
  Dê um NOME para a função que mostra o resultado
  (ex.: mostrarResultado, mostrarMediaDoAluno)
  você escolhe o nome que for ideal para a função.
  Dica, o primero é nome
*/
function () {
  /*
    Pergunta 4:
    Dentro dos templates strings abaixo, colocar dentro das
    chaves ${....} o parametro que corresponde a cada uma das
    constantes abaixo:
  */
  const msgAprovado = `
    <div class="aprovado">
      <h2><strong>Nome do Aluno:</strong> ${}</h2>
      <div><strong>Notas:</strong> ${}, ${}, ${},</div>
      <div><strong>Média:</strong> ${}</div>
      <div class="status">
        <div><strong>Parabéns você está</strong></div>
        <div><strong>🎉🎉🎉 Aprovado 🎉🎉🎉</strong></div>
        <div>🤪🤪👻👻🎃🎃🩻🩻👽👽🤡🤡</div>
      </div>
    </div>
  `;

  const msgReprovado = `
    <div class="reprovado">
      <h2><strong>Aluno:</strong> ${}</h2>
      <div><strong>Notas:</strong> ${}, ${}, ${},</div>
      <div><strong>Média:</strong> ${}</div>
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
  if ( < ) {
    /*
      Pergunta 6:
      O return abaixo irá mostrar a mensagem de aprovado mas o que
      está faltando depois do ponto para mostra essa mensagem no html
    */
    return (resultado. = msgReprovado);
  }

  /*
    Pergunta 7:
    O return abaixo irá mostrar a mensagem de aprovado mas o que
    está faltando depois do ponto para mostra essa mensagem no html
  */
  return (resultado. = msgAprovado);
}

/*
  Pergunta 8:
  Adicione o ouvinte de evento de CLIQUE no botão limpar.
  Complete o método e o tipo do evento:
  depois do ponto precisa ter o escutador de evento.
  dentro das aspas precisa ter o evento de .......
*/
btnEnviar.("", (e) => {
  /*
    Pergunta 9:
    Para impedir o comportamento padrão do formulário precisamos
    utilizar o que depois do ponto.
  */
  e.

  /*
    Pergunta 10:
    Capture os valores digitados:
    - Nas 4 const abaixo precisam pegar o valor dos campos inputs
    do html, depois do ponto precisa ter o que?
    - Para as notas precisamos tranfromar em numeros porque estão
    como string, o que você precisa colocar antes dos parenteses
    com a primeira letra maiuscula?
  */
  const nomeVal = nome.;
  const n1 = (nota01.);
  const n2 = (nota02.);
  const n3 = (nota03.);

  /*
    Pergunta 11:
    Calcule a média chamando a função criada na Pergunta 1,
    passando os TRÊS pareametros corretos.
    Quais as consts que você irá colocar nos parenteses na função 
    calcularMedia para que retorne a media
  */
  const media = calcularMedia();

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
  mostrarResultado();
});

/*
  Pergunta 13:
  Adicione o ouvinte de evento de CLIQUE no botão limpar.
  Complete o método e o tipo do evento:
  depois do ponto precisa ter o escutador de evento.
  dentro das aspas precisa ter o evento de .......
*/
btnLimpar.("", () => {
  /*
    Pergunta 14:
    Limpe o conteúdo da div de resultado:
  */
  resultado.innerHTML = "";
});
