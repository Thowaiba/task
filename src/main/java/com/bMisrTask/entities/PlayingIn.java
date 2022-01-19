package com.bMisrTask.entities;


import lombok.Data;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import java.io.Serializable;

@Data
@Entity
@Table(name = "PlayingIn")
public class PlayingIn  implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Basic(optional = false)
   	@Column(name = "id")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "registration_id")
    private Registration registration;
    
    @Column(name = "seed")
    private Integer seed;

    @ManyToOne
    @JoinColumn(name = "tournament_playing_category_id")
    private TournamentPlayingCategory tournamentPlayingCategory;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Registration getRegistration() {
		return registration;
	}

	public void setRegistration(Registration registration) {
		this.registration = registration;
	}

	public Integer getSeed() {
		return seed;
	}

	public void setSeed(Integer seed) {
		this.seed = seed;
	}

	public TournamentPlayingCategory getTournamentPlayingCategory() {
		return tournamentPlayingCategory;
	}

	public void setTournamentPlayingCategory(TournamentPlayingCategory tournamentPlayingCategory) {
		this.tournamentPlayingCategory = tournamentPlayingCategory;
	}
}
