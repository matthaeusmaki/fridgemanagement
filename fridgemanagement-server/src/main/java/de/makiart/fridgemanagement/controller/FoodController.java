package de.makiart.fridgemanagement.controller;

import de.makiart.fridgemanagement.entity.FoodItem;
import de.makiart.fridgemanagement.entity.Fridge;
import de.makiart.fridgemanagement.service.FoodCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/food")
public class FoodController {

    private FoodCrudService foodService;

    @Autowired
    public FoodController(FoodCrudService foodService) {
        this.foodService = foodService;
    }

    /**
     * Load all {@link FoodItem}s
     * @return a List of {@link FoodItem}s
     */
    @RequestMapping(method = RequestMethod.GET)
    public List<FoodItem> loadAll() {
        return foodService.loadAll();
    }

    /**
     * Creates a new {@link FoodItem}
     * @param food to persist
     * @return the persisted {@link FoodItem}
     */
    @RequestMapping(method = RequestMethod.POST)
    public FoodItem create(@RequestBody FoodItem food) {
        return foodService.createFoodItem(food);
    }

    /**
     * Delete a {@link FoodItem} with given id
     * @param id of the {@link FoodItem} to delete
     */
    @RequestMapping(method = RequestMethod.DELETE)
    public void delete(@RequestParam("id") String id) {
        foodService.deleteFoodItem(id);
    }
}
