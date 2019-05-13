package project.areas.users.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import project.areas.results.dto.ShowBiographyQuizResultDTO;
import project.areas.results.dto.ShowWorkResultDTO;
import project.areas.users.entities.Role;
import project.areas.users.entities.User;
import project.areas.users.models.bidingModels.UserRegisterForm;
import project.areas.users.models.bidingModels.UsernameBindingModel;
import project.areas.users.services.RoleService;
import project.areas.users.services.UserService;

import java.security.Principal;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/users")
public class UserController {
    private UserService userService;
    private RoleService roleService;

    @Autowired
    public UserController(final UserService userService, final RoleService roleService) {
        this.userService = userService;
        this.roleService = roleService;
    }

    @GetMapping("/test")
    public String test(){
        return "<h1>Hello from UserController.<h1>";
    }
    @PostMapping("/sign-up")
    public ResponseEntity registerUser(@RequestBody final UserRegisterForm registerForm){
        Role role = this.roleService.getRoleByName("ROLE_NORMAL");
        this.userService.registerUser(registerForm,role);
        return ResponseEntity.ok("Successful sign-up");
    }

    @PostMapping("/id")
    public String getIDByUsername(@RequestBody final UsernameBindingModel usernameBindingModel)
    {
        System.out.println("Hello, World!");
        return this.userService.getIDByUsername(usernameBindingModel);}

    @GetMapping("/work-result")
    public String getUserWorkQuizResults(Authentication authentication, Principal principal)
    {
        System.out.println(authentication.getName());
        System.out.println("-----------------");
        System.out.println(principal.getName());
        return authentication.getName()+"$"+principal.getName();

    }
    @GetMapping("/biography-result")
    public List<ShowBiographyQuizResultDTO> getAllUsersBiographyQuizResults(final Principal principal){
        User loggedUser = this.userService.findUserEntityByUserName(principal.getName());
        return this.userService.findUserBiographyQuizResults(loggedUser);
    }

}