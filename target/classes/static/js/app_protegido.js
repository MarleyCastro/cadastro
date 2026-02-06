const API = "http://localhost:8080/api/eventos";

// Verificar se o usuário está logado ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    verificarAutenticacao();
    listarEventos();
});

// Função para verificar autenticação
function verificarAutenticacao() {
    const usuario = localStorage.getItem('usuario');
    
    if (!usuario) {
        // Se não estiver logado, redirecionar para login
        window.location.href = '/login.html';
        return;
    }
    
    // Mostrar nome do usuário
    const dadosUsuario = JSON.parse(usuario);
    const nomeUsuario = document.getElementById('nomeUsuario');
    if (nomeUsuario) {
        nomeUsuario.textContent = `👤 ${dadosUsuario.nome}`;
    }
}

// Função para sair (logout)
function sair() {
    if (confirm('Deseja realmente sair?')) {
        localStorage.removeItem('usuario');
        localStorage.removeItem('usuarioNome');
        localStorage.removeItem('usuarioEmail');
        window.location.href = '/login.html';
    }
}

// Função para salvar evento
function salvarEvento() {
    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value;

    // Validação básica
    if (!nome || !data || !local) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const evento = {
        nome: nome,
        data: data,
        local: local
    };

    fetch(API, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(evento)
    })
    .then(response => {
        if (response.ok) {
            alert("Evento cadastrado com sucesso!");
            limparFormulario();
            listarEventos();
        } else {
            alert("Erro ao cadastrar evento!");
        }
    })
    .catch(error => {
        console.error("Erro:", error);
        alert("Erro ao conectar com o servidor!");
    });
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("local").value = "";
}

// Função para listar eventos
function listarEventos() {
    fetch(API)
        .then(res => {
            if (!res.ok) {
                throw new Error("Erro ao buscar eventos");
            }
            return res.json();
        })
        .then(dados => {
            const lista = document.getElementById("lista");
            lista.innerHTML = "";
            
            if (dados.length === 0) {
                lista.innerHTML = "<li style='text-align:center; color: white; background: rgba(255,255,255,0.2);'>Nenhum evento cadastrado ainda.</li>";
                return;
            }
            
            dados.forEach(e => {
                const dataFormatada = new Date(e.data + 'T00:00:00').toLocaleDateString('pt-BR');
                lista.innerHTML += `
                    <li>
                        <strong>${e.nome}</strong><br>
                        📅 ${dataFormatada} | 📍 ${e.local}
                    </li>
                `;
            });
        })
        .catch(error => {
            console.error("Erro ao listar eventos:", error);
            const lista = document.getElementById("lista");
            lista.innerHTML = "<li style='background: #ff6b6b; color: white;'>⚠️ Erro ao carregar eventos. Verifique se o servidor está rodando.</li>";
        });
}
