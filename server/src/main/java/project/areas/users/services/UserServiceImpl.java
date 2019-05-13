package project.areas.users.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import project.areas.results.dto.ShowBiographyQuizResultDTO;
import project.areas.results.entities.BiographyQuizResult;
import project.areas.users.entities.Role;
import project.areas.users.entities.User;
import project.areas.users.models.bidingModels.UserRegisterForm;
import project.areas.users.models.bidingModels.UsernameBindingModel;
import project.areas.users.repositories.UserRepository;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;

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
}
