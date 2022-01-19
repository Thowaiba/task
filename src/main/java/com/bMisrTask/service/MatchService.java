package com.bMisrTask.service;

import com.bMisrTask.entities.Match;

import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface MatchService {
    List<Match> getMatches();
    List<Match> getMatchesByRound(Integer round);
}
