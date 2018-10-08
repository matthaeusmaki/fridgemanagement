package de.makiart.fridgemanagement.service;

import de.makiart.fridgemanagement.entity.FoodItem;
import de.makiart.fridgemanagement.entity.Fridge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FoodCrudService {

    private FoodRepository repo;

    @Autowired
    public FoodCrudService(FoodRepository repo) {
        this.repo = repo;
    }

    /**
     * Save a new {@link FoodItem}
     * @param food to save
     * @return the persisted {@link FoodItem}
     */
    public FoodItem createFoodItem(FoodItem food) {
        return repo.save(food);
    }

    /**
     * Load a {@link FoodItem} by id
     * @param id of the requested object
     * @return a {@link Optional} with the requested object or empty
     */
    public Optional<FoodItem> loadById(String id) {
        return repo.findById(id);
    }

    /**
     * Load all {@link FoodItem}s
     * @return a list of {@link FoodItem}
     */
    public List<FoodItem> loadAll() {
        return repo.findAll();
    }

    /**
     * Load all {@link FoodItem} of the given {@link Fridge}
     * @param id of the fridge
     * @return a list of {@link FoodItem} or a empty list
     */
    public List<FoodItem> loadAllOfFridge(String id) {
        // TODO
        return new ArrayList<>();
    }

    /**
     * Delete {@link FoodItem} by id
     * @param id of the food to delete
     */
    public void deleteFoodItem(String id) {
        repo.deleteById(id);
    }
}
