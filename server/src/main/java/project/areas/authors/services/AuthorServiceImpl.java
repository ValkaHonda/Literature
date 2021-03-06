package project.areas.authors.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.authors.dto.ShowAuthorDTO;
import project.areas.authors.entities.Author;
import project.areas.authors.repositories.AuthorRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class AuthorServiceImpl implements AuthorService{
    private AuthorRepository authorRepository;

    @Autowired
    public AuthorServiceImpl(final AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    @Override
    public List<ShowAuthorDTO> findAll() {
        List<Author> authorEntities = authorRepository.findAll();
        List<ShowAuthorDTO> authorDTOS = new ArrayList<>();
        for(int i = 0; i < authorEntities.size(); i++){
            Author currentAuthor = authorEntities.get(i);
            ShowAuthorDTO newAuthorDTO = entityToDTO(currentAuthor);
            authorDTOS.add(newAuthorDTO);
        }
        return authorDTOS;
    }

    @Override
    public ShowAuthorDTO findById(Integer id) {
        Author author = this.authorRepository.findOne(id);
        return entityToDTO(author);
    }

    @Override
    public Author findEntityById(Integer id) {
        return this.authorRepository.findOne(id);
    }

    private ShowAuthorDTO entityToDTO(Author author){
        ShowAuthorDTO newAuthorDTO = new ShowAuthorDTO(
                author.getId(),
                author.getFirstName(),
                author.getLastName(),
                author.getBiography(),
                author.getAvatarURL()
        );
        return newAuthorDTO;
    }
}