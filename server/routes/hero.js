import express from "express"
import Hero from "../models/Hero.js";
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const hero = await Hero.findOne();
        res.json(hero);
    } catch (err) {
        res.status(500).json({error: err.message})
    }
})

export default router;
