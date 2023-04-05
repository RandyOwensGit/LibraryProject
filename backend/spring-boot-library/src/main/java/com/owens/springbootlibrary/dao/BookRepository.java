package com.owens.springbootlibrary.dao;


import com.owens.springbootlibrary.entity.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.web.bind.annotation.RequestParam;

/**
 * JpaRepository builds basic CRUD operations with args
 * CRUD Operations with Book entity
 */

// JPA Repository requires Entity class & primary key Type
// http://localhost:8080/api/books
public interface BookRepository extends JpaRepository<Book, Long> {


    Page<Book> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);

}
