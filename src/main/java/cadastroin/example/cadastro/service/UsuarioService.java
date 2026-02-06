package cadastroin.example.cadastro.service;

import cadastroin.example.cadastro.model.Usuario;
import cadastroin.example.cadastro.repository.UsuarioRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsuarioService {

    private final UsuarioRepository repository;

    public UsuarioService(UsuarioRepository repository) {
        this.repository = repository;
    }

    public List<Usuario> listarTodos() {
        return repository.findAll();
    }

    public Usuario salvar(Usuario usuario) {
        // Define role padrão se não estiver definido
        if (usuario.getRole() == null || usuario.getRole().isEmpty()) {
            usuario.setRole("USER");
        }
        return repository.save(usuario);
    }

    public Usuario buscarPorId(Long id) {
        return repository.findById(id).orElse(null);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }

    public boolean existePorEmail(String email) {
        return repository.existsByEmail(email);
    }

    public Usuario buscarPorEmailESenha(String email, String senha) {
        return repository.findByEmailAndSenha(email, senha);
    }

    public Usuario buscarPorEmail(String email) {
        return repository.findByEmail(email);
    }
}
