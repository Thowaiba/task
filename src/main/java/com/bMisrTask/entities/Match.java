package com.bMisrTask.entities;

import lombok.Data;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import java.io.Serializable;
import java.util.List;

@Data
@Entity
@Table(name = "matches")
public class Match  implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Basic(optional = false)
	@Column(name = "id")
    private Integer id;
    @ManyToOne
    @JoinColumn(name = "tournament_playing_category_id")
    private TournamentPlayingCategory tournamentPlayingCategory;
    @ManyToOne
    @JoinColumn(name = "first_registration_id")
    private Registration firstRegistrationId;
    @ManyToOne
    @JoinColumn(name = "second_registration_id")
    private Registration secondRegistrationId;
    
    @Column(name = "round")
    private Integer round;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public TournamentPlayingCategory getTournamentPlayingCategory() {
		return tournamentPlayingCategory;
	}
	public void setTournamentPlayingCategory(TournamentPlayingCategory tournamentPlayingCategory) {
		this.tournamentPlayingCategory = tournamentPlayingCategory;
	}
	public Registration getFirstRegistrationId() {
		return firstRegistrationId;
	}
	public void setFirstRegistrationId(Registration firstRegistrationId) {
		this.firstRegistrationId = firstRegistrationId;
	}
	public Registration getSecondRegistrationId() {
		return secondRegistrationId;
	}
	public void setSecondRegistrationId(Registration secondRegistrationId) {
		this.secondRegistrationId = secondRegistrationId;
	}
	public Integer getRound() {
		return round;
	}
	public void setRound(Integer round) {
		this.round = round;
	}

}
