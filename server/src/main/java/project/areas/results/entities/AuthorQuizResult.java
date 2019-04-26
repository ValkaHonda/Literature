package project.areas.results.entities;

import project.areas.questionnaires.entities.AuthorQuiz;
import project.areas.users.entities.User;

import javax.persistence.*;

@Entity
@Table(name = "author_quiz_results")
public class AuthorQuizResult {
    private Integer id;
    private Double successPercentage;
    private User user;
    private AuthorQuiz authorQuiz;

    public AuthorQuizResult() { }

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
    @JoinColumn(name = "authorQuizId")
    public AuthorQuiz getAuthorQuiz() {
        return authorQuiz;
    }

    public void setAuthorQuiz(AuthorQuiz authorQuiz) {
        this.authorQuiz = authorQuiz;
    }
}
