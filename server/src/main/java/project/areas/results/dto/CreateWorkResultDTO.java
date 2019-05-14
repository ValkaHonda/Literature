package project.areas.results.dto;

import java.util.List;

public class CreateWorkResultDTO {
    private List<String> answers;

    public CreateWorkResultDTO() {
    }

    public CreateWorkResultDTO(List<String> answers) {
        this.answers = answers;
    }

    public List<String> getAnswers() {
        return answers;
    }

    public void setAnswers(List<String> answers) {
        this.answers = answers;
    }
}
