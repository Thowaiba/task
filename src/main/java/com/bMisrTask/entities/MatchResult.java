package com.bMisrTask.entities;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

import java.io.Serializable;

@Data
@Entity
@Table(name = "matchResult")
public class MatchResult  implements Serializable {

    @EmbeddedId
    private MatchIdPK matchId;

    @OneToOne
    @JoinColumn(name = "match_id")
    @MapsId( "matchId" )
    private Match match;

    @ManyToOne
    @JoinColumn(name = "winner_registration_id")
    private Registration registration;

    @JoinColumn(name = "numberOfSetsPlayed")
    private Integer numberOfSetsPlayed;

    @Column(name = "is_opponent_retired")
    private String isOpponentRetired;

	public MatchIdPK getMatchId() {
		return matchId;
	}

	public void setMatchId(MatchIdPK matchId) {
		this.matchId = matchId;
	}

	public Match getMatch() {
		return match;
	}

	public void setMatch(Match match) {
		this.match = match;
	}

	public Registration getRegistration() {
		return registration;
	}

	public void setRegistration(Registration registration) {
		this.registration = registration;
	}

	public Integer getNumberOfSetsPlayed() {
		return numberOfSetsPlayed;
	}

	public void setNumberOfSetsPlayed(Integer numberOfSetsPlayed) {
		this.numberOfSetsPlayed = numberOfSetsPlayed;
	}

	public String getIsOpponentRetired() {
		return isOpponentRetired;
	}

	public void setIsOpponentRetired(String isOpponentRetired) {
		this.isOpponentRetired = isOpponentRetired;
	}

	
}
