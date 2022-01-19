package com.bMisrTask.request;

import com.fasterxml.jackson.databind.PropertyNamingStrategy;
import com.fasterxml.jackson.databind.annotation.JsonNaming;
import lombok.Data;

@Data
@JsonNaming(PropertyNamingStrategy.SnakeCaseStrategy.class)
public class TournamentWinnerRequest {
    private Integer matchId;
    private Integer registrationId;
    private Integer noOfSetPlayed;
    private String isOpponentRetired;
	public Integer getMatchId() {
		return matchId;
	}
	public void setMatchId(Integer matchId) {
		this.matchId = matchId;
	}
	public Integer getRegistrationId() {
		return registrationId;
	}
	public void setRegistrationId(Integer registrationId) {
		this.registrationId = registrationId;
	}
	public Integer getNoOfSetPlayed() {
		return noOfSetPlayed;
	}
	public void setNoOfSetPlayed(Integer noOfSetPlayed) {
		this.noOfSetPlayed = noOfSetPlayed;
	}
	public String isOpponentRetired() {
		return isOpponentRetired;
	}
	public void setOpponentRetired(String isOpponentRetired) {
		this.isOpponentRetired = isOpponentRetired;
	}
}
