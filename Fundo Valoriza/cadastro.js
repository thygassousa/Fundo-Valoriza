// Função para cadastrar um novo usuário
function cadastrarUsuario() {
  // Obter os valores dos campos do formulário
  var nome = document.getElementById('nome').value;
  var sobrenome = document.getElementById('sobrenome').value;
  var email = document.getElementById('email').value;
  var telefone = document.getElementById('telefone').value;
  var dataNascimento = document.getElementById('dataNascimento').value;
  var senha = document.getElementById('senha').value;
  var confirmarSenha = document.getElementById('confirmarSenha').value;

  // Verificar se as senhas coincidem
  if (senha !== confirmarSenha) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
  }

  // Verificar se o email já está cadastrado
  if (localStorage.getItem(email)) {
      alert('Este email já está cadastrado. Por favor, use outro email.');
      return;
  }

  // Criar um objeto com os dados do usuário
  var usuario = {
      nome: nome,
      sobrenome: sobrenome,
      email: email,
      telefone: telefone,
      dataNascimento: dataNascimento,
      senha: senha
  };

  // Armazenar o usuário no armazenamento local
  localStorage.setItem(email, JSON.stringify(usuario));

  // Redirecionar para a página de login
  window.location.href = 'login.html';
}
