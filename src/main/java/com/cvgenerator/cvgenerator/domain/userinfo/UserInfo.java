package com.cvgenerator.cvgenerator.domain.userinfo;

import com.cvgenerator.cvgenerator.domain.designation.Designation;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    @ManyToOne
    @JoinColumn(name = "designation_id", referencedColumnName = "id")
    private Designation designation;
    @ManyToOne
    @JoinColumn(name = "level_of_experience_id", referencedColumnName = "id")
    private LevelOfExperience levelOfExperience;
    private String summary;
}
