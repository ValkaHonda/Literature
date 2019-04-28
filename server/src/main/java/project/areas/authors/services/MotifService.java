package project.areas.authors.services;

import project.areas.authors.dto.ShowMotifDTO;
import project.areas.authors.entities.Author;
import project.areas.authors.entities.Motif;

import java.util.List;

public interface MotifService {
    List<ShowMotifDTO> findAllByAuthor(final Author author);
}
