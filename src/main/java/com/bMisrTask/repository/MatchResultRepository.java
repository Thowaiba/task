package com.bMisrTask.repository;

import com.bMisrTask.entities.Match;
import com.bMisrTask.entities.MatchIdPK;
import com.bMisrTask.entities.MatchResult;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MatchResultRepository extends CrudRepository<MatchResult, MatchIdPK> {
}
