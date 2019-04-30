package project.areas.questionnaires.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.authors.entities.Work;
import project.areas.questionnaires.dto.ShowWorkQuizDTO;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;
import project.areas.questionnaires.repositories.WorkQuizRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class WorkQuizServiceImpl implements WorkQuizService{
    private WorkQuizRepository workQuizRepository;

    @Autowired
    public WorkQuizServiceImpl(final WorkQuizRepository workQuizRepository) {
        this.workQuizRepository = workQuizRepository;
    }

    @Override
    public WorkQuiz getWorkQuizEntityById(final Integer workQuizId) {
        return this.workQuizRepository.findOne(workQuizId);
    }

    @Override
    public List<ShowWorkQuizDTO> getWorkQuizzesByQuestions(List<WorkQuestion> workQuestions) {
        if(workQuestions == null){
            return null;
        }
        List<WorkQuiz> workQuizEntities = this.workQuizRepository
                .findByWorkQuestions_id(workQuestions.get(0).getId());
        return this.entityToDTOList(workQuizEntities);
    }

    @Override
    public List<ShowWorkQuizDTO> all() {
        List<WorkQuiz> workQuizEntities = this.workQuizRepository.findAll();
        return this.entityToDTOList(workQuizEntities);
    }

    private ShowWorkQuizDTO entityToDTO(final WorkQuiz workQuizEntity){
        return new ShowWorkQuizDTO(workQuizEntity.getId());
    }
    private List<ShowWorkQuizDTO> entityToDTOList(final List<WorkQuiz> workQuizEntities){
        List<ShowWorkQuizDTO> showWorkQuizDTOS = new ArrayList<>();
        for (int i = 0; i < workQuizEntities.size(); i++) {
            showWorkQuizDTOS.add(entityToDTO(workQuizEntities.get(i)));
        }
        return showWorkQuizDTOS;
    }
}
