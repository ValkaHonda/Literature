package project.areas.results.services;

import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.BiographyQuiz;
import project.areas.results.dto.BiographyQuizAnswerResultDTO;
import project.areas.users.entities.User;

import java.util.List;

public interface BiographyResultService {
    Double saveResult(final BiographyQuizAnswerResultDTO answerQuestionsDTO,
                    final List<BiographyQuestion> questions,
                    final User user,
                    final BiographyQuiz quiz
    );
}
