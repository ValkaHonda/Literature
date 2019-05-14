package project.areas.results.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;
import project.areas.results.dto.CreateWorkResultDTO;
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
        return null;
    }
}
