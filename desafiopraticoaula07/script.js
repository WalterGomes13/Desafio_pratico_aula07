//A senha é senha.
function usuarioCerto(nome, senha) {
  if (senha == 'senha') {
    console.log(`Bem vindo, ${(nome).toLowerCase()}`);
  };
}

function usuarioErrado(senha) {
  if (senha != 'senha') {
    console.log('Senha inválida');
  };
}

function autenticarUsuario(nome, senha, callback1, callback2) {
  callback1(nome, senha);
  callback2(senha);
}

autenticarUsuario('WALTER', 'senha', usuarioCerto, usuarioErrado);