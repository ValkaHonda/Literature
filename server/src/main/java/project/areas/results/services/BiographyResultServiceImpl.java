package project.areas.results.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.BiographyQuiz;
import project.areas.results.dto.BiographyQuizAnswerResultDTO;
import project.areas.results.entities.BiographyQuizResult;
import project.areas.results.repositories.BiographyQuizResultRepository;
import project.areas.users.entities.User;

import java.util.List;

@Service
public class BiographyResultServiceImpl implements BiographyResultService{
    private BiographyQuizResultRepository biographyQuizResultRepository;
    @Autowired
    public BiographyResultServiceImpl(final BiographyQuizResultRepository biographyQuizResultRepository) {

        this.biographyQuizResultRepository = biographyQuizResultRepository;
    }



    @Override
    public Double saveResult(final BiographyQuizAnswerResultDTO answerQuestionsDTO,
                           final List<BiographyQuestion> questions,
                            final User user,
                           final BiographyQuiz quiz
                           ) {
        double counter = 0;
        List<String> answerQuestions = answerQuestionsDTO.getAnswers();
        for (int i = 0; i < Math.min(answerQuestions.size(),questions.size()); i++) {

            String entityAnwer = questions.get(i).getRightAnswer();
            String dtoAnwer = answerQuestions.get(i);
            System.out.println(entityAnwer + " <---> " + dtoAnwer);
            if(entityAnwer.equals(dtoAnwer)){
                counter++;
            }
        }
        Double result = counter/Math.min(answerQuestions.size(),questions.size());
        result *= 100;
        BiographyQuizResult newResult = new BiographyQuizResult(result, user, quiz);
        this.biographyQuizResultRepository.saveAndFlush(newResult);
        return result;
    }
}
