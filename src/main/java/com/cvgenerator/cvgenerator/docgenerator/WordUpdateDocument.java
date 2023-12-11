package com.cvgenerator.cvgenerator.docgenerator;

import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.xwpf.usermodel.XWPFDocument;
import org.apache.poi.xwpf.usermodel.XWPFParagraph;
import org.apache.poi.xwpf.usermodel.XWPFRun;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.List;

public class WordUpdateDocument {

    public static ByteArrayInputStream generateWord(UserInfoDto userInfoDto)
            throws FileNotFoundException, IOException,
            InvalidFormatException {

        String input = "src/main/resources/file/cvr.docx";
        String output = "src/test/java/resources/cvr2.docx";

        try (XWPFDocument doc = new XWPFDocument(
                Files.newInputStream(Paths.get(input)))
        ) {

            List<XWPFParagraph> xwpfParagraphList = doc.getParagraphs();
            //Iterate over paragraph list and check for the replaceable text in each paragraph
            for (XWPFParagraph xwpfParagraph : xwpfParagraphList) {
                for (XWPFRun xwpfRun : xwpfParagraph.getRuns()) {
                    String docText = xwpfRun.getText(0);
                    //replacement and setting position
                    //TODO: HashMap with key and value
                    docText = docText.replace("${name}", userInfoDto.getFirstName() + " " + userInfoDto.getLastName());
                    docText = docText.replace("${summary}", userInfoDto.getSummary());
                    docText = docText.replace("${email}", userInfoDto.getEmail());
                    docText = docText.replace("${phone}", userInfoDto.getPhoneNumber());
                    //designation
                    docText = docText.replace("${designation}", userInfoDto.getDesignationName());
                    docText = docText.replace("${level}", userInfoDto.getLevelOfExperienceName());

                    xwpfRun.setText(docText, 0);
                }
            }

            // save the docs
            try (FileOutputStream out = new FileOutputStream(output)) {
                doc.write(out);
            }

            ByteArrayOutputStream b = new ByteArrayOutputStream();
            doc.write(b);
            return new ByteArrayInputStream(b.toByteArray());

        }
    }
}
