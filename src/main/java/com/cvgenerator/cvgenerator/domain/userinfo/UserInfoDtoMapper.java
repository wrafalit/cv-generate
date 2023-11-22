package com.cvgenerator.cvgenerator.domain.userinfo;

import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;

public class UserInfoDtoMapper {

    static UserInfoDto map(UserInfo userInfo) {
        userInfo.getId();
        return new UserInfoDto(
                userInfo.getId(),
                userInfo.getFirstName(),
                userInfo.getLastName(),
                userInfo.getEmail(),
                userInfo.getPhoneNumber(),
                userInfo.getDesignation().getName(),
                userInfo.getLevelOfExperience().getName(),
                userInfo.getSummary()
        );
    }
}
