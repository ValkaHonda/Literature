package project.areas.results.dto;

public class ShowWorkResultDTO
{
    private Integer id;
    private Double successPercentage;
    private String username;

    public ShowWorkResultDTO() {
    }

    public ShowWorkResultDTO(Integer id, Double successPercentage, String username) {
        this.id = id;
        this.successPercentage = successPercentage;
        this.username = username;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
