package de.makiart.fridgemanagement.security;

import org.apache.commons.lang3.NotImplementedException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Service;

@Service
public class MyUserDetails {

    public UserDetails loadUserByUsername(String username) {
        throw new NotImplementedException("Implement me");
    }
}
