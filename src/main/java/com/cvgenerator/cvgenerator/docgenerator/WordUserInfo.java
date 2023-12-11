package com.cvgenerator.cvgenerator.docgenerator;


import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.xwpf.usermodel.*;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.FileNotFoundException;
import java.io.IOException;

public class WordUserInfo {

    static String imgFile = "src/main/resources/static/img/avatar.png";

    public static ByteArrayInputStream generateWord(UserInfoDto userInfoDto)
            throws FileNotFoundException, IOException,
            InvalidFormatException {

        try (XWPFDocument doc = new XWPFDocument()) {

            XWPFParagraph p1 = doc.createParagraph();
            p1.setAlignment(ParagraphAlignment.CENTER);
            // Set Text to Bold and font size to 22 for first paragraph
            XWPFRun r1 = p1.createRun();
            r1.setBold(true);
            r1.setItalic(true);
            r1.setFontSize(22);
            r1.setText(userInfoDto.getFirstName() + " " + userInfoDto.getLastName());
            r1.setFontFamily("Courier");
            r1.setColor("008000");
            r1.addBreak();

            XWPFParagraph p3 = doc.createParagraph();
            p3.setAlignment(ParagraphAlignment.CENTER);
            XWPFRun r3 = p3.createRun();
            r3.setBold(true);
            r3.setItalic(true);
            r3.setFontSize(22);
            r3.setText("Table");
            r3.setFontFamily("Arial");

            XWPFTable table = doc.createTable();
            // Creating first Row
            XWPFTableRow row1 = table.getRow(0);
            row1.getCell(0).setText("Email");
            row1.addNewTableCell().setText(userInfoDto.getEmail());


            // Creating second Row
            XWPFTableRow row2 = table.createRow();
            row2.getCell(0).setText("Phone");
            row2.getCell(1).setText(userInfoDto.getPhoneNumber());


            ByteArrayOutputStream b = new ByteArrayOutputStream();
            doc.write(b);
            return new ByteArrayInputStream(b.toByteArray());
        }

    }
}