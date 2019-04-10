package project.areas.users.services;

import project.areas.users.entities.Role;

public interface RoleService {
    Role getRoleByName(final String roleName);
    void saveRole(final Role role);
    boolean exists(Integer id);
}
