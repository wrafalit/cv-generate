package com.cvgenerator.cvgenerator.domain.designation;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DesignationRepository extends JpaRepository<Designation, Long> {
    Optional<Designation> findByName(String name);
}
