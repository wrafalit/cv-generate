package com.cvgenerator.cvgenerator.domain.util;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfoForm {

    String firstName;
    String lastName;
    String email;
    String phoneNumber;
    String designationName;
    String levelOfExperienceName;
    String summary;
}
