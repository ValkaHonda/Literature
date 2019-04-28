package project.areas.authors.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.areas.authors.dto.ShowWorkDTO;
import project.areas.authors.entities.Author;
import project.areas.authors.entities.Work;
import project.areas.authors.repositories.WorkRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class WorkServiceImpl implements WorkService{
    private WorkRepository workRepository;

    @Autowired
    public WorkServiceImpl(final WorkRepository workRepository) {
        this.workRepository = workRepository;
    }

    @Override
    public List<ShowWorkDTO> showAllByAuthor(final Author author) {
        List<Work> foundWorks = this.workRepository.findAllByAuthor(author);
        List<ShowWorkDTO> workDTOS = new ArrayList<>();
        for (int i = 0; i < foundWorks.size(); i++) {
            Work currentWorkEntity = foundWorks.get(i);
            workDTOS.add(this.entityToDTO(currentWorkEntity));
        }
        return workDTOS;
    }
    private ShowWorkDTO entityToDTO(Work work){
        return new ShowWorkDTO(work.getTitle(),work.getDescription());
    }
}
