package project.areas.questionnaires.services;

import project.areas.questionnaires.dto.ShowBiographyQuizDTO;
import project.areas.questionnaires.entities.BiographyQuiz;

import java.util.List;

public interface BiographyQuizService
{
    List<ShowBiographyQuizDTO> allBiographyQuizzes();

    BiographyQuiz getBiographyQuizByID(final Integer biographyQuizID);
}
