package project.areas.questioners.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "work_quizzes")
public class WorkQuiz {
    private Integer id;
    private List<WorkQuestion> workQuestions;

    public WorkQuiz() { }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @OneToMany(mappedBy = "workQuiz")
    public List<WorkQuestion> getWorkQuestions() {
        return workQuestions;
    }

    public void setWorkQuestions(List<WorkQuestion> workQuestions) {
        this.workQuestions = workQuestions;
    }
}
