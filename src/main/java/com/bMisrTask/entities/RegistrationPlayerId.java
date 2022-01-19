package com.bMisrTask.entities;

import java.io.Serializable;

public class RegistrationPlayerId  implements Serializable {
    private Registration registration;
    private Player player;
	public Registration getRegistration() {
		return registration;
	}
	public void setRegistration(Registration registration) {
		this.registration = registration;
	}
	public Player getPlayer() {
		return player;
	}
	public void setPlayer(Player player) {
		this.player = player;
	}
    
}
