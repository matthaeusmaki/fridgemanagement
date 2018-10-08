package de.makiart.fridgemanagement.service;

import de.makiart.fridgemanagement.entity.FoodItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends MongoRepository<FoodItem, String> {


}
