package de.makiart.fridgemanagement.service;

import de.makiart.fridgemanagement.entity.Fridge;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FridgeCrudService {

    private FridgeRepository repo;

    @Autowired
    public FridgeCrudService(FridgeRepository repo) {
        this.repo = repo;
    }

    /**
     * Save a fridge and return the persisted object
     * @param fridge to save
     * @return the persisted fridge
     */
    public Fridge createFridge(Fridge fridge) {
        return repo.save(fridge);
    }

    /**
     * Load all {@link Fridge}s
     * @return a list of {@link Fridge}
     */
    public List<Fridge> loadAll() {
        return repo.findAll();
    }

    /**
     * Load {@link Fridge} by its id
     * @param id of the requested {@link Fridge}
     * @return a {@link Optional} with the requested {@link Fridge} or empty
     */
    public Fridge loadById(String id) {
        return repo.findById(id).orElse(null);
    }

    /**
     * Delete {@link Fridge} with requested id
     * @param id of the {@link Fridge} to delete
     */
    public void deleteFridgeById(String id) {
        repo.deleteById(id);
    }


}
