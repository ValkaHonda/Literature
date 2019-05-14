package project.areas.results.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.results.dto.CreateAuthorResultDTO;
import project.areas.results.entities.AuthorQuizResult;
import project.areas.results.entities.BiographyQuizResult;
import project.areas.results.repositories.AuthorResultRepository;
import project.areas.users.entities.User;

import java.util.List;

@Service
public class AuthorResultServiceImpl implements AuthorResultService{
    private final AuthorResultRepository authorResultRepository;

    @Autowired
    public AuthorResultServiceImpl(final AuthorResultRepository authorResultRepository) {
        this.authorResultRepository = authorResultRepository;
    }

    @Override
    public Double saveResult(CreateAuthorResultDTO createAuthorResultDTO, List<BiographyQuestion> biographyQuestions, List<WorkQuestion> workQuestions, User user, AuthorQuiz authorQuiz) {
        double counter = 0;
        List<String> biographyAnswers = createAuthorResultDTO.getBiographyAnswers();
        List<String> workAnswers = createAuthorResultDTO.getWorkAnswers();

        for (int i = 0; i < Math.min(biographyAnswers.size(),biographyQuestions.size()); i++) {
            if(biographyQuestions.get(i).getRightAnswer().equals(biographyAnswers.get(i))){
                counter++;
            }
        }

        for (int i = 0; i < Math.min(workAnswers.size(),workQuestions.size()); i++) {
            if(workQuestions.get(i).getRightAnswer().equals(workAnswers.get(i))){
                counter++;
            }
        }
        double dtoCount = biographyAnswers.size()+workAnswers.size();
        double entitiesCount = biographyQuestions.size() + workQuestions.size();
        Double result = counter/Math.min(dtoCount,entitiesCount);
        result *= 100;
        AuthorQuizResult authorQuizResult = new AuthorQuizResult(result,user,authorQuiz);
        this.authorResultRepository.saveAndFlush(authorQuizResult);
        return result;
    }
}
