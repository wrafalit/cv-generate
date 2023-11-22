package com.cvgenerator.cvgenerator.domain.userinfo.dto;

public record UserInfoDto(
        Long id,
        String firstName,
        String lastName,
        String email,
        String phoneNumber,
        String designationName,
        String levelOfExperienceName,
        String summary
) {
}
