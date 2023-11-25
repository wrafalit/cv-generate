package com.cvgenerator.cvgenerator;

import com.cvgenerator.cvgenerator.domain.userinfo.UserInfoService;
import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class HomeRestController {

    private final UserInfoService userInfoService;

    @Value("${app.version}")
    private String appVersion;

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

    @GetMapping(value = "/info", produces = "application/json")
    public Map<String, String> getInfo() {
        Map<String, String> versionInfo = new HashMap<>();
        versionInfo.put("version", appVersion);
        return versionInfo;
    }
}
