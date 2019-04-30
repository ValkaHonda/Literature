package project.areas.questionnaires.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.authors.entities.Author;
import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.BiographyQuiz;

import java.util.List;

public interface BiographyQuestionRepository extends JpaRepository<BiographyQuestion,Integer> {
    List<BiographyQuestion> findAllByBiographyQuiz(final BiographyQuiz biographyQuiz);
    List<BiographyQuestion> findAllByBiographyQuizOrderByIdAsc(final BiographyQuiz biographyQuiz);
    List<BiographyQuestion> findAllByAuthor(final Author author);
    List<BiographyQuestion> findAllByAuthorQuiz(final AuthorQuiz authorQuiz);
}
