package project.areas.questionnaires.dto;

import java.util.List;

public class ShowAuthorQuestionDTO
{
    private List<ShowBiographyQuestionDTO> biographyQuestions;
    private List<ShowWorkQuestionDTO> workQuestions;

    public ShowAuthorQuestionDTO() {
    }

    public ShowAuthorQuestionDTO(List<ShowBiographyQuestionDTO> biographyQuestions, List<ShowWorkQuestionDTO> workQuestions) {
        this.biographyQuestions = biographyQuestions;
        this.workQuestions = workQuestions;
    }

    public List<ShowBiographyQuestionDTO> getBiographyQuestions() {
        return biographyQuestions;
    }

    public void setBiographyQuestions(List<ShowBiographyQuestionDTO> biographyQuestions) {
        this.biographyQuestions = biographyQuestions;
    }

    public List<ShowWorkQuestionDTO> getWorkQuestions() {
        return workQuestions;
    }

    public void setWorkQuestions(List<ShowWorkQuestionDTO> workQuestions) {
        this.workQuestions = workQuestions;
    }
}
