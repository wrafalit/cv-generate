package com.cvgenerator.cvgenerator.domain.userinfo;

import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserInfoService {

    private final UserInfoRepository userInfoRepository;

    public UserInfoService(UserInfoRepository userInfoRepository) {
        this.userInfoRepository = userInfoRepository;
    }

    public UserInfoDto getUserInfoByEmail(String email) {
        return userInfoRepository.findByEmail(email)
                .map(UserInfoDtoMapper::map)
                .orElseThrow(() -> new IllegalStateException("User with email " + email + " does not exist"));
    }

    public List<UserInfoDto> getAllUsers() {
        return userInfoRepository.findAll()
                .stream()
                .map(UserInfoDtoMapper::map)
                .collect(Collectors.toList());
    }
}
