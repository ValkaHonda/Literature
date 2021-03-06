package project.areas.users.services;

import project.areas.results.dto.ShowAuthorResultDTO;
import project.areas.results.dto.ShowBiographyQuizResultDTO;
import project.areas.results.dto.ShowWorkResultDTO;
import project.areas.users.entities.Role;
import project.areas.users.entities.User;
import project.areas.users.models.bidingModels.UserRegisterForm;
import project.areas.users.models.bidingModels.UsernameBindingModel;
import project.areas.users.models.dto.AuthorRankDTO;
import project.areas.users.models.dto.BiographyRankDTO;
import project.areas.users.models.dto.ShowUserDTO;
import project.areas.users.models.dto.WorkRankDTO;

import java.util.List;
import java.util.Map;

public interface UserService {
    void registerUser(final UserRegisterForm user, final Role role);
    String getIDByUsername(final UsernameBindingModel usernameBindingModel);
    User findUserEntityByUserName(final String username);
    List<ShowBiographyQuizResultDTO> findUserBiographyQuizResults(final User user);
    List<ShowWorkResultDTO> findUserWorkResults(final User user);
    List<ShowAuthorResultDTO> findUserAuthorResult(final User user);
    List<BiographyRankDTO> getUsersBiographyRanks();
    List<WorkRankDTO> getUsersWorkRanks();
    List<AuthorRankDTO> getUsersAuthorRanks();
}
