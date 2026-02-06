package cadastroin.example.cadastro.repository;

import cadastroin.example.cadastro.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends JpaRepository<Usuario, Long> {
    
    // Verificar se existe usuário com o email
    boolean existsByEmail(String email);
    
    // Buscar usuário por email e senha (para login)
    Usuario findByEmailAndSenha(String email, String senha);
    
    // Buscar usuário por email
    Usuario findByEmail(String email);
}
