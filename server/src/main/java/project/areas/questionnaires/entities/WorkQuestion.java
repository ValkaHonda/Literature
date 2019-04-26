package project.areas.questionnaires.entities;

import project.areas.authors.entities.Work;

import javax.persistence.*;

@Entity
@Table(name = "work_questions")
public class WorkQuestion {
    private Integer id;
    private String question;
    private String rightAnswer;
    private String wrongAnswer1;
    private String wrongAnswer2;
    private String wrongAnswer3;
    private Work work;
    private WorkQuiz workQuiz;
    private AuthorQuiz authorQuiz;

    public WorkQuestion() { }

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
    @JoinColumn(name = "workId")
    public Work getWork() {
        return work;
    }

    public void setWork(Work work) {
        this.work = work;
    }

    @ManyToOne()
    @JoinColumn(name = "workQuizId")
    public WorkQuiz getWorkQuiz() {
        return workQuiz;
    }

    public void setWorkQuiz(WorkQuiz workQuiz) {
        this.workQuiz = workQuiz;
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
