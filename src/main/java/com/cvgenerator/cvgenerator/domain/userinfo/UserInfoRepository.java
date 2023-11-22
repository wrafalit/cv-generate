package com.cvgenerator.cvgenerator.domain.userinfo;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserInfoRepository extends JpaRepository<UserInfo, Long> {

    Optional<UserInfo> findByFirstName(String firstName);

    Optional<UserInfo> findByEmail(String email);
}
