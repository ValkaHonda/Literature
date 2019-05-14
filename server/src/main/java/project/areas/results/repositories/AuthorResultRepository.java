package project.areas.results.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.results.entities.AuthorQuizResult;

public interface AuthorResultRepository  extends JpaRepository<AuthorQuizResult,Integer> {
}
