import express from "express";

const router = express.Router();

router.post("/", (request, response) => {
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
            }
            ],
            "pagination": {
            "limit": 15,
            "offset": 0,
            "nextPage": null,
            "total": "2"
            }
            } ] ) })

            export default router;