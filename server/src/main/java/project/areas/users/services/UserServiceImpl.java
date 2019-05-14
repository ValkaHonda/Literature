package project.areas.users.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import project.areas.authors.entities.Author;
import project.areas.authors.entities.Work;
import project.areas.results.dto.ShowAuthorResultDTO;
import project.areas.results.dto.ShowBiographyQuizResultDTO;
import project.areas.results.dto.ShowWorkResultDTO;
import project.areas.results.entities.AuthorQuizResult;
import project.areas.results.entities.BiographyQuizResult;
import project.areas.results.entities.WorkQuizResult;
import project.areas.users.entities.Role;
import project.areas.users.entities.User;
import project.areas.users.models.bidingModels.UserRegisterForm;
import project.areas.users.models.bidingModels.UsernameBindingModel;
import project.areas.users.models.dto.AuthorRankDTO;
import project.areas.users.models.dto.BiographyRankDTO;
import project.areas.users.models.dto.ShowUserDTO;
import project.areas.users.models.dto.WorkRankDTO;
import project.areas.users.repositories.UserRepository;

import java.util.*;

@Service
public class UserServiceImpl implements UserService{
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    private UserRepository userRepository;
    @Autowired
    public UserServiceImpl(final BCryptPasswordEncoder bCryptPasswordEncoder,
                           final UserRepository userRepository) {
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.userRepository = userRepository;
    }

    @Override
    public void registerUser(final UserRegisterForm user,final Role role) {
        user.setPass(this.bCryptPasswordEncoder.encode(user.getPass()));
        User userEntity = new User(user.getEmail(),user.getPass());
        userEntity.setRoles(new HashSet<>());
        userEntity.getRoles().add(role);
        this.userRepository.saveAndFlush(userEntity);
    }

    @Override
    public String getIDByUsername(UsernameBindingModel usernameBindingModel) {
        User user = this.userRepository.findUserByEmail(usernameBindingModel.getUsername());
        return user.getId().toString();
    }

    @Override
    public User findUserEntityByUserName(String username) {
        return this.userRepository.findUserByEmail(username);
    }

    @Override
    public List<ShowBiographyQuizResultDTO> findUserBiographyQuizResults(final User user) {
        List<BiographyQuizResult> resultEntities = user.getBiographyQuizResults();
        return this.toDTOList(resultEntities);
    }

    @Override
    public List<ShowWorkResultDTO> findUserWorkResults(User user) {
        List<WorkQuizResult> resultEntities = user.getWorkQuizResults();
        return this.toWorkDTOs(resultEntities);
    }

    @Override
    public List<ShowAuthorResultDTO> findUserAuthorResult(User user) {
        List<AuthorQuizResult> authorResultsEntities = user.getAuthorQuizResults();
        return this.authorEntitiesToDTOS(authorResultsEntities);
    }

    @Override
    public List<BiographyRankDTO> getUsersBiographyRanks() {
        List<BiographyRankDTO> ranks = new ArrayList();
        List<User> users = this.userRepository.findAll();
        for (User currentUser : users) {
            List<BiographyQuizResult> quizResults = currentUser.getBiographyQuizResults();
            Double avgPercent = getAvgBiographyPercent(quizResults);
            BiographyRankDTO dto = new BiographyRankDTO(entityToUserDTO(currentUser),avgPercent);
            ranks.add(dto);
        }
        return sortBiographyRankDtOs(ranks);
    }

    @Override
    public List<WorkRankDTO> getUsersWorkRanks() {
        List<WorkRankDTO> ranks = new ArrayList<>();
        List<User> users = this.userRepository.findAll();
        for (User currentUser : users) {
            List<WorkQuizResult> quizResults = currentUser.getWorkQuizResults();
            Double avgPercent = getAvgWorkPercent(quizResults);
            WorkRankDTO dto = new WorkRankDTO(this.entityToUserDTO(currentUser),avgPercent);
            ranks.add(dto);
        }
        return this.sortWorkRankDtOs(ranks);
    }

    @Override
    public List<AuthorRankDTO> getUsersAuthorRanks() {
        List<AuthorRankDTO> ranks = new ArrayList<>();
        List<User> users = this.userRepository.findAll();
        for (User currentUser : users) {
            List<AuthorQuizResult> quizResults = currentUser.getAuthorQuizResults();
            Double avgPercent = this.getAvgAuthorPercent(quizResults);
            AuthorRankDTO dto = new AuthorRankDTO(this.entityToUserDTO(currentUser),avgPercent);
            ranks.add(dto);
        }
        return this.sortAuthorRankDtOs(ranks);
    }

