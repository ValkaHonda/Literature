package project.areas.results.entities;

import project.areas.questionnaires.entities.BiographyQuiz;
import project.areas.users.entities.User;

import javax.persistence.*;

@Entity
@Table(name = "biography_quiz_results")
public class BiographyQuizResult
{
    private Integer id;
    private Double successPercentage;
    private User user;
    private BiographyQuiz biographyQuiz;

    public BiographyQuizResult() {}

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "success_percentage")
    public Double getSuccessPercentage() {
        return successPercentage;
    }

    public void setSuccessPercentage(Double successPercentage) {
        this.successPercentage = successPercentage;
    }

    @ManyToOne()
    @JoinColumn(name = "userId")
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    @ManyToOne()
    @JoinColumn(name = "biographyQuizId")
    public BiographyQuiz getBiographyQuiz() {
        return biographyQuiz;
    }

    public void setBiographyQuiz(BiographyQuiz biographyQuiz) {
        this.biographyQuiz = biographyQuiz;
    }
}
