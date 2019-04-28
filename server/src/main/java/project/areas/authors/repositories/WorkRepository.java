package project.areas.authors.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.authors.entities.Author;
import project.areas.authors.entities.Work;

import java.util.List;

public interface WorkRepository extends JpaRepository<Work,Integer> {
    List<Work> findAllBy();
    Work getWorkById(final Integer id);
    Work findByAuthor(final Author author);
    List<Work> findAllByAuthor(final Author author);
}
