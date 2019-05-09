package project.areas.results.dto;

import java.util.List;

public class BiographyQuizAnswerQuestionsDTO {
    private List<String> answers;

    public BiographyQuizAnswerQuestionsDTO(List<String> answers) {
        this.answers = answers;
    }

    public BiographyQuizAnswerQuestionsDTO() {
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }
}
