package cadastroin.example.cadastro.service;

import cadastroin.example.cadastro.model.Tarefa;
import cadastroin.example.cadastro.model.Evento;
import cadastroin.example.cadastro.repository.TarefaRepository;
import cadastroin.example.cadastro.repository.EventoRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TarefaService {

    private final TarefaRepository tarefaRepository;
    private final EventoRepository eventoRepository;

    public TarefaService(TarefaRepository tarefaRepository, EventoRepository eventoRepository) {
        this.tarefaRepository = tarefaRepository;
        this.eventoRepository = eventoRepository;
    }

    public List<Tarefa> listarTodas() {
        return tarefaRepository.findAll();
    }

    public Tarefa salvar(Tarefa tarefa) {
        // Verificar se o evento existe
        if (tarefa.getEvento() != null && tarefa.getEvento().getId() != null) {
            Evento evento = eventoRepository.findById(tarefa.getEvento().getId())
                    .orElseThrow(() -> new RuntimeException("Evento não encontrado"));
            tarefa.setEvento(evento);
        }
        return tarefaRepository.save(tarefa);
    }

    public Tarefa buscarPorId(Long id) {
        return tarefaRepository.findById(id).orElse(null);
    }

    public void deletar(Long id) {
        tarefaRepository.deleteById(id);
    }

    public Tarefa alternarConclusao(Long id) {
        Tarefa tarefa = buscarPorId(id);
        if (tarefa != null) {
            tarefa.setConcluida(!tarefa.isConcluida());
            return tarefaRepository.save(tarefa);
        }
        return null;
    }
}