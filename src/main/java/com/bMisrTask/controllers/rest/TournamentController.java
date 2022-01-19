package com.bMisrTask.controllers.rest;

import com.bMisrTask.constants.RestURIConstants;
import com.bMisrTask.request.TournamentWinnerRequest;
import com.bMisrTask.response.ApiResponse;
import com.bMisrTask.service.MatchService;
import com.bMisrTask.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TournamentController {

    @Autowired
    private TournamentService tournamentService;

    @PostMapping(value = RestURIConstants.TOURNAMENT, consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<ApiResponse> updateTournamentWinner(@RequestBody TournamentWinnerRequest tournamentWinnerRequest) {
    	ApiResponse apiResponse = tournamentService.updateTournamentWinner(tournamentWinnerRequest);
        return new ResponseEntity<>(apiResponse,apiResponse.getStatusCode()==1000?HttpStatus.OK:HttpStatus.NOT_ACCEPTABLE);
    }

}
