function mostrarRequisitos() {
    requisitos.style.display = 'flex'
    requisitos.style.flexDirection = 'column'

}

function validarApelido() {
  var apelido = iptApelido.value;

  if (apelido.length == 20) {
    iptApelido.style.border = "1px solid red";
  } else {
    iptApelido.style.border = "none";
  }
}

function validarSenha() {
  var senha = iptSenha.value;
  var confirmarSenha = iptConfirmarSenha.value;
  var apelido = iptApelido.value;

  if ((senha.length || confirmarSenha.length || apelido.length) == 0) {
    iptSenha.style.border = "1px solid red";
    iptConfirmarSenha.style.border = "1px solid red";
    iptApelido.style.border = "1px solid red";
    avisoSenha.innerHTML = "Preencha todos os campos!";
  } else {
    if (senha == confirmarSenha) {
      swal(
        "Cadastro realizado com sucesso!",
        " Redirecionando para tela de Login...",
        "success"
      );
      cadastrar();
    } else {
      avisoSenha.innerHTML = "Os campos de senha devem coincidir!";
    }
  }

}


