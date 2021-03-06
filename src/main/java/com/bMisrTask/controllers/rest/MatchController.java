package com.bMisrTask.controllers.rest;

import com.bMisrTask.constants.RestURIConstants;
import com.bMisrTask.response.ApiResponse;
import com.bMisrTask.service.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MatchController {

    @Autowired
    private MatchService matchService;

    @GetMapping(RestURIConstants.MATCHES)
    public ResponseEntity<ApiResponse> getMatches() {
        ApiResponse apiResponse =  new ApiResponse();
        apiResponse.setStatusCode(1000);
        apiResponse.setStatusMessage("Success");
        apiResponse.setData(matchService.getMatches());
        return new ResponseEntity<>(apiResponse,HttpStatus.OK);
    }

    @GetMapping(RestURIConstants.MATCHES+RestURIConstants.ROUND)
    public ResponseEntity<ApiResponse> getMatchesByRound(@PathVariable Integer round) {
        ApiResponse apiResponse =  new ApiResponse();
        apiResponse.setStatusCode(1000);
        apiResponse.setStatusMessage("Success");
        apiResponse.setData(matchService.getMatchesByRound(round));
        return new ResponseEntity<>(apiResponse,HttpStatus.OK);
    }

}
