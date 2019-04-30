package project.areas.questionnaires.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.questionnaires.entities.AuthorQuiz;

import java.util.List;

public interface AuthorQuizRepository extends JpaRepository<AuthorQuiz,Integer> {
    AuthorQuiz findByBiographyQuestions_id(final Integer biographyId);
}
