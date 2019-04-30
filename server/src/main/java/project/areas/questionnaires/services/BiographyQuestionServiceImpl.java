package project.areas.questionnaires.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.authors.entities.Author;
import project.areas.questionnaires.dto.ShowBiographyQuestionDTO;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.BiographyQuiz;
import project.areas.questionnaires.repositories.BiographyQuestionRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class BiographyQuestionServiceImpl implements BiographyQuestionService
{
private final BiographyQuestionRepository biographyQuestionRepository;
    @Autowired
    public BiographyQuestionServiceImpl(final BiographyQuestionRepository biographyQuestionRepository) {
        this.biographyQuestionRepository = biographyQuestionRepository;
    }

    @Override
    public List<ShowBiographyQuestionDTO> getQuestionsByBiographyQuiz(BiographyQuiz biographyQuiz) {
        List<BiographyQuestion> biographyQuestionEntities = this.biographyQuestionRepository
                .findAllByBiographyQuizOrderByIdAsc(biographyQuiz);
        return entityToDTOList(biographyQuestionEntities);

    }

    @Override
    public List<BiographyQuestion> getBiographyQuestionsByAuthor(Author author) {
        return this.biographyQuestionRepository.findAllByAuthor(author);
    }


    private ShowBiographyQuestionDTO entityToDTO(final BiographyQuestion biographyQuestion){
        return new ShowBiographyQuestionDTO(biographyQuestion.getId(), biographyQuestion.getQuestion(),
                biographyQuestion.getRightAnswer(), biographyQuestion.getWrongAnswer1(), biographyQuestion.getWrongAnswer2(),
                biographyQuestion.getWrongAnswer3());
    }
    private List<ShowBiographyQuestionDTO> entityToDTOList(final List<BiographyQuestion> biographyQuestionEntities){
        List<ShowBiographyQuestionDTO> showBiographyQuestionDTOS = new ArrayList<>();
        for (BiographyQuestion workQuestionEntity : biographyQuestionEntities) {
            showBiographyQuestionDTOS.add(entityToDTO(workQuestionEntity));
        }
        return showBiographyQuestionDTOS;
    }




}
