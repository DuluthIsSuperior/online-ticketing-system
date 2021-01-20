package com.ticketing_system.rest;

import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = {"http://localhost:3000"})   // allows React to call this service
@RestController
public class LogInController {
    private String userLoggedIn = null;

    @GetMapping("/kick")
    public boolean kick() {
        System.out.print(userLoggedIn == null ? "" : ("User " + userLoggedIn + " has been logged out"));
        userLoggedIn = null;
        return true;
    }

    @PostMapping("/login")
    public boolean login(@RequestBody String id) {
        id = id.substring(0, id.length() - 1);
        userLoggedIn = id;
        System.out.println("A user with an id of " + id + " has logged in");
        return true;
    }

    @PostMapping("/currentlyLoggedIn")
    public String currentlyLoggedIn() {
        return userLoggedIn;
    }
}
