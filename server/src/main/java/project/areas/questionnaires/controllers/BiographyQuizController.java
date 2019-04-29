package project.areas.questionnaires.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.questionnaires.dto.ShowBiographyQuestionDTO;
import project.areas.questionnaires.dto.ShowBiographyQuizDTO;

import java.util.List;

@RestController
@RequestMapping("/author")
public class BiographyQuizController {
    @GetMapping("/{authorId}/biography-quiz")
    public List<ShowBiographyQuestionDTO> allBiographyQuizByAuthorId(
            @PathVariable("authorId") final Integer authorId){



        Work work = this.workService.getWorkById(workId);
        return this.workQuizService.getWorkQuizzesByWork(work);
    }

    @GetMapping("/biography-quiz/{quizId}/question")
    public List<ShowBiographyQuizDTO> getQuizQuestions(@PathVariable("quizId") final Integer biographyQuizId){
        WorkQuiz workQuiz = this.workQuizService.getWorkQuizEntityById(quizId);
        return this.workQuestionService.questionsByWorkQuiz(workQuiz);
    }
}
