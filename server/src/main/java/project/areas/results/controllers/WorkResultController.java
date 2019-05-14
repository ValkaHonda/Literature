package project.areas.results.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;
import project.areas.questionnaires.services.AuthorQuizService;
import project.areas.questionnaires.services.WorkQuizService;
import project.areas.results.dto.CreateWorkResultDTO;
import project.areas.results.services.AuthorResultService;
import project.areas.results.services.WorkResultService;
import project.areas.users.entities.User;
import project.areas.users.services.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/result")
public class WorkResultController
{

    private UserService userService;
    private WorkQuizService workQuizService;
    private WorkResultService workResultService;

    @Autowired
    public WorkResultController(final UserService userService,
                                final WorkQuizService workQuizService,
                                final WorkResultService workResultService) {
        this.userService = userService;
        this.workQuizService = workQuizService;
        this.workResultService = workResultService;
    }

    @PostMapping("/work-quiz/{quizId}")
    public Double uploadWorkResult(@PathVariable("quizId") final Integer workQuizId,
                                        @RequestBody final CreateWorkResultDTO answersDTO,
                                        Principal principal){
        User user = this.userService.findUserEntityByUserName(principal.getName());

        WorkQuiz workQuiz = this.workQuizService.getWorkQuizEntityById(workQuizId);
        List<WorkQuestion> workQuestions = workQuiz.getWorkQuestions();

        return this
                .workResultService
                .saveResult(answersDTO,workQuestions,user,workQuiz);
    }
}
