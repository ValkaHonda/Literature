package project.areas.questioners.entities;

import project.areas.results.entities.AuthorQuizResult;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "author_quizzes")
public class AuthorQuiz {
    private Integer id;
    private List<WorkQuestion> workQuestions;
    private List<BiographyQuestion> biographyQuestions;
    private List<AuthorQuizResult> authorQuizResults;

    public AuthorQuiz() { }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @OneToMany(mappedBy = "authorQuiz")
    public List<WorkQuestion> getWorkQuestions() {
        return workQuestions;
    }

    public void setWorkQuestions(List<WorkQuestion> workQuestions) {
        this.workQuestions = workQuestions;
    }

    @OneToMany(mappedBy = "authorQuiz")
    public List<BiographyQuestion> getBiographyQuestions() {
        return biographyQuestions;
    }

    public void setBiographyQuestions(List<BiographyQuestion> biographyQuestions) {
        this.biographyQuestions = biographyQuestions;
    }

    @OneToMany(mappedBy = "authorQuiz")
    public List<AuthorQuizResult> getAuthorQuizResults() {
        return authorQuizResults;
    }

    public void setAuthorQuizResults(List<AuthorQuizResult> authorQuizResults) {
        this.authorQuizResults = authorQuizResults;
    }
}
