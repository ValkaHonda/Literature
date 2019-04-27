package project.areas.authors.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.authors.entities.Author;
import project.areas.authors.entities.Motif;

import java.util.List;

public interface MotifRepository extends JpaRepository<Motif,Integer> {
    List<Motif> findAllBy();
    Motif getMotifById(final Integer id);
    List<Motif> findAllByAuthor(final Author author);

}
