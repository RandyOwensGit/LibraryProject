package com.owens.springbootlibrary.entity;

import lombok.Data;
import jakarta.persistence.*;
import org.springframework.context.annotation.Primary;

/**
 * Entity mapped to book Table in MYSQL
 */

@Entity
@Table(name = "book")
@Data // lombok auto create getters/setters
public class Book {

    /* MAP COLUMNS */
    // primary key id - generate
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "title")
    private String title;

    @Column(name = "author")
    private String author;

    @Column(name = "description")
    private String description;

    @Column(name = "copies")
    private int copies;

    @Column(name = "copies_available")
    private int copiesAvailable;

    @Column(name = "category")
    private String category;

    @Column(name = "img")
    private String image;
    /* END OF COLUMNS */

}
