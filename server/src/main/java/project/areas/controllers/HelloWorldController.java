package project.areas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.users.entities.Role;
import project.areas.users.repositories.RoleRepository;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HelloWorldController {
    private final RoleRepository roleRepository;
    @Autowired
    public HelloWorldController(final RoleRepository roleRepository){
        this.roleRepository = roleRepository;
    }
    @GetMapping("/Home")
    public List<String> getAnimals(){
        List<String> animals = new ArrayList<>();
        animals.add("Tom");
        animals.add("Garfield");
        animals.add("Tom");
        animals.add("Tom");
        if(!roleRepository.exists(1)) {
            Role role = new Role("ROLE_NORMAL");
            roleRepository.saveAndFlush(role);
        }
        String roles = roleRepository.getAll().toString();
        animals.add(roles);
        return animals;
    }
}
