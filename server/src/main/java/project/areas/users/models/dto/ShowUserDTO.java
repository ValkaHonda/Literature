package project.areas.users.models.dto;

public class ShowUserDTO {
    private Integer id;
    private String email;
    private String avatarURL;

    public ShowUserDTO() {
    }

    public ShowUserDTO(Integer id, String email, String avatarURL) {
        this.id = id;
        this.email = email;
        this.avatarURL = avatarURL;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getAvatarURL() {
        return avatarURL;
    }

    public void setAvatarURL(String avatarURL) {
        this.avatarURL = avatarURL;
    }
}
