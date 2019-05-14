package project.areas.results.services;

import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;
import project.areas.results.dto.CreateWorkResultDTO;
import project.areas.users.entities.User;

import java.util.List;

public interface WorkResultService {
    Double saveResult(
            final CreateWorkResultDTO answersDTO,
            final List<WorkQuestion> workQuestions,
            final User user,
            final WorkQuiz workQuiz
            );
}
