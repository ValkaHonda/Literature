package project.areas.users.models.dto;

public class AuthorRankDTO {
    private ShowUserDTO user;
    private Double avgSuccess;

    public AuthorRankDTO() {
    }

    public AuthorRankDTO(ShowUserDTO user, Double avgSuccess) {
        this.user = user;
        this.avgSuccess = avgSuccess;
    }

    public ShowUserDTO getUser() {
        return user;
    }

    public void setUser(ShowUserDTO user) {
        this.user = user;
    }

    public Double getAvgSuccess() {
        return avgSuccess;
    }

    public void setAvgSuccess(Double avgSuccess) {
        this.avgSuccess = avgSuccess;
    }
}
