package com.bMisrTask.service.impl;

import com.bMisrTask.entities.MatchIdPK;
import com.bMisrTask.entities.MatchResult;
import com.bMisrTask.request.TournamentWinnerRequest;
import com.bMisrTask.response.ApiResponse;
import com.bMisrTask.repository.MatchRepository;
import com.bMisrTask.repository.MatchResultRepository;
import com.bMisrTask.repository.RegistrationRepository;
import com.bMisrTask.service.TournamentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Objects;


@Service
public class TournamentServiceImpl implements TournamentService {

    @Autowired
    private MatchResultRepository matchResultRepository;

    @Autowired
    private MatchRepository matchRepository;

    @Autowired
    private RegistrationRepository registrationRepository;

    @Override
    public ApiResponse updateTournamentWinner(TournamentWinnerRequest tournamentWinnerRequest) {
    	ApiResponse apiResponse =  new ApiResponse();
        apiResponse.setStatusCode(4000);
        apiResponse.setStatusMessage("Fail");
        if(Objects.isNull(tournamentWinnerRequest.getMatchId())){
            apiResponse.setData("Match id is mandatory.");
        }else if(Objects.isNull(tournamentWinnerRequest.getRegistrationId())){
            apiResponse.setData("Winner Registration id is mandatory.");
        }else if(Objects.isNull(tournamentWinnerRequest.getNoOfSetPlayed())){
            apiResponse.setData("Number of set played will not be empty.");
        }else if(!matchRepository.existsById(tournamentWinnerRequest.getMatchId())) {
            apiResponse.setData("Match id doesn't found in the system.");
        }else if(!registrationRepository.existsById(tournamentWinnerRequest.getRegistrationId())){
            apiResponse.setData("Registration id doesn't found in the system.");
        }else if(matchResultRepository.existsById(new MatchIdPK(tournamentWinnerRequest.getMatchId()))){
            apiResponse.setData("Winner is already updated in the system with respect to given match id.");
        }else{
        	MatchResult matchResult = new MatchResult();
            matchResult.setMatchId(new MatchIdPK(tournamentWinnerRequest.getMatchId()));
            matchResult.setMatch(matchRepository.findById(tournamentWinnerRequest.getMatchId()).get());
            matchResult.setIsOpponentRetired(tournamentWinnerRequest.isOpponentRetired());
            matchResult.setRegistration(registrationRepository.findById(tournamentWinnerRequest.getRegistrationId()).get());
            matchResult.setNumberOfSetsPlayed(tournamentWinnerRequest.getNoOfSetPlayed());
            matchResultRepository.save(matchResult);
            apiResponse.setStatusCode(1000);
            apiResponse.setStatusMessage("Success");
            apiResponse.setData("League champion updated successfully.");
        }
        return apiResponse;
    }
}
