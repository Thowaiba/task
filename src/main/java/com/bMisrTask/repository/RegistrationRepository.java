package com.bMisrTask.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.bMisrTask.entities.Registration;

@Repository
public interface RegistrationRepository extends CrudRepository<Registration, Integer> {
}
