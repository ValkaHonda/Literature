package project.areas.results.dto;


import java.util.List;

public class BiographyQuizAnswerResultDTO {
    private List<String> answers;

    public BiographyQuizAnswerResultDTO() {
    }

    public BiographyQuizAnswerResultDTO(List<String> answers) {
        this.answers = answers;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }
}
