package project.areas.authors.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.authors.dto.ShowMotifDTO;
import project.areas.authors.entities.Author;
import project.areas.authors.entities.Motif;
import project.areas.authors.repositories.MotifRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class MotifServiceImpl implements MotifService{
    private MotifRepository motifRepository;

    @Autowired
    public MotifServiceImpl(final MotifRepository motifRepository) {
        this.motifRepository = motifRepository;
    }

    @Override
    public List<ShowMotifDTO> findAllByAuthor(final Author author) {
        List<Motif> motifsEntities = this.motifRepository.findAllByAuthor(author);
        return entitiesToDTOList(motifsEntities);
    }
    private ShowMotifDTO entityToDTO(final Motif motif){
        return new ShowMotifDTO(motif.getTitle(),motif.getDescription());
    }
    private List<ShowMotifDTO> entitiesToDTOList(List<Motif> motifsEntities){
        List<ShowMotifDTO> motifsDTO = new ArrayList<>();
        for (int i = 0; i < motifsEntities.size(); i++) {
            motifsDTO.add(entityToDTO(motifsEntities.get(i)));
        }
        return motifsDTO;
    }
}
