package de.makiart.fridgemanagement.entity;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@ToString
@EqualsAndHashCode
@Document
public class FoodItem {

    @Id
    private String id;

    // Name of the food
    private String name;

    // Id of the barcode
    private String barcodeId;

    // Date when this food was opened
    private LocalDate openDate;

    // Expiration date of the food
    private LocalDate expirationDate;

    private String fridgeId;

    // The date on which the food was added
    private LocalDate startDate;

}
