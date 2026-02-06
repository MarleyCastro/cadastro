package cadastroin.example.cadastro.service;

import org.springframework.stereotype.Service;
import java.util.List;
import cadastroin.example.cadastro.model.Evento;
import cadastroin.example.cadastro.repository.EventoRepository;

@Service
public class EventoService {

    private final EventoRepository repository;

    public EventoService(EventoRepository repository) {
        this.repository = repository;
    }

    public List<Evento> listarTodos() {
        return repository.findAll();
    }

    public Evento salvar(Evento evento) {
        return repository.save(evento);
    }

    public void deletar(Long id) {
        repository.deleteById(id);
    }
}
