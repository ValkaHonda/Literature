package project.areas.questionnaires.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.questionnaires.dto.ShowAuthorQuizDTO;
import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.repositories.AuthorQuizRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Service
public class AuthorQuizServiceImpl implements AuthorQuizService{
    private final AuthorQuizRepository authorQuizRepository;

    @Autowired
    public AuthorQuizServiceImpl(final AuthorQuizRepository authorQuizRepository) {
        this.authorQuizRepository = authorQuizRepository;
    }

    @Override
    public List<ShowAuthorQuizDTO> allAuthorQuizzesByBiographyQuestions(List<BiographyQuestion> biographyQuestions) {
        Set<AuthorQuiz> authorQuizzes = new HashSet<>();
        for (int i = 0; i < biographyQuestions.size(); i++) {
            Integer currentBiographyId = biographyQuestions.get(i).getId();
            authorQuizzes.add(this.authorQuizRepository.findByBiographyQuestions_id(currentBiographyId));
        }
        List<AuthorQuiz> authorQuizEntities = new ArrayList<>(authorQuizzes);


        return this.entityToDTOList(authorQuizEntities);
    }

    @Override
    public AuthorQuiz getAuthorQuizByID(Integer id) {
        return this.authorQuizRepository.findOne(id);
    }

    private ShowAuthorQuizDTO entityToDTO(final AuthorQuiz authorQuizEntity)
    {return new ShowAuthorQuizDTO(authorQuizEntity.getId());}

    private List<ShowAuthorQuizDTO> entityToDTOList(final List<AuthorQuiz> authorQuizEntities)
    {
        List<ShowAuthorQuizDTO> showAuthorQuizDTOS = new ArrayList<>();
        for (int i = 0; i < authorQuizEntities.size(); i++) {
            showAuthorQuizDTOS.add(entityToDTO(authorQuizEntities.get(i)));
        }
        return showAuthorQuizDTOS;
    }
}