    private List<AuthorRankDTO> sortAuthorRankDtOs(List<AuthorRankDTO> dtos){
        for (int i = 0; i < dtos.size(); i++) {
            for (int j = 0; j < dtos.size()-1; j++) {
                AuthorRankDTO first = dtos.get(i);
                AuthorRankDTO second = dtos.get(i+1);
                //ASC
                if(first.getAvgSuccess()<second.getAvgSuccess()){
                    dtos.set(i,second);
                    dtos.set(i+1,first);
                }
            }
        }
        return dtos;
    }
    private List<BiographyRankDTO> sortBiographyRankDtOs(List<BiographyRankDTO> dtos){
        for (int i = 0; i < dtos.size(); i++) {
            for (int j = 0; j < dtos.size()-1; j++) {
                BiographyRankDTO first = dtos.get(i);
                BiographyRankDTO second = dtos.get(i+1);
                //ASC
                if(first.getAvgSuccess()<second.getAvgSuccess()){
                    dtos.set(i,second);
                    dtos.set(i+1,first);
                }
            }
        }
        return dtos;
    }
    private List<WorkRankDTO> sortWorkRankDtOs(List<WorkRankDTO> dtos){
        for (int i = 0; i < dtos.size(); i++) {
            for (int j = 0; j < dtos.size()-1; j++) {
                WorkRankDTO first = dtos.get(i);
                WorkRankDTO second = dtos.get(i+1);
                //ASC
                if(first.getAvgSuccess()<second.getAvgSuccess()){
                    dtos.set(i,second);
                    dtos.set(i+1,first);
                }
            }
        }
        return dtos;
    }
    private ShowUserDTO entityToUserDTO(User user){
        return new ShowUserDTO(user.getId(),user.getEmail(),user.getAvatarURL());
    }
    private Double getAvgBiographyPercent(List<BiographyQuizResult> results){
        double avg = 0;
        for (BiographyQuizResult result : results) {
            avg += result.getSuccessPercentage();
        }
        return avg/results.size();
    }
    private Double getAvgWorkPercent(List<WorkQuizResult> results){
        double avg = 0;
        for (WorkQuizResult result : results) {
            avg += result.getSuccessPercentage();
        }
        return avg/results.size();
    }
    private Double getAvgAuthorPercent(List<AuthorQuizResult> results){
        double avg = 0;
        for (AuthorQuizResult result : results) {
            avg += result.getSuccessPercentage();
        }
        return avg/results.size();
    }
    private ShowAuthorResultDTO authorEntityToDTO(final AuthorQuizResult authorQuizResult){
        return new ShowAuthorResultDTO(authorQuizResult.getId(),authorQuizResult.getSuccessPercentage(),
                authorQuizResult.getUser().getUsername());
    }
    private List<ShowAuthorResultDTO> authorEntitiesToDTOS(final List<AuthorQuizResult> entities){
        List<ShowAuthorResultDTO> dtos = new ArrayList<>();
        for (AuthorQuizResult entity : entities) {
            dtos.add(this.authorEntityToDTO(entity));
        }
        return dtos;
    }

    private ShowBiographyQuizResultDTO biographyResultToDTO(final BiographyQuizResult resultEntity){
        return new ShowBiographyQuizResultDTO(resultEntity.getId(),
                resultEntity.getSuccessPercentage(),
                resultEntity.getUser().getUsername());
    }
    private List<ShowBiographyQuizResultDTO> toDTOList(final List<BiographyQuizResult> resultEntities){
        List<ShowBiographyQuizResultDTO> resultDTOS = new ArrayList<>();
        for (BiographyQuizResult resultEntity : resultEntities) {
            resultDTOS.add(this.biographyResultToDTO(resultEntity));
        }
        return resultDTOS;
    }
    private ShowWorkResultDTO workResultEntityToDTO(final WorkQuizResult workQuizResult){
        return new ShowWorkResultDTO(workQuizResult.getId(),workQuizResult.getSuccessPercentage(),
                workQuizResult.getUser().getUsername());
    }
    private List<ShowWorkResultDTO> toWorkDTOs(final List<WorkQuizResult> workQuizResults){
        List<ShowWorkResultDTO> resultDTOS = new ArrayList<>();
        for (WorkQuizResult workQuizResult : workQuizResults) {
            resultDTOS.add(this.workResultEntityToDTO(workQuizResult));
        }
        return resultDTOS;
    }
}
