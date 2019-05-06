package project.areas.authors.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.authors.dto.ShowMotifDTO;
import project.areas.authors.entities.Author;
import project.areas.authors.services.AuthorService;
import project.areas.authors.services.MotifService;
import project.areas.users.entities.User;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class MotifController {
    private AuthorService authorService;
    private MotifService motifService;

    @Autowired
    public MotifController(final AuthorService authorService, final MotifService motifService) {
        this.authorService = authorService;
        this.motifService = motifService;
    }
    @GetMapping("/{id}/motifs")
    public List<ShowMotifDTO> getAllMotifsByAuthorId(@PathVariable("id") final Integer authorId, Authentication authentication){
        Author foundAuthor = this.authorService.findEntityById(authorId);
       // User user = (User)authentication.getPrincipal();
        return this.motifService.findAllByAuthor(foundAuthor);
    }
}
