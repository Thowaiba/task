package com.bMisrTask.entities;

import java.io.Serializable;
import java.util.Date;

import lombok.Data;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Data
@Entity
@Table(name = "Tournament")
public class Tournament  implements Serializable {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;
    @Column(name = "tournamentName")
    private String tournamentName;
    @Column(name = "location")
    private String location;
    @Temporal(TemporalType.DATE)
    @Column(name = "startDate")
    private Date startDate;
    @Temporal(TemporalType.DATE)
    @Column(name = "endDate")
    private Date endDate;
    @Column(name = "numberOfRounds")
    private Integer numberOfRounds;
    @ManyToOne
    @JoinColumn(name = "tournament_type_id")
    private TournamentType tournamentType;
    @ManyToOne
    @JoinColumn(name = "surface_type_id")
    private SurfaceType surfaceType;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getTournamentName() {
		return tournamentName;
	}
	public void setTournamentName(String tournamentName) {
		this.tournamentName = tournamentName;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Date getStartDate() {
		return startDate;
	}
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}
	public Date getEndDate() {
		return endDate;
	}
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}
	public Integer getNumberOfRounds() {
		return numberOfRounds;
	}
	public void setNumberOfRounds(Integer numberOfRounds) {
		this.numberOfRounds = numberOfRounds;
	}
	public TournamentType getTournamentType() {
		return tournamentType;
	}
	public void setTournamentType(TournamentType tournamentType) {
		this.tournamentType = tournamentType;
	}
	public SurfaceType getSurfaceType() {
		return surfaceType;
	}
	public void setSurfaceType(SurfaceType surfaceType) {
		this.surfaceType = surfaceType;
	}
    
}
