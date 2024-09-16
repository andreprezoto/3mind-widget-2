// Acessa o último script (o próprio script.js) que está sendo executado
const scriptTag = document.currentScript;

// Extrai o valor do atributo 'user_id'
const empresaId = scriptTag.getAttribute("user_id");

// Função para criar o botão de chat dinamicamente
function createChatButton() {
  // Criar o botão
  const button = document.createElement("button");
  button.id = "chatButton";
  //button.innerHTML = "💬";

  // Estilo do botão
  button.style.position = "fixed";
  button.style.bottom = "40px";
  button.style.right = "40px";
  button.style.backgroundColor = "#40C351";
  button.style.color = "white";
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.width = "48px";
  button.style.height = "48px";
  button.style.backgroundImage =
    'url("https://img.icons8.com/color/48/whatsapp--v1.png")';
  button.style.backgroundSize = "cover";
  button.style.backgroundPosition = "center";
  button.style.fontSize = "24px";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
  /*
  // Adicionar hover
  button.addEventListener("mouseover", () => {
    button.style.backgroundColor = "#0056b3";
  });

  button.addEventListener("mouseout", () => {
    button.style.backgroundColor = "#007bff";
  });
  */

  // Adicionar evento de clique
  button.addEventListener("click", function () {
    // Função para obter os parâmetros da URL
    function getUrlParameter(name) {
      name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
      var regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
      var results = regex.exec(window.location.search);
      return results === null
        ? ""
        : decodeURIComponent(results[1].replace(/\+/g, " "));
    }

    // Obtém os parâmetros 'utm_source' e 'utm_campaign'
    var gclid = getUrlParameter("gclid");

    // Cria a URL de redirecionamento com os parâmetros
    var redirectUrl =
      "https://app.3mindtecnologia.com.br/version-01bgy/google_redirect?gclid=" +
      gclid +
      "&empresa_unique_id=" +
      empresaId;

    // Redireciona o usuário
    window.location.href = redirectUrl;
  });

  // Adicionar o botão ao body
  document.body.appendChild(button);
}

// Executar a função ao carregar a página
window.onload = createChatButton;
