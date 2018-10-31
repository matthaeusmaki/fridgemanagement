package de.makiart.fridgemanagement.service;

import de.makiart.fridgemanagement.entity.Fridge;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FridgeCrudService {

    private FridgeRepository repo;
    private FoodCrudService foodService;

    @Autowired
    public FridgeCrudService(FridgeRepository repo, FoodCrudService foodService) {
        this.repo = repo;
        this.foodService = foodService;
    }

    /**
     * Save a fridge and return the persisted object
     *
     * @param fridge to save
     * @return the persisted fridge
     */
    public Fridge saveFridge(Fridge fridge) {
        if (StringUtils.isBlank(fridge.getId())) {
            return repo.insert(fridge);
        } else {
            return repo.save(fridge);
        }
    }

    /**
     * Load all {@link Fridge}s
     *
     * @return a list of {@link Fridge}
     */
    public List<Fridge> loadAll() {
        return repo.findAll();
    }

    /**
     * Load {@link Fridge} by its id
     *
     * @param id of the requested {@link Fridge}
     * @return a {@link Optional} with the requested {@link Fridge} or empty
     */
    public Fridge loadById(String id) {
        return repo.findById(id).orElse(null);
    }

    /**
     * Delete {@link Fridge} with requested id
     *
     * @param fridgeToDeleteId id of the {@link Fridge} to delete
     * @param newFridgeId      id of the {@link Fridge} the items are set
     */
    public boolean deleteFridgeById(String fridgeToDeleteId, String newFridgeId) {
        try {
            this.foodService.moveFoodItems(fridgeToDeleteId, newFridgeId);
            System.out.println("delete fridge with id " + fridgeToDeleteId);
            repo.deleteById(fridgeToDeleteId);
            return true;
        } catch (Exception e) {
            return false;
        }
    }


}
