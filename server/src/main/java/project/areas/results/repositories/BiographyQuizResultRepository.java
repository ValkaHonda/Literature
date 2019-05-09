package project.areas.results.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.results.entities.BiographyQuizResult;


public interface BiographyQuizResultRepository extends JpaRepository<BiographyQuizResult,Integer> {
}
