package com.ticketing_system.dao;

import com.ticketing_system.entity.Ticket;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityManager;
import java.util.List;

@Repository
public class TicketDAO implements MyDAO<Ticket> {
    private final EntityManager entityManager;

    @Autowired
    public TicketDAO(EntityManager entityManager) { this.entityManager = entityManager; }

    private Session getSession() { return entityManager.unwrap(Session.class); }

    @Override
    public List<Ticket> findAll() {
        return null;
    }

    @Override
    public Ticket findByID(int ID) {
        return null;
    }

    @SuppressWarnings("unchecked")
    @Transactional
    public List<Ticket> findByUserID(String ID) {
        List<Ticket> tickets = getSession().createQuery(String.format("from Ticket where user_id = %s", ID)).getResultList();
        System.out.println(tickets.size() + " ticket(s) found");
        return tickets;
    }

    @Override
    public Ticket update(Ticket object) {
        return null;
    }

    @Override
    public Ticket save(Ticket object) {
        return null;
    }

    @Override
    public boolean deleteByID(int ID) {
        return false;
    }
}
