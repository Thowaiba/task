package com.bMisrTask.api;

import com.bMisrTask.controllers.rest.MatchController;
import com.bMisrTask.entities.Match;
import com.bMisrTask.entities.Registration;
import com.bMisrTask.response.ApiResponse;
import com.bMisrTask.service.MatchService;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static org.mockito.Mockito.when;

@RunWith(SpringRunner.class)
public class MatchControllerUnitTest {

    @InjectMocks
    private MatchController matchController;

    @Mock
    private MatchService matchService;

    @Test
    public void getMatches(){
        List<Match> Matchs = getMatchs(3);
        when(matchService.getMatches()).thenReturn(Matchs);
        ResponseEntity<ApiResponse> response = matchController.getMatches();
        Assert.assertNotNull(response);
        Assert.assertSame(Matchs, Objects.requireNonNull(response.getBody()).getData());
    }

    @Test
    public void getMatchesByRound(){
        List<Match> Matchs = getMatchs(1);
        when(matchService.getMatchesByRound(1)).thenReturn(Matchs);
        ResponseEntity<ApiResponse> response = matchController.getMatchesByRound(1);
        Assert.assertNotNull(response);
        Assert.assertSame(Matchs, Objects.requireNonNull(response.getBody()).getData());
    }

   
    private List<Match> getMatchs(int round) {
        List<Match> Matchs = new ArrayList<>();
        Match Match = new Match();
        Match.setId(1);
        Match.setRound(round);
        Match.setFirstRegistrationId(new Registration());
        Matchs.add(Match);
        return Matchs;
    }

}
