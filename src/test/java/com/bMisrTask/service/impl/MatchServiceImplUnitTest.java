package com.bMisrTask.service.impl;

import static org.mockito.Mockito.when;

import java.util.ArrayList;
import java.util.List;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.context.junit4.SpringRunner;

import com.bMisrTask.entities.Match;
import com.bMisrTask.entities.Registration;
import com.bMisrTask.repository.MatchRepository;

@RunWith(SpringRunner.class)
public class MatchServiceImplUnitTest {

    @InjectMocks
    private MatchServiceImpl matchServiceImpl;

    @Mock
    private MatchRepository matchRepository;

    @Mock
    private Match matchMapper;

    @Test
    public void getMatches(){
        List<Match> matches = getMatch(3);
        when(matchRepository.findAll()).thenReturn(matches);
        List<Match> matchDtos = matchServiceImpl.getMatches();
        Assert.assertNotNull(matchDtos);
        Assert.assertEquals(matches.size(), matchDtos.size());
    }

    @Test
    public void getMatchesByRound(){
        List<Match> matches = getMatch(1);
        when(matchRepository.findAllByRound(1)).thenReturn(matches);
        List<Match> matchDtos = matchServiceImpl.getMatchesByRound(1);
        Assert.assertNotNull(matchDtos);
        Assert.assertEquals(matches.size(), matchDtos.size());
    }

  
    private List<Match> getMatch(int round) {
        List<Match> matches = new ArrayList<>();
        Match match = new Match();
        match.setId(1);
        match.setRound(round);
        match.setFirstRegistrationId(new Registration());
        matches.add(match);
        return matches;
    }

}
