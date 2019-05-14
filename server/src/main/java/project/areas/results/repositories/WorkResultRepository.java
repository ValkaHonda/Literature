package project.areas.results.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.results.entities.WorkQuizResult;

public interface WorkResultRepository  extends JpaRepository<WorkQuizResult,Integer> {
}
