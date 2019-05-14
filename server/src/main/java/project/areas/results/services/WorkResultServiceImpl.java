package project.areas.results.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;
import project.areas.results.dto.CreateWorkResultDTO;
import project.areas.results.entities.WorkQuizResult;
import project.areas.results.repositories.WorkResultRepository;
import project.areas.users.entities.User;

import java.util.List;

@Service
public class WorkResultServiceImpl implements WorkResultService{
    private final WorkResultRepository workResultRepository;

    @Autowired
    public WorkResultServiceImpl(final WorkResultRepository workResultRepository) {
        this.workResultRepository = workResultRepository;
    }

    @Override
    public Double saveResult(CreateWorkResultDTO answersDTO, List<WorkQuestion> workQuestions, User user, WorkQuiz workQuiz) {

        double counter = 0;
        List<String> answerQuestions = answersDTO.getAnswers();
        for (int i = 0; i < Math.min(answerQuestions.size(),workQuestions.size()); i++) {
            if(workQuestions.get(i).getRightAnswer().equals(answerQuestions.get(i))){
                counter++;
            }
        }
        Double result = counter/Math.min(answerQuestions.size(),workQuestions.size());
        result *= 100;
        WorkQuizResult newResult = new WorkQuizResult(result,user,workQuiz);
        this.workResultRepository.saveAndFlush(newResult);
        return result;

    }
}
