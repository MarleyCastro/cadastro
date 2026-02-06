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
        window.location.href = '/login.html';
        return;
    }

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

// Função para salvar evento COM DEBUG
function salvarEvento() {
    console.log("=== INICIANDO SALVAMENTO ===");

    const nome = document.getElementById("nome").value;
    const data = document.getElementById("data").value;
    const local = document.getElementById("local").value;

    console.log("Valores capturados:");
    console.log("- Nome:", nome);
    console.log("- Data:", data);
    console.log("- Local:", local);

    // Validação
    if (!nome || !data || !local) {
        console.error("ERRO: Campos vazios!");
        alert("Por favor, preencha todos os campos!");
        return;
    }

    const evento = {
        nome: nome,
        data: data,
        local: local
    };

    console.log("Objeto evento criado:", JSON.stringify(evento));
    console.log("Enviando para:", API);

    fetch(API, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(evento)
    })
    .then(response => {
        console.log("Status da resposta:", response.status);
        console.log("Response OK?", response.ok);

        // Capturar o corpo da resposta mesmo em caso de erro
        return response.text().then(text => {
            console.log("Corpo da resposta:", text);

            if (response.ok) {
                alert("Evento cadastrado com sucesso!");
                limparFormulario();
                listarEventos();
            } else {
                console.error("ERRO NO BACKEND:", text);
                alert(`Erro ao cadastrar evento! Status: ${response.status}\nDetalhes: ${text}`);
            }
        });
    })
    .catch(error => {
        console.error("ERRO DE CONEXÃO:", error);
        alert("Erro ao conectar com o servidor!\nDetalhes: " + error.message);
    });
}

// Função para remover evento
function removerEvento(id) {
    if (confirm('Deseja realmente excluir este evento?')) {
        fetch(`${API}/${id}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                alert('Evento removido com sucesso!');
                listarEventos();
            } else {
                alert('Erro ao remover evento!');
            }
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Erro ao conectar com o servidor!');
        });
    }
}

// Função para limpar o formulário
function limparFormulario() {
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("local").value = "";
}

// Função para listar eventos (COM ID VISÍVEL)
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
                        <div style="display: flex; justify-content: space-between; align-items: center; gap: 15px;">
                            <!-- ID DO EVENTO À ESQUERDA -->
                            <div style="background: #667eea; color: white; padding: 10px 15px; border-radius: 8px; font-weight: bold; min-width: 50px; text-align: center;">
                                #${e.id}
                            </div>

                            <!-- INFORMAÇÕES DO EVENTO -->
                            <div style="flex: 1;">
                                <strong>${e.nome}</strong><br>
                                📅 ${dataFormatada} | 📍 ${e.local}
                            </div>

                            <!-- BOTÃO EXCLUIR À DIREITA -->
                            <button onclick="removerEvento(${e.id})"
                                    style="background: #ff4757; padding: 10px 15px; width: auto; min-width: 100px; border-radius: 6px; font-size: 14px;">
                                🗑️ Excluir
                            </button>
                        </div>
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