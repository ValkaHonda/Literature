package project.areas.questionnaires.services;


import project.areas.questionnaires.dto.ShowAuthorQuizDTO;
import project.areas.questionnaires.entities.BiographyQuestion;

import java.util.List;

public interface AuthorQuizService {
    List<ShowAuthorQuizDTO> allAuthorQuizzesByBiographyQuestions
            (final List<BiographyQuestion> biographyQuestions);
}
