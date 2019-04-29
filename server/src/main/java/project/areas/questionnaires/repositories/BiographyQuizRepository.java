package project.areas.questionnaires.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.questionnaires.entities.BiographyQuiz;

import java.util.List;

public interface BiographyQuizRepository extends JpaRepository<BiographyQuiz,Integer> {
    //List<BiographyQuiz> getAllByBiographyQuestions
    List<BiographyQuiz> findByBiographyQuestions_id(final Integer biographyQuestionId);
}
