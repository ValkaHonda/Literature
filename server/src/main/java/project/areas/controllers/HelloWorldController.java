package project.areas.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import project.areas.users.entities.Role;
import project.areas.users.services.RoleService;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HelloWorldController {
    private final RoleService roleService;

    @Autowired
    public HelloWorldController(final RoleService roleService){
        this.roleService = roleService;
    }
    @GetMapping("/testDB")
    public String testDB(){
        if(!roleService.exists(1)) {
            Role role = new Role("ROLE_NORMAL");
            roleService.saveRole(role);
        }
        Role role = roleService.getRoleByName("ROLE_NORMAL");
        return role.getName();
    }
    @GetMapping("/home")
    public List<String> getAnimals(){
        List<String> animals = new ArrayList<>();
        animals.add("Tom");
        animals.add("Garfield");
        animals.add("Tom");
        animals.add("Tom");
        return animals;
    }
    @GetMapping("/")
    public String welcome(){
        StringBuilder htmlBulider = new StringBuilder();
        htmlBulider.append("<h1>Welcome to Elly and Valio API service.</h1>");
        return htmlBulider.toString();
    }
}
