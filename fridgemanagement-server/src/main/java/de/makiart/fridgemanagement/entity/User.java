package de.makiart.fridgemanagement.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

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
}
