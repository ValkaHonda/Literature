package project.areas.results.dto;


public class ShowBiographyQuizResultDTO {
    private Integer key;
    private Double successPercentage;
    private String username;

    public ShowBiographyQuizResultDTO() {
    }

    public ShowBiographyQuizResultDTO(Integer key, Double successPercentage, String username) {
        this.key = key;
        this.successPercentage = successPercentage;
        this.username = username;
    }

    public Integer getKey() {
        return key;
    }

    public void setKey(Integer key) {
        this.key = key;
    }

    public Double getSuccessPercentage() {
        return successPercentage;
    }

    public void setSuccessPercentage(Double successPercentage) {
        this.successPercentage = successPercentage;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
