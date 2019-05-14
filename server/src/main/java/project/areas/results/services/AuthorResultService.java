package project.areas.results.services;

import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.results.dto.CreateAuthorResultDTO;
import project.areas.users.entities.User;

import java.util.List;

public interface AuthorResultService {
    Double saveResult(final CreateAuthorResultDTO createAuthorResultDTO,
                      final List<BiographyQuestion> biographyQuestions,
                      final List<WorkQuestion> workQuestions,
                      final User user,
                      final AuthorQuiz authorQuiz);
}
