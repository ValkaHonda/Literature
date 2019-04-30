package project.areas.questionnaires.services;

import project.areas.authors.entities.Author;
import project.areas.questionnaires.dto.ShowBiographyQuestionDTO;
import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.BiographyQuiz;

import java.util.List;

public interface BiographyQuestionService
{
    List<ShowBiographyQuestionDTO> getQuestionsByBiographyQuiz(final BiographyQuiz biographyQuiz);
    List<BiographyQuestion> getBiographyQuestionsByAuthor(final Author author);
    List<ShowBiographyQuestionDTO> getBiographyQuestionsByAuthorQuiz(final AuthorQuiz authorQuiz);
}
