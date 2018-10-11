package de.makiart.fridgemanagement.service;

import com.mongodb.Mongo;
//import com.mongodb.MongoClient;
//import de.flapdoodle.embed.mongo.MongodExecutable;
import de.flapdoodle.embed.mongo.MongodProcess;
//import de.flapdoodle.embed.mongo.MongodStarter;
//import de.flapdoodle.embed.mongo.config.MongodConfig;
//import de.flapdoodle.embed.mongo.config.RuntimeConfig;
//import de.flapdoodle.embed.mongo.distribution.Version;
//import de.flapdoodle.embed.process.extract.UserTempNaming;
//import org.apache.tomcat.jni.Local;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;

import java.io.IOException;

//import static org.junit.Assert.*;

public class FoodCrudServiceIntegrationTest {

    private static final String LOCALHOST = "127.0.0.1";
    private static final String DB_NAME = "itest";
    private static final int MONGO_TEST_PORT = 27028;

    private static MongodProcess mongoProcess;
    private static Mongo mongo;

    private MongoTemplate template;

    @Autowired
    private FoodCrudService foodCrudService;

    @BeforeClass
    public static void initializeDB() throws IOException {
//        RuntimeConfig config = new RuntimeConfig();
//        config.setExecutableNaming(new UserTempNaming());
//
//        MongodStarter starter = MongodStarter.getInstance(config);
//
//        MongodExecutable mongoExecutable = starter.prepare(new MongodConfig(Version.V2_2_0, MONGO_TEST_PORT, false));
//        mongoProcess = mongoExecutable.start();
//
//        mongo = new Mongo(LOCALHOST, MONGO_TEST_PORT);
//        mongo.getDB(DB_NAME);
    }

    @AfterClass
    public static void shutdownDB() throws InterruptedException {
        mongo.close();
        mongoProcess.stop();
    }

    @Before
    public void setUp() throws Exception {

    }

    @Test
    public void testSave() {

    }
}