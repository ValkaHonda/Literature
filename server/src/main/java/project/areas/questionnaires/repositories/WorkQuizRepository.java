package project.areas.questionnaires.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.authors.entities.Work;
import project.areas.questionnaires.entities.WorkQuiz;

import java.util.List;

public interface WorkQuizRepository extends JpaRepository<WorkQuiz,Integer> {
    List<WorkQuiz> findAllByWork(final Work work);
}
