package cadastroin.example.cadastro.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;
import cadastroin.example.cadastro.model.Evento;
import cadastroin.example.cadastro.service.EventoService;

@RestController
@RequestMapping("/api/eventos")
@CrossOrigin(origins = "*")
public class EventoController {

    private final EventoService service;

    public EventoController(EventoService service) {
        this.service = service;
    }

    @GetMapping
    public List<Evento> listar() {
        return service.listarTodos();
    }

    @PostMapping
    public Evento salvar(@RequestBody Evento evento) {
        return service.salvar(evento);
    }

    @DeleteMapping("/{id}")
    public void deletar(@PathVariable Long id) {
        service.deletar(id);
    }
}
