package project.areas.questionnaires.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import project.areas.authors.entities.Author;
import project.areas.questionnaires.entities.BiographyQuestion;

import java.util.List;

public interface BiographyQuestionRepository extends JpaRepository<BiographyQuestion,Integer> {
    List<BiographyQuestion> findAllByAuthor(final Author author);
}
