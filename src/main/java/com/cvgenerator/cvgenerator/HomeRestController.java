package com.cvgenerator.cvgenerator;

import com.cvgenerator.cvgenerator.domain.userinfo.UserInfoService;
import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class HomeRestController {

    private final UserInfoService userInfoService;

    public HomeRestController(UserInfoService userInfoService) {
        this.userInfoService = userInfoService;
    }

    @GetMapping("/email")
    public UserInfoDto getUserInfoByEmail(@RequestParam(name = "email") String userEmail) {
        return userInfoService.getUserInfoByEmail(userEmail);
    }

    @GetMapping(value = "/users")
    public List<UserInfoDto> getUser() {
        return userInfoService.getAllUsers();
    }
}
