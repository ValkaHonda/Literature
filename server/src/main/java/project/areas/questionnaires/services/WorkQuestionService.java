package project.areas.questionnaires.services;


import project.areas.questionnaires.dto.ShowWorkQuestionDTO;
import project.areas.questionnaires.entities.WorkQuiz;

import java.util.List;

public interface WorkQuestionService {
    List<ShowWorkQuestionDTO> questionsByWorkQuiz(final WorkQuiz workQuiz);
}
