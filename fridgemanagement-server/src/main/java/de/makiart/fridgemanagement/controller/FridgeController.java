package de.makiart.fridgemanagement.controller;

import de.makiart.fridgemanagement.entity.FoodItem;
import de.makiart.fridgemanagement.entity.Fridge;
import de.makiart.fridgemanagement.service.FoodCrudService;
import de.makiart.fridgemanagement.service.FridgeCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * REST controller to create and change a fridge
 */
@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping(path = "/fridge")
public class FridgeController {

    private FridgeCrudService service;
    private FoodCrudService foodService;

    @Autowired
    public FridgeController(FridgeCrudService service, FoodCrudService foodService) {
        this.service = service;
        this.foodService = foodService;
    }

    /**
     * Load all {@link Fridge} elements
     * @return a list of {@link Fridge}
     */
    @RequestMapping(method = RequestMethod.GET)
    public List<Fridge> loadAll() {
        return service.loadAll();
    }

    /**
     * Create a new {@link Fridge} element
     * @param fridge to be saved
     * @return the created fridge
     */
    @RequestMapping(method = RequestMethod.POST)
    public Fridge create(@RequestBody Fridge fridge) {
        return service.saveFridge(fridge);
    }

    /**
     * Update an existing {@link Fridge} element
     * @param fridge to be saved
     * @return the updated fridge
     */
    @RequestMapping(method = RequestMethod.PUT)
    public Fridge update(@RequestBody Fridge fridge) {
        return service.saveFridge(fridge);
    }

    /**
     * Delete a {@link Fridge} by its id
     * @param id of the {@link Fridge} to delete
     */
    @RequestMapping(method = RequestMethod.DELETE)
    public void delete(@RequestParam("id") String id) {
        service.deleteFridgeById(id);
    }

    @RequestMapping(path = "/{id}")
    public ResponseEntity<Fridge> loadById(@PathVariable String id) {
        Fridge f = service.loadById(id);
        return new ResponseEntity<>(f, f != null ? HttpStatus.OK : HttpStatus.NOT_FOUND);
    }

    /**
     * Load all {@link FoodItem} of a {@link Fridge}
     * @param id of the fridge
     * @return a list of {@link FoodItem} or empty list
     */
    @RequestMapping(path = "/items", method = RequestMethod.GET)
    public List<FoodItem> loadAllByFridge(@RequestParam("id") String id) {
        return foodService.loadAllOfFridge(id);
    }
}
