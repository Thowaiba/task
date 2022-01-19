package com.bMisrTask.repository;

import com.bMisrTask.entities.Match;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MatchRepository extends CrudRepository<Match,Integer> {
    List<Match> findAll();
    List<Match> findAllByRound(Integer round);
}
