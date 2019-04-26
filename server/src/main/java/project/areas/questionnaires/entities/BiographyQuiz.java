package project.areas.questionnaires.entities;

import project.areas.results.entities.BiographyQuizResult;
import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "biography_quizzes")
public class BiographyQuiz {
    private Integer id;
    private List<BiographyQuestion> biographyQuestions;
    private List<BiographyQuizResult> biographyQuizResults;


    public BiographyQuiz() { }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @OneToMany(mappedBy = "biographyQuiz")
    public List<BiographyQuestion> getBiographyQuestions() {
        return biographyQuestions;
    }

    public void setBiographyQuestions(List<BiographyQuestion> biographyQuestions) {
        this.biographyQuestions = biographyQuestions;
    }

    @OneToMany(mappedBy = "biographyQuiz")
    public List<BiographyQuizResult> getBiographyQuizResults() {
        return biographyQuizResults;
    }

    public void setBiographyQuizResults(List<BiographyQuizResult> biographyQuizResults) {
        this.biographyQuizResults = biographyQuizResults;
    }
}
