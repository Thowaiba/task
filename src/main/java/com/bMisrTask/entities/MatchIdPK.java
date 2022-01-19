package com.bMisrTask.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class MatchIdPK implements Serializable {
	@Column(name = "Id")
    private Integer matchId;

	public MatchIdPK(Integer matchId) {
		super();
		this.matchId = matchId;
	}

	public Integer getMatchId() {
		return matchId;
	}

	public void setMatchId(Integer matchId) {
		this.matchId = matchId;
	}
    
}
