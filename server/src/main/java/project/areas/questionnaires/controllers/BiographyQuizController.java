package project.areas.questionnaires.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.questionnaires.dto.ShowBiographyQuestionDTO;
import project.areas.questionnaires.dto.ShowBiographyQuizDTO;
import project.areas.questionnaires.entities.BiographyQuiz;
import project.areas.questionnaires.services.BiographyQuestionService;
import project.areas.questionnaires.services.BiographyQuizService;

import java.util.List;

@RestController
@RequestMapping("/author")
public class BiographyQuizController {
    private final BiographyQuizService biographyQuizService;
    private final BiographyQuestionService biographyQuestionService;
    @Autowired
    public BiographyQuizController(final BiographyQuizService biographyQuizService,
                                   final BiographyQuestionService biographyQuestionService) {
        this.biographyQuizService = biographyQuizService;
        this.biographyQuestionService = biographyQuestionService;
    }

    @GetMapping("/biography-quiz")
    public List<ShowBiographyQuizDTO> allBiographyQuiz()
    {return this.biographyQuizService.allBiographyQuizzes();}

    @GetMapping("/biography-quiz/{quizId}/question")
    public List<ShowBiographyQuestionDTO> getQuizQuestions(@PathVariable("quizId") final Integer biographyQuizId){
        BiographyQuiz biographyQuiz = this.biographyQuizService.getBiographyQuizByID(biographyQuizId);
        return this.biographyQuestionService.getQuestionsByBiographyQuiz(biographyQuiz);
    }
}
