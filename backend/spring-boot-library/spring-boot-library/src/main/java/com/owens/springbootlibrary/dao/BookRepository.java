package com.owens.springbootlibrary.dao;


import com.owens.springbootlibrary.entity.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * JpaRepository builds basic CRUD operations with args
 * CRUD Operations with Book entity
 */

// JPA Repository requires Entity class & primary key Type
public interface BookRepository extends JpaRepository<Book, Long> {



}
