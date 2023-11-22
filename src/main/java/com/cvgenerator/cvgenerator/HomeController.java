package com.cvgenerator.cvgenerator;

import com.cvgenerator.cvgenerator.domain.userinfo.UserInfo;
import com.cvgenerator.cvgenerator.domain.userinfo.UserInfoRepository;
import com.cvgenerator.cvgenerator.domain.userinfo.UserInfoService;
import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class HomeController {

    private final UserInfoService userInfoService;

    @Value("${app.version}")
    private String appVersion;

    public HomeController(UserInfoService userInfoService, UserInfoRepository userInfoRepository) {
        this.userInfoService = userInfoService;
    }

    @GetMapping("/")
    public String showEmailForm(Model model) {
        model.addAttribute("emailForm", new UserInfo());
        return "index";
    }

    @PostMapping("/submit")
    public String submitEmailForm(Model model, @ModelAttribute("emailForm") UserInfo userInfo) {
        String userEmail = userInfo.getEmail();

        UserInfoDto userInfoDto = userInfoService.getUserInfoByEmail(userEmail);

        model.addAttribute("userInfoDto", userInfoDto);
        model.addAttribute("appVersion", appVersion);
        return "profile-edit";
    }

//    @GetMapping("/email")
//    public String getUserInfoEmail(Model model, @RequestParam(name = "email") String userEmail) {
//        UserInfoDto userInfoDto = userInfoService.getUserInfoByEmail(userEmail);
//
//        model.addAttribute("userInfo", userInfoDto);
//        return "index";
//    }
}
