package com.ticketing_system.entity;

import javax.persistence.*;

@Entity
@Table(name = "tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "user_id", nullable = false)
    private String user_id;

    @Column(name = "issue", length = 100, nullable = false)
    private String issue;

    @Column(name = "description", length = 200, nullable = false)
    private String description;

    @Column(name = "resolved")
    private boolean resolved;

    @Column(name = "closed")
    private boolean closed;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getIssue() {
        return issue;
    }

    public void setIssue(String issue) {
        this.issue = issue;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isResolved() {
        return resolved;
    }

    public void setResolved(boolean resolved) {
        this.resolved = resolved;
    }

    public boolean isClosed() {
        return closed;
    }

    public void setClosed(boolean closed) {
        this.closed = closed;
    }

    @Override
    public String toString() {
        return String.format("Ticket #%d - user: %s - issue: %s - description: %s\n\t%s - %s", id, user_id, issue, description,
                resolved ? "RESOLVED" : "UNRESOLVED", closed ? "CLOSED" : "OPEN");
    }
}
