package project.areas.questioners.entities;


import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "biography_quizzes")
public class BiographyQuiz {
    private Integer id;
    private List<BiographyQuestion> biographyQuestions;

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
}
