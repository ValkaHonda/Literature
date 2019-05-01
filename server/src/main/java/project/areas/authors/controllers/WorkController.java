package project.areas.authors.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.authors.dto.ShowWorkDTO;
import project.areas.authors.entities.Author;
import project.areas.authors.services.AuthorService;
import project.areas.authors.services.WorkService;
import project.areas.results.dto.ShowWorkResultDTO;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class WorkController {
    private AuthorService authorService;
    private WorkService workService;

    @Autowired
    public WorkController(final AuthorService authorService, final WorkService workService) {
        this.authorService = authorService;
        this.workService = workService;
    }
    @GetMapping("/{id}/works")
    public List<ShowWorkDTO> getAllWorksByAuthorId(@PathVariable("id") final Integer authorId){
        Author foundAuthor = this.authorService.findEntityById(authorId);
        return this.workService.showAllByAuthor(foundAuthor);
    }
}
