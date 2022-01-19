package com.bMisrTask.repository;

import com.bMisrTask.entities.Registration;
import com.bMisrTask.entities.RegistrationPlayer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface RegistrationPlayerRepository extends CrudRepository<RegistrationPlayer,Long> {
    List<RegistrationPlayer> findAllByRegistrationIn(List<Registration> registration);
}
