function formatar(mascara, documento) {
  let i = documento.value.length;
  let saida = '#';
  let texto = mascara.substring(i);
  while (texto.substring(0, 1) != saida && texto.length) {
    documento.value += texto.substring(0, 1);
    i++;
    texto = mascara.substring(i);
  }
}


var button = document.getElementById("myButton");

button.addEventListener("click", function () {
  alert("Enviado com sucesso!");
});

var form = document.getElementById("myForm");

form.addEventListener("submit", function () {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("nasc").value = "";
  document.getElementById("cpf").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("sexo").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("endereco").value = "";
});

