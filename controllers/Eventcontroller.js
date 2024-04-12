const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {

    res.status(200).send("Endpoint para obtener todos los eventos");
});

router.post("/", (req, res) => {
    const eventData = req.body;
    console.log(eventData);
    res.status(201).json({
        message: "Evento creado exitosamente",
        eventId: 4
    });
});

module.exports = router;