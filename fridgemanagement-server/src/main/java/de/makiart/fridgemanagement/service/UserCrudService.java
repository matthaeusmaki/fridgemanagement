package de.makiart.fridgemanagement.service;

import de.makiart.fridgemanagement.entity.User;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserCrudService {

    private UserRepository repo;

    @Autowired
    public UserCrudService(UserRepository repo) {
        this.repo = repo;
    }

    public User saveUser(User user) {
        System.out.println("Save user: " + user.getUsername());
        return StringUtils.isBlank(user.getId()) ? repo.insert(user) : repo.save(user);
    }

    public User findByUsername(String username) {
        return repo.findByUsername(username);
    }
}
