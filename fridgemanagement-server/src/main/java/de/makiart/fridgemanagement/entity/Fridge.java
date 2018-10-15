package de.makiart.fridgemanagement.entity;

import lombok.*;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Getter @Setter
@NoArgsConstructor
@ToString @EqualsAndHashCode
@Document
public class Fridge {

    @Id
    private String id;

    // name of the fridge
    private String name;

    // description of the fridge
    private String description;
}
