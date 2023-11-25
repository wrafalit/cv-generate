package com.cvgenerator.cvgenerator;

import com.cvgenerator.cvgenerator.domain.userinfo.UserInfoRepository;
import com.cvgenerator.cvgenerator.domain.userinfo.UserInfoService;
import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import com.cvgenerator.cvgenerator.domain.util.UserInfoForm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class HomeController {

    private final UserInfoService userInfoService;

    @Value("${app.version}")
    private String appVersion;

    public HomeController(UserInfoService userInfoService, UserInfoRepository userInfoRepository) {
        this.userInfoService = userInfoService;
    }

    @GetMapping("/")
    public String showEmailForm() {
        return "index";
    }

    @GetMapping("/submit")
    public String submitEmailForm(Model model, @ModelAttribute("emailForm") UserInfoForm userInfoForm) {

        UserInfoDto userInfoDto = userInfoService.getUserInfoByEmail(userInfoForm.getEmail());

        model.addAttribute("userInfoDto", userInfoDto);
        model.addAttribute("appVersion", appVersion);
        return "profile-edit";
    }

//    @PostMapping("/submit")
//    public String postEdit(Model model, @ModelAttribute UserInfoDto userInfoDto) {
//        userInfoService.saveUserInfo(userInfoDto);
//        return "redirect:/submit";
//    }
}
