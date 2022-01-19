package com.bMisrTask.service.impl;

import com.bMisrTask.entities.Match;
import com.bMisrTask.repository.MatchRepository;
import com.bMisrTask.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class MatchServiceImpl implements MatchService {

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    @Qualifier("matchMapperImpl")
    private Match matchMapper;

    @Override
    public List<Match> getMatches() {
        List<Match> matchDtos = new ArrayList<>();
        List<Match> matches = matchRepository.findAll();
        if(!CollectionUtils.isEmpty(matches)){
            matchDtos = matches.stream().map(x-> matchMapper).collect(Collectors.toList());
        }
        return matchDtos;
    }

    @Override
    public List<Match> getMatchesByRound(Integer round) {
        List<Match> matchDtos = new ArrayList<>();
        List<Match> matches = matchRepository.findAllByRound(round);
        if(!CollectionUtils.isEmpty(matches)){
            matchDtos = matches.stream().map(x-> matchMapper).collect(Collectors.toList());
        }
        return matchDtos;
    }
}
