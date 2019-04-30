package project.areas.questionnaires.services;

import project.areas.questionnaires.dto.ShowBiographyQuestionDTO;
import project.areas.questionnaires.entities.BiographyQuiz;

import java.util.List;

public interface BiographyQuestionService
{
    List<ShowBiographyQuestionDTO> getQuestionsByBiographyQuiz(final BiographyQuiz biographyQuiz);
}
