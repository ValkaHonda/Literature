package project.areas.authors.services;

import project.areas.authors.dto.ShowAuthorDTO;

import java.util.List;

public interface AuthorService {
    List<ShowAuthorDTO> findAll();
    ShowAuthorDTO findById(final Integer id);
}
