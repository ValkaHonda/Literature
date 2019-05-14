package project.areas.results.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.BiographyQuiz;
import project.areas.questionnaires.services.BiographyQuestionService;
import project.areas.questionnaires.services.BiographyQuizService;
import project.areas.results.dto.BiographyQuizAnswerResultDTO;
import project.areas.results.services.BiographyResultService;
import project.areas.users.entities.User;
import project.areas.users.services.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/result")
public class BiographyResultController {
    private BiographyQuestionService biographyQuestionService;
    private BiographyQuizService biographyQuizService;
    private BiographyResultService biographyResultService;
    private UserService userService;

    @Autowired
    public BiographyResultController(final BiographyQuestionService biographyQuestionService,
                                     final BiographyQuizService biographyQuizService,
                                     final BiographyResultService biographyResultService,
                                     final UserService userService) {
        this.biographyQuestionService = biographyQuestionService;
        this.biographyQuizService = biographyQuizService;
        this.biographyResultService = biographyResultService;
        this.userService = userService;
    }

    @PostMapping("/biography-quiz/{quizId}")
    public Double uploadBiographyResult(@PathVariable("quizId") final Integer biographyQuizId,
                                      @RequestBody final BiographyQuizAnswerResultDTO answersDTO,
                                      Principal principal){
        User user = this.userService.findUserEntityByUserName(principal.getName());
        BiographyQuiz biographyQuiz = this.biographyQuizService.getBiographyQuizByID(biographyQuizId);
        List<BiographyQuestion> biographyQuestions = biographyQuiz.getBiographyQuestions();
        return this
                .biographyResultService
                .saveResult(answersDTO,biographyQuestions,user,biographyQuiz);
    }
}
