package de.makiart.fridgemanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@SpringBootApplication
public class FridgemanagementApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(FridgemanagementApplication.class, args);
    }
}
