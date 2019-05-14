package project.areas.authors.dto;

public class ShowAuthorDTO {
    private Integer key;
    private String firstName;
    private String lastName;
    private String biography;
    private String url;

    public ShowAuthorDTO() {
    }

    public ShowAuthorDTO(Integer key, String firstName, String lastName, String biography, String url) {
        this.key = key;
        this.firstName = firstName;
        this.lastName = lastName;
        this.biography = biography;
        this.url = url;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    public Integer getKey() {
        return key;
    }

    public void setKey(Integer key) {
        this.key = key;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
