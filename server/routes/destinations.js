import express from "express"
import Destination from "../models/Destination.js";

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const data = await Destination.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

export default router;