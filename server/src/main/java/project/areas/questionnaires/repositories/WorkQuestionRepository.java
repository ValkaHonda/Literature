package project.areas.questionnaires.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.authors.entities.Work;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;

import java.util.List;

public interface WorkQuestionRepository extends JpaRepository<WorkQuestion,Integer> {
    List<WorkQuestion> findAllByWork(final Work work);
    List<WorkQuestion> findAllByWorkQuiz(final WorkQuiz workQuiz);
}