package project.areas.users.models.dto;

/**
 * Created by Lenny on 5/14/2019.
 */
public class BiographyRankDTO {
    private ShowUserDTO user;
    private Double avgSuccess;

    public BiographyRankDTO() {
    }

    public BiographyRankDTO(ShowUserDTO user, Double avgSuccess) {
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
