package de.makiart.fridgemanagement.service;

import de.makiart.fridgemanagement.entity.Fridge;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FridgeRepository extends MongoRepository<Fridge, String> {

}
