// Variáveis para estilo da modal
const modalWidth = '300px';
const modalHeight = '200px';
const modalColor = 'white';

// Variável com o HTML da modal
const modalHTML = `
  <div style="display: flex; justify-content: flex-end;">
    <button id="closeModal">Fechar</button>
  </div>
  <input type="text" id="modalInput" placeholder="Digite algo...">
  <button id="sendButton">Enviar</button>
`;

// Função para criar a modal
function createModal() {
  // Cria a modal
  const modal = document.createElement('div');
  modal.style.position = 'fixed';
  modal.style.top = '50%';
  modal.style.left = '50%';
  modal.style.transform = 'translate(-50%, -50%)';
  modal.style.backgroundColor = modalColor;
  modal.style.padding = '20px';
  modal.style.borderRadius = '5px';
  modal.style.zIndex = '1000';
  modal.style.display = 'block';
  modal.style.width = modalWidth;
  modal.style.height = modalHeight;

  // Adiciona o conteúdo HTML à modal
  modal.innerHTML = modalHTML;

  // Adiciona a modal ao corpo da página
  document.body.appendChild(modal);

  // Adiciona o evento de clique ao botão de fechar
  const closeButton = modal.querySelector('#closeModal');
  closeButton.addEventListener('click', () => {
    modal.remove(); // Remove a modal da página
  });

  // Adiciona o evento de clique ao botão de enviar
  const sendButton = modal.querySelector('#sendButton');
  sendButton.addEventListener('click', () => {
    const message = modal.querySelector('#modalInput').value;
    alert(message);
    modal.remove(); // Remove a modal da página
  });
}

// Cria a modal quando o código é executado
createModal();

// Você pode chamar a função createModal() novamente para adicionar mais modais à página
