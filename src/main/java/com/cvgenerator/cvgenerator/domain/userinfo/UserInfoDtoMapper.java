package com.cvgenerator.cvgenerator.domain.userinfo;

import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;

public class UserInfoDtoMapper {

    static UserInfoDto map(UserInfo userInfo) {
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

    public static UserInfo map(UserInfoDto userInfoDto) {
        UserInfo userInfo = new UserInfo();
        userInfo.setId(userInfoDto.getId());
        userInfo.setFirstName(userInfoDto.getFirstName());
        userInfo.setLastName(userInfoDto.getLastName());
        userInfo.setEmail(userInfoDto.getEmail());
        userInfo.setPhoneNumber(userInfoDto.getPhoneNumber());
        userInfo.setSummary(userInfoDto.getSummary());

        return userInfo;
    }
}
