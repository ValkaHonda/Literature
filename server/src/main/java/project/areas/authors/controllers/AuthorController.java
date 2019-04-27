package project.areas.authors.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.authors.dto.ShowAuthorDTO;
import project.areas.authors.services.AuthorService;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class AuthorController {
    private AuthorService authorService;

    @Autowired
    public AuthorController(final AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping("/{id}")
    public ShowAuthorDTO getAuthorById(@PathVariable("id") Integer authorId ){
        return this.authorService.findById(authorId);
    }

    @GetMapping("/")
    public List<ShowAuthorDTO> all(){
        return this.authorService.findAll();
    }
}
