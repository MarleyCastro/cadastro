<div align="center">

# 🎉 Sistema de Gestão de Eventos


[![Java](https://img.shields.io/badge/Java-17-orange?style=for-the-badge&logo=java)](https://www.oracle.com/java/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen?style=for-the-badge&logo=springboot)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?style=for-the-badge&logo=mysql)](https://www.mysql.com/)
[![License](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

[![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-brightgreen?style=for-the-badge)]()
[![Version](https://img.shields.io/badge/Version-1.0.0-blue?style=for-the-badge)]()

</div>

---

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Status](#-status-do-projeto)
- [Funcionalidades](#-funcionalidades)
- [Demonstração](#-demonstração)
- [Como Executar](#-como-executar-o-projeto)
- [Tecnologias](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [API Endpoints](#-api-endpoints)
- [Contribuidores](#-contribuidores)
- [Desenvolvedor](#-desenvolvedor)
- [Licença](#-licença)

---

## 📖 Sobre o Projeto

O **Sistema de Gestão de Eventos** é uma aplicação web full-stack desenvolvida para facilitar o cadastro, organização e acompanhamento de eventos. Com uma interface intuitiva e moderna, permite que usuários gerenciem seus eventos de forma eficiente e segura.

### 🎯 Objetivo

Proporcionar uma ferramenta completa para:
- Organizar eventos pessoais e profissionais
- Gerenciar tarefas relacionadas a cada evento
- Controlar acesso através de autenticação de usuários
- Oferecer uma experiência responsiva em qualquer dispositivo

---

## 🚀 Status do Projeto

```
🟢 Em Desenvolvimento Ativo
```

### Versão Atual: 1.0.0

**Último Update:** Fevereiro 2026

### Roadmap

- [x] Sistema de autenticação (Login/Cadastro)
- [x] CRUD de eventos
- [x] Interface responsiva
- [x] Integração com banco de dados MySQL
- [ ] Sistema de notificações
- [ ] Upload de imagens para eventos
- [ ] Exportação de relatórios (PDF)
- [ ] Integração com calendário
- [ ] Sistema de convites
- [ ] Dashboard com estatísticas

---

## ⚡ Funcionalidades

### 🔐 Autenticação e Segurança
- ✅ Cadastro de novos usuários
- ✅ Login com email e senha
- ✅ Proteção de rotas (apenas usuários autenticados)
- ✅ Logout com confirmação
- ✅ Sessão persistente (localStorage)

### 📅 Gerenciamento de Eventos
- ✅ Criar novos eventos
- ✅ Listar todos os eventos
- ✅ Visualizar detalhes do evento
- ✅ Excluir eventos
- ✅ Identificação única por ID
- ✅ Validação de campos obrigatórios

### 🎨 Interface do Usuário
- ✅ Design moderno com gradientes
- ✅ Responsivo para mobile e desktop
- ✅ Feedback visual para ações
- ✅ Animações suaves
- ✅ Mensagens de erro e sucesso
- ✅ Loading states

### 📊 Recursos Adicionais
- ✅ Formatação automática de datas (PT-BR)
- ✅ Identificação visual por ID
- ✅ Confirmação antes de ações críticas
- ✅ Logs detalhados no console (modo debug)

---

## 🎬 Demonstração

### Tela de Login
<img width="1800" height="769" alt="Captura de tela 2026-02-06 095216" src="https://github.com/user-attachments/assets/9cc491d0-1555-43a0-80f9-a7b5b64d71cf" />


### Cadastro de Evento
<img width="1780" height="748" alt="Captura de tela 2026-02-06 095332" src="https://github.com/user-attachments/assets/889af5bf-cd69-41c3-aa8b-3344dfa313b9" />


### 🎥 Vídeo Demonstrativo
> Em breve: Link para vídeo demonstrativo no YouTube

---

## 🚀 Como Executar o Projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado:

- [Java JDK 17+](https://www.oracle.com/java/technologies/downloads/)
- [Maven 3.8+](https://maven.apache.org/download.cgi)
- [MySQL 8.0+](https://dev.mysql.com/downloads/mysql/)
- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/) (opcional, para ferramentas frontend)

### 📥 Instalação

#### 1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/gestao-eventos.git
cd gestao-eventos
```

#### 2. Configure o Banco de Dados

Crie o banco de dados no MySQL:
```sql
CREATE DATABASE cadastro_eventos;
```

#### 3. Configure o application.properties

Edite `src/main/resources/application.properties`:
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/cadastro_eventos?...
spring.datasource.username=root
spring.datasource.password=SUA_SENHA_AQUI

spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
```

#### 4. Compile e Execute

```bash
# Compilar o projeto
mvn clean install

# Executar a aplicação
mvn spring-boot:run
```

#### 5. Acesse a Aplicação

Abra seu navegador e acesse:
```
http://localhost:8080/login.html
```

### 🧪 Executando os Testes

```bash
# Testes unitários
mvn test

# Testes de integração
mvn verify
```

---

## 🛠️ Tecnologias Utilizadas

### Backend

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![Java](https://img.shields.io/badge/Java-17-orange?logo=java) | 17 | Linguagem de programação |
| ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.2.0-brightgreen?logo=springboot) | 3.2.0 | Framework web |
| ![Spring Data JPA](https://img.shields.io/badge/Spring%20Data%20JPA-3.2.0-green?logo=spring) | 3.2.0 | Persistência de dados |
| ![MySQL](https://img.shields.io/badge/MySQL-8.0-blue?logo=mysql) | 8.0 | Banco de dados |
| ![Maven](https://img.shields.io/badge/Maven-3.8-red?logo=apachemaven) | 3.8 | Gerenciador de dependências |
| ![Lombok](https://img.shields.io/badge/Lombok-1.18-orange) | 1.18 | Redução de boilerplate |

### Frontend

| Tecnologia | Versão | Descrição |
|------------|--------|-----------|
| ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) | 5 | Estrutura |
| ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) | 3 | Estilização |
| ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow?logo=javascript) | ES6 | Interatividade |
| ![Fetch API](https://img.shields.io/badge/Fetch%20API-Native-blue) | Native | Requisições HTTP |

### Ferramentas de Desenvolvimento

- **IDE:** IntelliJ IDEA / Eclipse / VS Code
- **Teste de API:** Postman / Insomnia
- **Controle de Versão:** Git / GitHub
- **Banco de Dados:** MySQL Workbench

---

## 📁 Estrutura do Projeto

```
cadastro-eventos/
│
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── cadastroin/example/cadastro/
│   │   │       ├── CadastroApplication.java
│   │   │       │
│   │   │       ├── controller/
│   │   │       │   ├── AuthController.java
│   │   │       │   ├── EventoController.java
│   │   │       │   └── UsuarioController.java
│   │   │       │
│   │   │       ├── model/
│   │   │       │   ├── Evento.java
│   │   │       │   ├── Tarefa.java
│   │   │       │   └── Usuario.java
│   │   │       │
│   │   │       ├── repository/
│   │   │       │   ├── EventoRepository.java
│   │   │       │   ├── TarefaRepository.java
│   │   │       │   └── UsuarioRepository.java
│   │   │       │
│   │   │       └── service/
│   │   │           ├── EventoService.java
│   │   │           └── UsuarioService.java
│   │   │
│   │   └── resources/
│   │       ├── application.properties
│   │       │
│   │       └── static/
│   │           ├── index.html
│   │           ├── login.html
│   │           │
│   │           ├── css/
│   │           │   ├── style.css
│   │           │   └── login.css
│   │           │
│   │           └── js/
│   │               ├── app.js
│   │               └── login.js
│   │
│   └── test/
│       └── java/
│
├── pom.xml
├── README.md
└── LICENSE
```

---

## 🔌 API Endpoints

### Autenticação

```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "usuario@email.com",
  "senha": "senha123"
}
```

**Resposta (200 OK):**
```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "usuario@email.com",
  "role": "USER"
}
```

---

### Eventos

#### Listar todos os eventos
```http
GET /api/eventos
```

**Resposta (200 OK):**
```json
[
  {
    "id": 1,
    "nome": "Conferência Tech 2026",
    "local": "São Paulo",
    "data": "2026-03-15",
    "descricao": "Evento de tecnologia"
  }
]
```

#### Criar novo evento
```http
POST /api/eventos
Content-Type: application/json

{
  "nome": "Meu Evento",
  "local": "São Paulo",
  "data": "2026-03-15",
  "descricao": "Descrição do evento"
}
```

**Resposta (201 Created):**
```json
{
  "id": 2,
  "nome": "Meu Evento",
  "local": "São Paulo",
  "data": "2026-03-15",
  "descricao": "Descrição do evento"
}
```

#### Deletar evento
```http
DELETE /api/eventos/{id}
```

**Resposta (200 OK)**

---

### Usuários

#### Cadastrar novo usuário
```http
POST /api/usuarios
Content-Type: application/json

{
  "nome": "João Silva",
  "email": "joao@email.com",
  "senha": "senha123",
  "role": "USER"
}
```

**Resposta (201 Created):**
```json
{
  "id": 1,
  "nome": "João Silva",
  "email": "joao@email.com",
  "role": "USER"
}
```

---

## 🎨 Paleta de Cores

```css
/* Primárias */
--primary-color: #667eea;      /* Azul/Roxo */
--secondary-color: #764ba2;    /* Roxo escuro */

/* Ações */
--success-color: #7ED321;      /* Verde */
--danger-color: #ff4757;       /* Vermelho */
--warning-color: #F5A623;      /* Amarelo */

/* Neutras */
--background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
--text-dark: #333333;
--text-light: #ffffff;
```

---

## 🤝 Contribuidores

Agradecimentos especiais a todos que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/162909728?s=96&v=4" width="100px;" alt="Contribuidor 1"/><br>
        <sub>
          <b>Nome do Contribuidor</b>
        </sub>
      </a>
    </td>
</table>

### Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

---
<div align="center">
👨‍💻 Desenvolvedor

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/MarleyCastro">
        <img src="https://avatars.githubusercontent.com/u/162909728?s=96&v=4 width="150px; alt="Foto do Desenvolvedor"/><br>
        <sub>
          <b>Marley Castro</b>
        </sub>
      </a>
      <br/>
      <sub>Desenvolvedor Full Stack</sub>
      <br/>
      <br/>
      <a href="https://github.com/seu-usuario">
        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
      <a href="https://linkedin.com/in/seu-perfil">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white"/>
      </a>
      <a href="mailto:seu-email@email.com">
        <img src="https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white"/>
      </a>
    </td>
  </tr>
</table>


### 📫 Contato

- **Email:** marleynascimento978@gmail.com
- **LinkedIn:** [Marley Castro](https://www.linkedin.com/in/marley-castro/)
- **GitHub:** [@MarleyCastro](https://github.com/MarleyCastro)
- **Portfolio:** [marleycastro.github.io](https://marleycastro.github.io/Portif-lio-Marley1/)
</div>


## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

```
MIT License

Copyright (c) 2026 Seu Nome

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---


<div align="center">

### ⭐ Se este projeto te ajudou, considere dar uma estrela!

**Desenvolvido com ❤️ por [Marley](https://github.com/seu-usuario)**

![Footer](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXJya29mb3d0aWtlZmNtbzg0eWxyY3dsYzd4NG96eDJlMXg3ejRkZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/13hxeOYjoTWtK8/giphy.gif)

</div>
