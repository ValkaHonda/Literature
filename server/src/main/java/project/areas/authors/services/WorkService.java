package project.areas.authors.services;

import project.areas.authors.dto.ShowWorkDTO;
import project.areas.authors.entities.Author;

import java.util.List;

public interface WorkService {
    List<ShowWorkDTO> showAllByAuthor(final Author author);
}
