package com.cvgenerator.cvgenerator;

import com.cvgenerator.cvgenerator.docgenerator.WordHelper;
import com.cvgenerator.cvgenerator.docgenerator.WordUpdateDocument;
import com.cvgenerator.cvgenerator.domain.userinfo.UserInfoService;
import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import lombok.AllArgsConstructor;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.io.ByteArrayInputStream;
import java.io.IOException;

@AllArgsConstructor
@RestController
@RequestMapping("/api")
public class WordController {

    UserInfoService userInfoService;

    @GetMapping(value = "/word", produces = "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    public ResponseEntity<InputStreamResource> word()
            throws IOException, InvalidFormatException {

        ByteArrayInputStream bis = WordHelper.generateWord();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition",
                "inline; filename=mydoc.docx");
        return ResponseEntity.ok().headers(headers).
                body(new InputStreamResource(bis));
    }

//    @GetMapping(value = "/worduser", produces = "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
//    public ResponseEntity<InputStreamResource> wordByEmail(@RequestParam(name = "email") String userEmail)
//            throws IOException, InvalidFormatException {
//
//        UserInfoDto userInfoDtoByEmail = userInfoService.getUserInfoByEmail(userEmail);
//
//        ByteArrayInputStream bis = WordUserInfo.generateWord(userInfoDtoByEmail);
//        HttpHeaders headers = new HttpHeaders();
//        headers.add("Content-Disposition",
//                "inline; filename=" + userInfoDtoByEmail.getFirstName() + userInfoDtoByEmail.getLastName() + "mydoc.docx");
//        return ResponseEntity.ok().headers(headers).
//                body(new InputStreamResource(bis));
//    }

    @GetMapping(value = "/worduser", produces = "application/vnd.openxmlformats-officedocument.wordprocessingml.document")
    public ResponseEntity<InputStreamResource> wordByEmail(@RequestParam(name = "email") String userEmail)
            throws IOException, InvalidFormatException {

        UserInfoDto userInfoDtoByEmail = userInfoService.getUserInfoByEmail(userEmail);

        ByteArrayInputStream bis = WordUpdateDocument.generateWord(userInfoDtoByEmail);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition",
                "inline; filename=" + userInfoDtoByEmail.getFirstName() + userInfoDtoByEmail.getLastName() + "mydoc.docx");
        return ResponseEntity.ok().headers(headers).
                body(new InputStreamResource(bis));
    }
}