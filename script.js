const textoTarefa = document.querySelector(".inputText");
const adicionarTarfa = document.querySelector(".addItem");
const lista = document.querySelector(".lista");

function adicionarItem() {
  if (textoTarefa.value) {
    let li = document.createElement("li");

    li.classList.add(
      "item",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "mb-3"
    );

    li.innerHTML = `
    <span class="conteudoTarefa">${textoTarefa.value}</span>
  <button type="button" class="btn btn-danger deleteItem">Remover</button>
    `;
    lista.prepend(li);

    let tarefa = textoTarefa.value;

    textoTarefa.value = "";
  } else alert("Tarefa sem informação !");
}
function deletarItem(botao) {
  if (botao.target.nodeName === "BUTTON") {
    const li = botao.target.parentNode;
    li.remove();
  }
}
function adicionarItemviaEnter(e) {
  if (e.key === "Enter") {
    adicionarItem();
  }
}

adicionarTarfa.addEventListener("click", adicionarItem);

textoTarefa.addEventListener("keydown", adicionarItemviaEnter);

lista.addEventListener("click", deletarItem);
