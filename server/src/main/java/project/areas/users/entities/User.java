package project.areas.users.entities;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import project.areas.results.entities.AuthorQuizResult;
import project.areas.results.entities.BiographyQuizResult;
import project.areas.results.entities.WorkQuizResult;

import javax.persistence.*;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "users")
public class User implements UserDetails{
    private Integer id;
    private String email;
    private String password;
    private Set<Role> roles;
    private List<AuthorQuizResult> authorQuizResults;
    private List<BiographyQuizResult> biographyQuizResults;
    private List<WorkQuizResult> workQuizResults;

    public User(){

    }

    public User(String email, String password) {
        this.email = email;
        this.password = password;
    }

    public User(String subject, String s, Collection<? extends GrantedAuthority> authorities) {
        this.setRoles(new HashSet<>());
    }
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    @Column(name = "email", unique = true)
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    @Column(name = "password")
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(name = "user_role")
    public Set<Role> getRoles() {
        return roles;
    }


    public void setRoles(Set<Role> roles) {
        this.roles = roles;
    }

    @OneToMany(mappedBy = "user")
    public List<AuthorQuizResult> getAuthorQuizResults() {
        return authorQuizResults;
    }

    public void setAuthorQuizResults(List<AuthorQuizResult> authorQuizResults) {
        this.authorQuizResults = authorQuizResults;
    }

    @OneToMany(mappedBy = "user")
    public List<BiographyQuizResult> getBiographyQuizResults() {
        return biographyQuizResults;
    }

    public void setBiographyQuizResults(List<BiographyQuizResult> biographyQuizResults) {
        this.biographyQuizResults = biographyQuizResults;
    }

    @OneToMany(mappedBy = "user")
    public List<WorkQuizResult> getWorkQuizResults() {
        return workQuizResults;
    }

    public void setWorkQuizResults(List<WorkQuizResult> workQuizResults) {
        this.workQuizResults = workQuizResults;
    }

    @Transient
    @Override
    public String getUsername() {
        return this.email;
    }

    @Transient
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Transient
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Transient
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Transient
    @Override
    public boolean isEnabled() {
        return true;
    }

    @Transient
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return this.roles;
    }
}