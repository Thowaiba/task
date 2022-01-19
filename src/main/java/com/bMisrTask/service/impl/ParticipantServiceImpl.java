package com.bMisrTask.service.impl;

import com.bMisrTask.entities.PlayingIn;
import com.bMisrTask.entities.Registration;
import com.bMisrTask.entities.RegistrationPlayer;
import com.bMisrTask.response.ParticipantResponse;
import com.bMisrTask.repository.PlayingInRepository;
import com.bMisrTask.repository.RegistrationPlayerRepository;
import com.bMisrTask.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.CollectionUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ParticipantServiceImpl implements ParticipantService {

    @Autowired
    private PlayingInRepository playingInRepository;

    @Autowired
    private RegistrationPlayerRepository registrationPlayerRepository;

    @Override
    public List<ParticipantResponse> getAllParticipants() {
        List<ParticipantResponse> participantResponses = new ArrayList<>();

        List<PlayingIn> playingIns = playingInRepository.findAll();
        if(!CollectionUtils.isEmpty(playingIns)){
            List<Registration> registrations = playingIns.stream().map(PlayingIn::getRegistration).collect(Collectors.toList());
            List<RegistrationPlayer> registrationPlayers = registrationPlayerRepository.findAllByRegistrationIn(registrations);
            participantResponses = registrationPlayers.stream().map(x->{
                ParticipantResponse participantResponse = new ParticipantResponse();
                participantResponse.setFirstName(x.getPlayer().getFirstName());
                participantResponse.setLastName(x.getPlayer().getLastName());
                participantResponse.setEmail(x.getPlayer().getEmail());
                return participantResponse;
            }).collect(Collectors.toList());
        }

        return participantResponses;
    }
}
