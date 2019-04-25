package project.areas.questioners.entities;

import project.areas.authors.entities.Author;

import javax.persistence.*;

@Entity
@Table(name = "biography_questions")
public class BiographyQuestion {
    private Integer id;
    private String question;
    private String rightAnswer;
    private String wrongAnswer1;
    private String wrongAnswer2;
    private String wrongAnswer3;
    private Author author;
    private BiographyQuiz biographyQuiz;
    private AuthorQuiz authorQuiz;

    public BiographyQuestion(){ }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "question")
    public String getQuestion() {
        return question;
    }

    public void setQuestion(String question) {
        this.question = question;
    }

    @Column(name = "right_answer")
    public String getRightAnswer() {
        return rightAnswer;
    }

    public void setRightAnswer(String rightAnswer) {
        this.rightAnswer = rightAnswer;
    }

    @Column(name = "wrong_answer_1")
    public String getWrongAnswer1() {
        return wrongAnswer1;
    }

    public void setWrongAnswer1(String wrongAnswer1) {
        this.wrongAnswer1 = wrongAnswer1;
    }
    @Column(name = "wrong_answer_2")
    public String getWrongAnswer2() {
        return wrongAnswer2;
    }

    public void setWrongAnswer2(String wrongAnswer2) {
        this.wrongAnswer2 = wrongAnswer2;
    }
    @Column(name = "wrong_answer_3")
    public String getWrongAnswer3() {
        return wrongAnswer3;
    }

    public void setWrongAnswer3(String wrongAnswer3) {
        this.wrongAnswer3 = wrongAnswer3;
    }

    @ManyToOne()
    @JoinColumn(name = "authorId")
    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    @ManyToOne()
    @JoinColumn(name = "biography_quizId")
    public BiographyQuiz getBiographyQuiz() {
        return biographyQuiz;
    }

    public void setBiographyQuiz(BiographyQuiz biographyQuiz) {
        this.biographyQuiz = biographyQuiz;
    }

    @ManyToOne()
    @JoinColumn(name = "author_quizId")
    public AuthorQuiz getAuthorQuiz() {
        return authorQuiz;
    }

    public void setAuthorQuiz(AuthorQuiz authorQuiz) {
        this.authorQuiz = authorQuiz;
    }
}
