package project.areas.authors.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.authors.dto.ShowAuthorDTO;
import project.areas.authors.dto.ShowWorkDTO;
import project.areas.authors.entities.Author;
import project.areas.authors.services.AuthorService;
import project.areas.authors.services.WorkService;

import java.util.List;
@RestController
@RequestMapping("/authors")
public class AuthorController {
    private AuthorService authorService;
    private WorkService workService;

    @Autowired
    public AuthorController(final AuthorService authorService, final WorkService workService) {
        this.authorService = authorService;
        this.workService = workService;
    }

    @GetMapping("/{id}")
    public ShowAuthorDTO getAuthorById(@PathVariable("id") Integer authorId ){
        return this.authorService.findById(authorId);
    }

    @GetMapping("/{id}/works")
    public List<ShowWorkDTO> getAllWorksByAuthorId(@PathVariable("id") final Integer authorId){
        Author foundAuthor = this.authorService.findEntityById(authorId);
        return this.workService.showAllByAuthor(foundAuthor);

    }

    @GetMapping("")
    public List<ShowAuthorDTO> all(){
        return this.authorService.findAll();
    }
}