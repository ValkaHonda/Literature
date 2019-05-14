package project.areas.results.dto;

import java.util.List;

public class CreateAuthorResultDTO {
    private List<String> workAnswers;
    private List<String> biographyAnswers;

    public CreateAuthorResultDTO() {
    }

    public CreateAuthorResultDTO(List<String> workAnswers, List<String> biographyAnswers) {
        this.workAnswers = workAnswers;
        this.biographyAnswers = biographyAnswers;
    }

    public List<String> getWorkAnswers() {
        return workAnswers;
    }

    public void setWorkAnswers(List<String> workAnswers) {
        this.workAnswers = workAnswers;
    }

    public List<String> getBiographyAnswers() {
        return biographyAnswers;
    }

    public void setBiographyAnswers(List<String> biographyAnswers) {
        this.biographyAnswers = biographyAnswers;
    }
}
