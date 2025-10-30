const nome = document.querySelector("#nome");
const nota01 = document.querySelector("#nota01");
const nota02 = document.querySelector("#nota02");
const nota03 = document.querySelector("#nota03");
const resultado = document.querySelector("#resultado");
const btnEnviar = document.querySelector("#btn-enviar");
const btnLimpar = document.querySelector("#btn-limpar");

function calcularMedia(n1, n2, n3) {
  return (n1 + n2 + n3) / 3;
}

function mostrarResultado(nomeVal, n1, n2, n3, media) {
  const msgAprovado = `
    <div class="aprovado">
      <h2><strong>Nome do Aluno:</strong> ${nomeVal}</h2>
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
      <h2><strong>Aluno:</strong> ${nomeVal}</h2>
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

  if (media < 7) {
    return (resultado.innerHTML = msgReprovado);
  }

  return (resultado.innerHTML = msgAprovado);
}

btnEnviar.addEventListener("click", (e) => {
  e.preventDefault();

  const nomeVal = nome.value;
  const n1 = Number(nota01.value);
  const n2 = Number(nota02.value);
  const n3 = Number(nota03.value);

  const media = calcularMedia(n1, n2, n3);

  mostrarResultado(nomeVal, n1, n2, n3, media);
});

btnLimpar.addEventListener("click", () => {
  resultado.innerHTML = "";
});
