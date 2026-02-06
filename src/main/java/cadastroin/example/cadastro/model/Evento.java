package cadastroin.example.cadastro.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import lombok.Data;

import java.time.LocalDate;
@Data
@Entity
public class Evento {
    @Id
    @GeneratedValue
    private Long id;

    private String nome;
    private String local;
    private LocalDate data;
    private String descricao;
}
