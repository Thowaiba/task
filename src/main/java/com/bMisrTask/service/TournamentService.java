package com.bMisrTask.service;

import org.springframework.stereotype.Service;

import com.bMisrTask.request.TournamentWinnerRequest;
import com.bMisrTask.response.ApiResponse;

@Service
public interface TournamentService {
    ApiResponse updateTournamentWinner(TournamentWinnerRequest tournamentWinnerRequest);
}
