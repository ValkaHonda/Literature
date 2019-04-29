package project.areas.authors.entities;

import javax.persistence.*;
import org.hibernate.annotations.Type;
import project.areas.questionnaires.entities.WorkQuestion;
import project.areas.questionnaires.entities.WorkQuiz;

import java.util.List;

@Entity
@Table(name = "works")
public class Work {
    private Integer id;
    private String title;
    private String description;
    private Author author;
    private List<WorkQuestion> workQuestions;
    private List<WorkQuiz> workQuizzes;

    public Work() { }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "title")
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    @Type( type = "text")
    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @ManyToOne()
    @JoinColumn(name = "authorId")
    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    @OneToMany(mappedBy = "work")
    public List<WorkQuestion> getWorkQuestions() {
        return workQuestions;
    }

    public void setWorkQuestions(List<WorkQuestion> workQuestions) {
        this.workQuestions = workQuestions;
    }

    @OneToMany(mappedBy = "work")
    public List<WorkQuiz> getWorkQuizzes() {
        return workQuizzes;
    }

    public void setWorkQuizzes(List<WorkQuiz> workQuizzes) {
        this.workQuizzes = workQuizzes;
    }
}
