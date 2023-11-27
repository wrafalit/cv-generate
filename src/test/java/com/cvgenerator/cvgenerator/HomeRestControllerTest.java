package com.cvgenerator.cvgenerator;

import com.cvgenerator.cvgenerator.domain.userinfo.UserInfoService;
import com.cvgenerator.cvgenerator.domain.userinfo.dto.UserInfoDto;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.hamcrest.Matchers.is;
import static org.mockito.Mockito.*;

@WebMvcTest(HomeRestController.class) // YourController to nazwa Twojego kontrolera
class HomeRestControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserInfoService userInfoService;

    @Test
    void whenGetUserInfoByEmail_thenReturnUserInfoDto() throws Exception {
        // given
        String email = "example@email.com";
        UserInfoDto userInfoDto = new UserInfoDto();

        when(userInfoService.getUserInfoByEmail(email)).thenReturn(userInfoDto);

        mockMvc.perform(MockMvcRequestBuilders.get("/email")
                        .param("email", email)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.jsonPath("$.firstName", is(userInfoDto.getFirstName())))
                .andExpect(MockMvcResultMatchers.jsonPath("$.lastName", is(userInfoDto.getLastName())))
                // Dodaj więcej asercji, jeśli masz więcej pól w UserInfoDto
                .andReturn();

        verify(userInfoService, times(1)).getUserInfoByEmail(email);

    }


}