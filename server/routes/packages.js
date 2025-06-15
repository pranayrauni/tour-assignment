import express from "express"
import Package from "../models/Package.js"

const router = express.Router();

router.get('/', async(req, res) => {
    try {
        const data = await Package.find();
        res.json(data);
    } catch (err) {
        res.status(500).json({error: err.message});
    }
})

export default router; 