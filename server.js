import express from "express";
import EventController from "./controllers/event-controller.js";
import UserController from "./controllers/user-controller.js";
import ProvinciasController from "./controllers/provincias-controller.js";
import LocationController from "./controllers/location-controller.js";
import CategoryController from "./controllers/category-controller.js";


const app = express(); // Init API REST
app.use(express.json()); // Middleware to parse JSON
const port = 3000;

app.use("/event", EventController );
app.use("/user", UserController );
app.use("/provincias", ProvinciasController );  
app.use("/event-location", LocationController );  
app.use("/event-category", CategoryController );  


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });

  
