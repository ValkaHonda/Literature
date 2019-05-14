package project.areas.results.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.entities.BiographyQuiz;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.services.AuthorQuizService;
import project.areas.results.dto.CreateAuthorResultDTO;
import project.areas.results.services.AuthorResultService;
import project.areas.users.entities.User;
import project.areas.users.services.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/result")
public class AuthorResultController {
    private final UserService userService;
    private final AuthorQuizService authorQuizService;
    private final AuthorResultService authorResultService;

    @Autowired
    public AuthorResultController(final UserService userService,
                                  final AuthorQuizService authorQuizService,
                                  final AuthorResultService authorResultService) {
        this.userService = userService;
        this.authorQuizService = authorQuizService;
        this.authorResultService = authorResultService;
    }

    @PostMapping("/author-quiz/{quizId}")
    public Double uploadAuthorResult(@PathVariable("quizId") final Integer authorQuizId,
                                        @RequestBody final CreateAuthorResultDTO answersDTO,
                                        Principal principal){
        User user = this.userService.findUserEntityByUserName(principal.getName());
        AuthorQuiz authorQuiz = this.authorQuizService.getAuthorQuizByID(authorQuizId);
        List<BiographyQuestion> biographyQuestions = this.authorQuizService
                .findAllBiographyQuestionsByQuiz((authorQuiz));
        List<WorkQuestion> workQuestions = this.authorQuizService
                .findAllWorkQuistionsByQuiz(authorQuiz);

        return this
                .authorResultService
                .saveResult(answersDTO,biographyQuestions,workQuestions,
                        user,authorQuiz);
    }
}
