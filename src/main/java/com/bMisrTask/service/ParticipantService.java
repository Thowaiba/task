package com.bMisrTask.service;

import com.bMisrTask.response.ParticipantResponse;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ParticipantService {
    List<ParticipantResponse> getAllParticipants();
}
