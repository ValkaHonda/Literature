package project.areas.results.dto;

public class ShowWorkResultDTO
{
    private Integer id;
    private Double successPercentage;

    public ShowWorkResultDTO() {
    }

    public ShowWorkResultDTO(Integer id, Double successPercentage) {
        this.id = id;
        this.successPercentage = successPercentage;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Double getSuccessPercentage() {
        return successPercentage;
    }

    public void setSuccessPercentage(Double successPercentage) {
        this.successPercentage = successPercentage;
    }
}
