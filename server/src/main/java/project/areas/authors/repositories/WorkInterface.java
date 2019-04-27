package project.areas.authors.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.authors.entities.Work;

import java.util.List;

public interface WorkInterface extends JpaRepository<Work,Integer> {
    List<Work> findAllBy();
    Work getWorkById(final Integer id);
}
