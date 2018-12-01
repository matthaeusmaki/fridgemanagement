package de.makiart.fridgemanagement.entity;

import de.makiart.fridgemanagement.enums.Role;
import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document
@EqualsAndHashCode
@ToString
@Getter
@Setter
@NoArgsConstructor
public class User {

    @Id
    private String id;

    private String username;
    private String password;
    private List<Role> roles;
}
