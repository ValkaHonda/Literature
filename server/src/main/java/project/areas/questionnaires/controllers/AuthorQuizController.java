package project.areas.questionnaires.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.authors.entities.Author;
import project.areas.authors.services.AuthorService;
import project.areas.questionnaires.dto.ShowAuthorQuestionDTO;
import project.areas.questionnaires.dto.ShowAuthorQuizDTO;
import project.areas.questionnaires.dto.ShowBiographyQuestionDTO;
import project.areas.questionnaires.dto.ShowWorkQuestionDTO;
import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.questionnaires.entities.BiographyQuestion;
import project.areas.questionnaires.services.AuthorQuizService;
import project.areas.questionnaires.services.BiographyQuestionService;
import project.areas.questionnaires.services.WorkQuestionService;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class AuthorQuizController {
    private final AuthorService authorService;
    private final AuthorQuizService authorQuizService;
    private final BiographyQuestionService biographyQuestionService;
    private final WorkQuestionService workQuestionService;
    @Autowired
    public AuthorQuizController(final AuthorService authorService,
                                final AuthorQuizService authorQuizService,
                                final BiographyQuestionService biographyQuestionService,
                                final WorkQuestionService workQuestionService) {
        this.authorService = authorService;
        this.authorQuizService = authorQuizService;
        this.biographyQuestionService = biographyQuestionService;
        this.workQuestionService = workQuestionService;
    }

    @GetMapping("/{id}/author-quizzes")
    public List<ShowAuthorQuizDTO> getQuizzesByAuthorID(@PathVariable("id") final Integer authorID){
        Author authorEntity = this.authorService.findEntityById(authorID);
        List<BiographyQuestion> biographyQuestions = this.biographyQuestionService
                .getBiographyQuestionsByAuthor(authorEntity);

        return this.authorQuizService.allAuthorQuizzesByBiographyQuestions(biographyQuestions);

    }
    @GetMapping("/author-quiz/{id}/question")
    public ShowAuthorQuestionDTO getQuestionsByAuthorQuizID
            (@PathVariable("id") final Integer authorQuizID)
    {
      AuthorQuiz authorQuizEntity = this.authorQuizService.getAuthorQuizByID(authorQuizID);
      List<ShowBiographyQuestionDTO> biographyQuestions = this.biographyQuestionService
              .getBiographyQuestionsByAuthorQuiz(authorQuizEntity);
      List<ShowWorkQuestionDTO> workQuestions = this.workQuestionService
              .questionsByAuthorQuiz(authorQuizEntity);
      return new ShowAuthorQuestionDTO(biographyQuestions, workQuestions);
    }
    //@GetMapping("/{workId}/work-quiz")
   // @GetMapping("/work-quiz/{quizId}/question")
}
