import express from "express";

const router = express.Router();

router.get("/", (request, response) => {
    return response.json([
        {
            "collection": [
            {
            "user": {
            "id": 3,
            "username": "Jschiffer",
            "first_name": "Julian",
            "last_name": "Schiffer"
            },
            "attended": false,
            "rating": null,
            "description": null
            },
            {
            "user": {
            "id": 1,
            "username": "polshu@polshu.com.ar",
            "first_name": "Pablo",
            "last_name": "Ulman"
            },
            "attended": true,
            "rating": 5,
            "description": "Alto Chow"
            }, {
                "user": {
                "id": 4,
                "username": "AlanJota",
                "first_name": "Alan",
                "last_name": "Jolo"
                },
                "attended": true,
                "rating": 4,
                "description": "Tremendo"
                }
            ],
            "pagination": {
            "limit": 15,
            "offset": 0,
            "nextPage": null,
            "total": "2"
            }
            }
         ] ) })

            export default router;