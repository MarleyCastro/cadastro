package cadastroin.example.cadastro.controller;

import cadastroin.example.cadastro.model.Tarefa;
import cadastroin.example.cadastro.service.TarefaService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tarefas")
@CrossOrigin(origins = "*")
public class TarefaController {

    private final TarefaService service;

    public TarefaController(TarefaService service) {
        this.service = service;
    }

    @GetMapping
    public List<Tarefa> listar() {
        return service.listarTodas();
    }

    @PostMapping
    public ResponseEntity<Tarefa> salvar(@RequestBody Tarefa tarefa) {
        try {
            Tarefa novaTarefa = service.salvar(tarefa);
            return ResponseEntity.status(HttpStatus.CREATED).body(novaTarefa);
        } catch (RuntimeException e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Tarefa> buscarPorId(@PathVariable Long id) {
        Tarefa tarefa = service.buscarPorId(id);
        if (tarefa != null) {
            return ResponseEntity.ok(tarefa);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/{id}/alternar")
    public ResponseEntity<Tarefa> alternarConclusao(@PathVariable Long id) {
        Tarefa tarefa = service.alternarConclusao(id);
        if (tarefa != null) {
            return ResponseEntity.ok(tarefa);
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletar(@PathVariable Long id) {
        service.deletar(id);
        return ResponseEntity.noContent().build();
    }
}