package project.areas.authors.entities;

import project.areas.questionnaires.entities.BiographyQuestion;

import javax.persistence.*;
import java.util.List;
import org.hibernate.annotations.Type;

@Entity
@Table(name = "authors")
public class Author {
    private Integer id;
    private String firstName;
    private String lastName;
    private String biography;
    private List<Motif> motifs;
    private List<Work> works;
    private List<BiographyQuestion> biographyQuestions;
    private String avatarURL;

    public Author() { }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "first_name")
    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    @Column(name = "last_name")
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    @Type( type = "text")
    public String getBiography() {
        return biography;
    }

    public void setBiography(String biography) {
        this.biography = biography;
    }

    @OneToMany(mappedBy = "author")
    public List<Motif> getMotifs() {
        return motifs;
    }

    public void setMotifs(List<Motif> motifs) {
        this.motifs = motifs;
    }

    @OneToMany(mappedBy = "author")
    public List<Work> getWorks() {
        return works;
    }

    public void setWorks(List<Work> works) {
        this.works = works;
    }

    @OneToMany(mappedBy = "author")
    public List<BiographyQuestion> getBiographyQuestions() {
        return biographyQuestions;
    }

    public void setBiographyQuestions(List<BiographyQuestion> biographyQuestions) {
        this.biographyQuestions = biographyQuestions;
    }

    @Column(name = "avatar")
    public String getAvatarURL() {
        return avatarURL;
    }

    public void setAvatarURL(String avatarURL) {
        this.avatarURL = avatarURL;
    }
}