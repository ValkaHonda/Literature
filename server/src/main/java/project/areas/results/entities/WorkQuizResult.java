package project.areas.results.entities;

import project.areas.questioners.entities.WorkQuiz;
import project.areas.users.entities.User;

import javax.persistence.*;

@Entity
@Table(name = "work_quiz_results")
public class WorkQuizResult
{
    private Integer id;
    private Double successPercentage;
    private User user;
    private WorkQuiz workQuiz;
    public WorkQuizResult() {}

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
    @JoinColumn(name = "workQuizId")
    public WorkQuiz getWorkQuiz() {
        return workQuiz;
    }

    public void setWorkQuiz(WorkQuiz workQuiz) {
        this.workQuiz = workQuiz;
    }
}
