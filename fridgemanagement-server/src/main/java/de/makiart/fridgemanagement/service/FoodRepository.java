package de.makiart.fridgemanagement.service;

import de.makiart.fridgemanagement.entity.FoodItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FoodRepository extends MongoRepository<FoodItem, String>, QuerydslPredicateExecutor<FoodItem> {

    Optional<List<FoodItem>> findByFridgeId(String id);

    Optional<List<FoodItem>> findByName(String id);
}
