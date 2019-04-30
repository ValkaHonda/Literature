package project.areas.questionnaires.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.questionnaires.dto.ShowBiographyQuizDTO;
import project.areas.questionnaires.entities.BiographyQuiz;
import project.areas.questionnaires.repositories.BiographyQuizRepository;

import java.util.ArrayList;
import java.util.List;
@Service
public class BiographyQuizServiceImpl implements BiographyQuizService
{
    private final BiographyQuizRepository biographyQuizRepository;
    @Autowired
    public BiographyQuizServiceImpl(final BiographyQuizRepository biographyQuizRepository) {
        this.biographyQuizRepository = biographyQuizRepository;
    }

    @Override
    public List<ShowBiographyQuizDTO> allBiographyQuizzes() {
        List<BiographyQuiz> biographyQuizEntities = this.biographyQuizRepository.findAll();
        return entityToDTOList(biographyQuizEntities);
    }

    @Override
    public BiographyQuiz getBiographyQuizByID(final Integer biographyQuizID) {
        return this.biographyQuizRepository.findOne(biographyQuizID);
    }


    private ShowBiographyQuizDTO entityToDTO(final BiographyQuiz biographyQuizEntity){
        return new ShowBiographyQuizDTO(biographyQuizEntity.getId());
    }
    private List<ShowBiographyQuizDTO> entityToDTOList(final List<BiographyQuiz> biographyQuizEntities){
        List<ShowBiographyQuizDTO> showBiographyQuizDTOS = new ArrayList<>();
        for (int i = 0; i < biographyQuizEntities.size(); i++) {
            showBiographyQuizDTOS.add(entityToDTO(biographyQuizEntities.get(i)));
        }
        return showBiographyQuizDTOS;
    }






}
