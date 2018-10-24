package de.makiart.fridgemanagement.service;

import de.makiart.fridgemanagement.entity.FoodItem;
import de.makiart.fridgemanagement.entity.Fridge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.rest.webmvc.support.ExcerptProjector;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.apache.commons.lang3.StringUtils.isBlank;

@Service
public class FoodCrudService {

    private FoodRepository repo;

    @Autowired
    public FoodCrudService(FoodRepository repo) {
        this.repo = repo;
    }

    /**
     * Save a new {@link FoodItem}
     *
     * @param food to save
     * @return the persisted {@link FoodItem}
     */
    public FoodItem saveFoodItem(FoodItem food) {
        FoodItem result;
        if (isBlank(food.getId())) {
            result = repo.insert(food);
        } else {
            result = repo.save(food);
        }
        return result;
    }

    /**
     * Load a {@link FoodItem} by id
     *
     * @param id of the requested object
     * @return a {@link Optional} with the requested object or empty
     */
    public Optional<FoodItem> loadById(String id) {
        return repo.findById(id);
    }

    /**
     * Load all {@link FoodItem} of the given {@link Fridge}
     *
     * @param id of the fridge
     * @return a list of {@link FoodItem} or a empty list
     */
    public List<FoodItem> loadAllOfFridge(String id) {
        return repo.findByFridgeId(id).orElse(new ArrayList<>());
    }

    /**
     * Delete {@link FoodItem} by id
     *
     * @param id of the food to delete
     */
    public boolean deleteFoodItem(String id) {
        try {
            repo.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

    /**
     * Move foodItems from originalFridgeId to newFridgeId and returns true if successful
     * @param originalFridgeId the id of the original {@link Fridge}
     * @param newFridgeId the id of the new {@link Fridge}
     * @return true if successful and false otherwise
     */
    public boolean moveFoodItems(String originalFridgeId, String newFridgeId) {
        try {
            System.out.println("move food to fridge with id " + newFridgeId);
            List<FoodItem> items = this.loadAllOfFridge(originalFridgeId);
            if (!items.isEmpty()) {
                items.forEach(item -> item.setFridgeId(newFridgeId));
                this.repo.saveAll(items);
            }
            return true;
        } catch(Exception e) {
            return false;
        }
    }
}
