package project.areas.questionnaires.services;


import project.areas.questionnaires.dto.ShowAuthorQuizDTO;
import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.WorkQuestion;

import java.util.List;

public interface AuthorQuizService {
    List<ShowAuthorQuizDTO> allAuthorQuizzesByBiographyQuestions
            (final List<BiographyQuestion> biographyQuestions);
    AuthorQuiz getAuthorQuizByID(final Integer id);
    List<BiographyQuestion> findAllBiographyQuestionsByQuiz(final AuthorQuiz authorQuiz);
    List<WorkQuestion> findAllWorkQuistionsByQuiz(final AuthorQuiz authorQuiz);
}
