package com.bMisrTask.controllers.rest;

import com.bMisrTask.constants.RestURIConstants;
import com.bMisrTask.response.ApiResponse;
import com.bMisrTask.service.ParticipantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ParticipantController {

    @Autowired
    private ParticipantService participantService;

    @GetMapping(RestURIConstants.PARTICIPANTS)
    public ResponseEntity<ApiResponse> getParticipants() {
        ApiResponse apiResponse =  new ApiResponse();
        apiResponse.setStatusCode(1000);
        apiResponse.setStatusMessage("Success");
        apiResponse.setData(participantService.getAllParticipants());
        return new ResponseEntity<>(apiResponse,HttpStatus.OK);
    }

    @GetMapping("/")
    public ResponseEntity<String> defaultMethod() {
        return new ResponseEntity<>("Welcome to the game of table tennis!!!", HttpStatus.OK);
    }

}
