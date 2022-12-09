function mostrarRequisitos() {
  requisitos.style.display = 'inherit';
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
  
    if (senha.length == 0 || confirmarSenha.length == 0 || apelido.length == 0) {
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
  

function requisitosSenha() {
  var senha = iptSenha.value;

  if (!(senha.length >= 8)) {
      buttonRegister.style.backgroundColor = 'gray'
      buttonRegister.style.cursor = 'unset'
      buttonRegister.disabled = true
  } else {
      buttonRegister.style.backgroundColor = 'var(--outer-purple)'
      buttonRegister.style.cursor = 'pointer'
      buttonRegister.disabled = false
  }

  if (senha.length >= 8) {
      oitoCar.style.color = 'green'
  } else {
      oitoCar.style.color = 'inherit'
  };


}

