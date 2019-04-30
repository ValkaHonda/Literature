package project.areas.questionnaires.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.authors.entities.Work;
import project.areas.questionnaires.dto.ShowWorkQuestionDTO;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;
import project.areas.questionnaires.repositories.WorkQuestionRepository;
import java.util.ArrayList;
import java.util.List;

@Service
public class WorkQuestionServiceImpl implements WorkQuestionService{
    private final WorkQuestionRepository workQuestionRepository;

    @Autowired
    public WorkQuestionServiceImpl(final WorkQuestionRepository workQuestionRepository) {
        this.workQuestionRepository = workQuestionRepository;
    }

    @Override
    public List<ShowWorkQuestionDTO> questionsByWorkQuiz(final WorkQuiz workQuiz) {
        List<WorkQuestion> workQuestionsEntities;
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        System.out.println(workQuiz.getId());
        if (workQuiz == null){
            workQuestionsEntities = null;
        } else {
            workQuestionsEntities = this.workQuestionRepository.findAllByWorkQuiz(workQuiz);
        }
        return entityToDTOList(workQuestionsEntities);
    }

    @Override
    public List<WorkQuestion> workQuestionsByWork(Work work) {
        return this.workQuestionRepository.findAllByWork(work);
    }

    private ShowWorkQuestionDTO entityToDTO(final WorkQuestion workQuestion){
        return new ShowWorkQuestionDTO(workQuestion.getId(),workQuestion.getQuestion(),
                workQuestion.getRightAnswer(),workQuestion.getWrongAnswer1(),workQuestion.getWrongAnswer2(),
                workQuestion.getWrongAnswer3());
    }
    private List<ShowWorkQuestionDTO> entityToDTOList(final List<WorkQuestion> workQuestionEntities){
        List<ShowWorkQuestionDTO> showWorkQuestionDTOS = new ArrayList<>();
        for (WorkQuestion workQuestionEntity : workQuestionEntities) {
            showWorkQuestionDTOS.add(entityToDTO(workQuestionEntity));
        }
        return showWorkQuestionDTOS;
    }
}
