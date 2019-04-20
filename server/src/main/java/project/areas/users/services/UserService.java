package project.areas.users.services;

import project.areas.users.entities.Role;
import project.areas.users.models.bidingModels.UserRegisterForm;
import project.areas.users.models.bidingModels.UsernameBindingModel;

public interface UserService {
    void registerUser(final UserRegisterForm user, final Role role);
    String getIDByUsername(final UsernameBindingModel usernameBindingModel);
}
