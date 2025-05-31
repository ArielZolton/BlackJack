import mongoose from "mongoose";

const assetSchema = new mongoose.Schema({
    symbol: { type: String, required: true, uppercase: true },
    shares: { type: Number, required: true, min: 1 },
    type: { 
        type: String, 
        required: true, 
        enum: ["stock", "crypto", "bond", "option"]
    }
    
})

const Asset = mongoose.model("Asset", assetSchema);

export default Asset;