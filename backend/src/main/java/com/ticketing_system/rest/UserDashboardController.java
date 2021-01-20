package com.ticketing_system.rest;

import com.ticketing_system.dao.TicketDAO;
import com.ticketing_system.entity.Ticket;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000"})   // allows React to call this service
@RestController
public class UserDashboardController {
    private final TicketDAO ticketDAO;
    private final LogInController logInController;

    @Autowired
    public UserDashboardController(@Qualifier("ticketDAO") TicketDAO ticketDAO, @Qualifier("logInController") LogInController lic) {
        this.ticketDAO = ticketDAO;
        this.logInController = lic;

    }

    @PostMapping("/UserDashboard/getCurrentTickets")
    public List<Ticket> getCurrentTickets() {
        String loggedIn = logInController.currentlyLoggedIn();
        System.out.print("Request to see tickets made... ");
        if (loggedIn == null) {
            System.out.println("Denied, no one is logged in");
            return null;
        } else {
            System.out.println("Granted");
            return ticketDAO.findByUserID(logInController.currentlyLoggedIn());
        }
    }
}
