// import dotenv from "dotenv";
// dotenv.config();
import 'dotenv/config';
import mongoose from "mongoose";
import User from "../models/user.js";
import Asset from "../models/asset.js";
import sampleData from "./sample.json" with { type: "json" };


const MONGO_URI = process.env.MONGO_URI;
console.log(process.env);
// const {MONGO_URI} = process.env;

const seed = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ successfully connected to MongoDB");

        // delete all users and assets
        // await User.deleteMany();
        // await Asset.deleteMany();

        await Promise.all([User.deleteMany(), Asset.deleteMany()]);

        const {users} = sampleData;
        for (const userData of users) {
            // pop off the assets from the userData
            const assets = userData.assets;
            userData.assets = [];

            // create the user
            const user = await User.create(userData);


            for (const assetData of assets) {
                const asset = await Asset.create(assetData);

                // add the asset to the user
                user.assets.push(asset);
                await user.save();
            }
        }
        await mongoose.disconnect();
        console.log("✅ successfully disconnected from MongoDB");
    } catch (error) {
        console.error("❌ error seeding the database", error);
    }
}

seed();
