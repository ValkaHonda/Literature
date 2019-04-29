package project.areas.questionnaires.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.authors.entities.Work;
import project.areas.authors.services.WorkService;
import project.areas.questionnaires.dto.ShowWorkQuestionDTO;
import project.areas.questionnaires.dto.ShowWorkQuizDTO;
import project.areas.questionnaires.entities.WorkQuiz;
import project.areas.questionnaires.services.WorkQuestionService;
import project.areas.questionnaires.services.WorkQuizService;

import java.util.List;

@RestController
@RequestMapping("/works")
public class WorkQuizController {
    private WorkService workService;
    private WorkQuizService workQuizService;
    private WorkQuestionService workQuestionService;

    @Autowired
    public WorkQuizController(final WorkService workService,
                              final WorkQuizService workQuizService,
                              final WorkQuestionService workQuestionService) {
        this.workService = workService;
        this.workQuizService = workQuizService;
        this.workQuestionService = workQuestionService;
    }

    @GetMapping("/{workId}/quiz")
    public List<ShowWorkQuizDTO> allWorkQuizQuestionsByWorkId(
            @PathVariable("workId") final Integer workId){
        Work work = this.workService.getWorkById(workId);
        return this.workQuizService.getWorkQuizzesByWork(work);
    }

    @GetMapping("/quiz/{quizId}/question")
    public List<ShowWorkQuestionDTO> getQuizQuestions(@PathVariable("quizId") final Integer quizId){
        WorkQuiz workQuiz = this.workQuizService.getWorkQuizEntityById(quizId);
        return this.workQuestionService.questionsByWorkQuiz(workQuiz);
    }
}
