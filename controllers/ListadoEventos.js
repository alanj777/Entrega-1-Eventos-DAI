import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
    return response.json([

{
    "collection": [
    {
    "id": 2,
    "name": "Ysy A",
    "description": "YSYSMO",
    "start_date": "2025-03-21T03:00:00.000Z",
    "duration_in_minutes": 300,
    "price": "1550",
    "enabled_for_enrollment": true,
    "max_assistance": 60000,
    "tags": [
    "Trap",
    "Rap",
    "Techno"
    ],
    "creator_user": {
    "id": 3,
    "username": "Jschiffer",
    "first_name": "Julian",
    "last_name": "Schiffer"
    },
    "event_category": {
    "id": 1,
    "name": "Musica"
    },
    "event_location": {
    "id": 1,
    "name": "River",
    "full_address": "Av. Pres. Figueroa Alcorta 7597",
    "latitude": -34.5453,
    "longitude": -58.4498,
    "max_capacity": "84567"
    }
    },
    {
        "id": 3,
        "name": "Duki",
        "description": "Ameri Tour",
        "start_date": "2025-05-26T03:00:00.000Z",
        "duration_in_minutes": 380,
        "price": "1550",
        "enabled_for_enrollment": true,
        "max_assistance": 68000,
        "tags": [
        "Trap",
        "Rap",
        "Techno",
        "Reggaeton"
        ],
        "creator_user": {
        "id": 3,
        "username": "Jschiffer",
        "first_name": "Julian",
        "last_name": "Schiffer"
        },
        "event_category": {
        "id": 1,
        "name": "Musica"
        },
        "event_location": {
        "id": 1,
        "name": "River",
        "full_address": "Av. Pres. Figueroa Alcorta 7597",
        "latitude": -34.5453,
        "longitude": -58.4498,
        "max_capacity": "84567"
        }
        }
    ],
    "pagination": {
    "limit": 15,
    "offset": 0,
    "nextPage": null,
    "total": "1"
    }
    }
] ) } );
router.post("/", (req, res) => {
    const user = req.body;
    console.log(user);
    return res.status(201).send({
      id: 4,
      name: body.name,
      price: body.price,
    });
  });
  
export default router;