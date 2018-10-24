package de.makiart.fridgemanagement.controller;

import de.makiart.fridgemanagement.entity.FoodItem;
import de.makiart.fridgemanagement.service.FoodCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "/food")
public class FoodController {

    private FoodCrudService foodService;

    @Autowired
    public FoodController(FoodCrudService foodService) {
        this.foodService = foodService;
    }

    @RequestMapping(method = RequestMethod.GET)
    public List<FoodItem> loadByFridgeId(@RequestParam String id) {
        return foodService.loadAllOfFridge(id);
    }

    /**
     * Creates a new {@link FoodItem}
     * @param food to persist
     * @return the persisted {@link FoodItem}
     */
    @RequestMapping(method = RequestMethod.POST)
    public FoodItem create(@RequestBody FoodItem food) {
        return foodService.saveFoodItem(food);
    }

    /**
     * Updates an existing {@link FoodItem}
     * @param food to update
     * @return the updated {@link FoodItem}
     */
    @RequestMapping(method = RequestMethod.PUT)
    public FoodItem update(@RequestBody FoodItem food) {
        return foodService.saveFoodItem(food);
    }

    /**
     * Delete a {@link FoodItem} with given id
     * @param id of the {@link FoodItem} to delete
     */
    @RequestMapping(method = RequestMethod.DELETE)
    public Boolean delete(@RequestParam("id") String id) {
        return foodService.deleteFoodItem(id);
    }
}
