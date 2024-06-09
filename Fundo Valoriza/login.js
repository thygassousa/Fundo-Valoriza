// Verificar se o email está cadastrado no Local Storage
function fazerLogin() {
  const email = document.getElementById('email').value;
  const senha = document.getElementById('senha').value;

  // Obter os usuários do armazenamento local
  const usuariosCadastrados = Object.values(localStorage).map(user => JSON.parse(user));

  // Procurar o usuário pelo email
  const usuario = usuariosCadastrados.find(user => user.email === email);

  if (usuario) {
      // Verificar se a senha está correta
      if (usuario.senha === senha) {
          // Login bem-sucedido
          alert('Login bem-sucedido!');
          // Armazenar o estado do login no localStorage
          localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
          // Redirecionar para a página principal
          window.location.href = 'inde.html';
      } else {
          // Senha incorreta
          alert('Senha incorreta. Por favor, tente novamente.');
      }
  } else {
      // Email não cadastrado
      alert('Este email não está cadastrado. Por favor, faça o cadastro antes de fazer o login.');
  }
}

// Função para verificar o login ao carregar a página
function verificarLogin() {
    const usuarioLogado = localStorage.getItem('usuarioLogado');

    if (usuarioLogado) {
        // Se o usuário estiver logado, mostrar o ícone de perfil e o botão de logout
        document.getElementById('profileIcon').style.display = 'inline-block';
        document.getElementById('logoutIcon').style.display = 'inline-block';
        // Esconder os botões de login e cadastro
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('signupBtn').style.display = 'none';
    } else {
        // Se o usuário não estiver logado, mostrar os botões de login e cadastro
        document.getElementById('profileIcon').style.display = 'none';
        document.getElementById('logoutIcon').style.display = 'none';
        // Mostrar o ícone de perfil e o botão de logout
        document.getElementById('loginBtn').style.display = 'inline-block';
        document.getElementById('signupBtn').style.display = 'inline-block';
    }
}

// Chamar a função de verificação de login ao carregar a página
window.onload = function() {
    verificarLogin();
};
