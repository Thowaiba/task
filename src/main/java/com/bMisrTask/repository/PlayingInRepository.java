package com.bMisrTask.repository;

import com.bMisrTask.entities.PlayingIn;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PlayingInRepository extends CrudRepository<PlayingIn,Integer> {
    List<PlayingIn> findAll();
}
