package project.areas.questionnaires.services;

import project.areas.authors.entities.Work;
import project.areas.questionnaires.dto.ShowWorkQuizDTO;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;

import java.util.List;

public interface WorkQuizService {
    WorkQuiz getWorkQuizEntityById(final Integer workQuizId);
    List<ShowWorkQuizDTO> getWorkQuizzesByQuestions(final List<WorkQuestion> workQuestions);
}
