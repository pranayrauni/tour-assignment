import mongoose from "mongoose";

const heroSchema = new mongoose.Schema({
    title: {
        type: String
    },
    subtitle: {
        type: String
    },
    backgroundImage: {
        type: String
    }
})

export default mongoose.model('Hero', heroSchema)