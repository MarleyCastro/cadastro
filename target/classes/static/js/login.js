const API_URL = "http://localhost:8080/api";

// Função para mostrar o formulário de cadastro
function mostrarCadastro() {
    document.querySelector('.login-box:first-child').style.display = 'none';
    document.getElementById('cadastroBox').style.display = 'block';
}

// Função para mostrar o formulário de login
function mostrarLogin() {
    document.querySelector('.login-box:first-child').style.display = 'block';
    document.getElementById('cadastroBox').style.display = 'none';
}

// Função para realizar o login
function realizarLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const mensagem = document.getElementById('mensagem');
    const btnLogin = event.target.querySelector('button');
    
    // Adiciona loading no botão
    btnLogin.classList.add('loading');
    btnLogin.textContent = 'Entrando';
    
    // Criar objeto de login
    const loginData = {
        email: email,
        senha: senha
    };
    
    // Fazer requisição de login
    fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else if (response.status === 401) {
            throw new Error('Email ou senha incorretos!');
        } else {
            throw new Error('Erro ao fazer login. Tente novamente.');
        }
    })
    .then(data => {
        // Salvar dados do usuário no localStorage
        localStorage.setItem('usuario', JSON.stringify(data));
        localStorage.setItem('usuarioNome', data.nome);
        localStorage.setItem('usuarioEmail', data.email);
        
        // Mostrar mensagem de sucesso
        mostrarMensagem(mensagem, 'Sucesso! Redirecionando...', 'sucesso');
        
        // Redirecionar para a página principal
        setTimeout(() => {
            window.location.href = '/index.html';
        }, 1500);
    })
    .catch(error => {
        console.error('Erro:', error);
        mostrarMensagem(mensagem, error.message, 'erro');
        
        // Remover loading do botão
        btnLogin.classList.remove('loading');
        btnLogin.textContent = 'Entrar';
    });
}

// Função para realizar o cadastro
function realizarCadastro(event) {
    event.preventDefault();
    
    const nome = document.getElementById('cadNome').value;
    const email = document.getElementById('cadEmail').value;
    const senha = document.getElementById('cadSenha').value;
    const mensagem = document.getElementById('mensagemCadastro');
    const btnCadastro = event.target.querySelector('button');
    
    // Validação básica
    if (senha.length < 6) {
        mostrarMensagem(mensagem, 'A senha deve ter pelo menos 6 caracteres!', 'erro');
        return;
    }
    
    // Adiciona loading no botão
    btnCadastro.classList.add('loading');
    btnCadastro.textContent = 'Cadastrando';
    
    // Criar objeto de usuário
    const usuario = {
        nome: nome,
        email: email,
        senha: senha,
        role: 'USER'
    };
    
    // Fazer requisição de cadastro
    fetch(`${API_URL}/usuarios`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuario)
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else if (response.status === 409) {
            throw new Error('Este email já está cadastrado!');
        } else {
            throw new Error('Erro ao criar conta. Tente novamente.');
        }
    })
    .then(data => {
        // Mostrar mensagem de sucesso
        mostrarMensagem(mensagem, 'Conta criada com sucesso! Faça login.', 'sucesso');
        
        // Limpar formulário
        document.getElementById('cadastroForm').reset();
        
        // Voltar para tela de login após 2 segundos
        setTimeout(() => {
            mostrarLogin();
        }, 2000);
    })
    .catch(error => {
        console.error('Erro:', error);
        mostrarMensagem(mensagem, error.message, 'erro');
    })
    .finally(() => {
        // Remover loading do botão
        btnCadastro.classList.remove('loading');
        btnCadastro.textContent = 'Cadastrar';
    });
}

// Função auxiliar para mostrar mensagens
function mostrarMensagem(elemento, texto, tipo) {
    elemento.textContent = texto;
    elemento.className = `mensagem ${tipo}`;
    elemento.style.display = 'block';
}

// Verificar se o usuário já está logado
document.addEventListener('DOMContentLoaded', function() {
    const usuario = localStorage.getItem('usuario');
    if (usuario) {
        // Se já estiver logado, redirecionar para a página principal
        window.location.href = '/index.html';
    }
});
