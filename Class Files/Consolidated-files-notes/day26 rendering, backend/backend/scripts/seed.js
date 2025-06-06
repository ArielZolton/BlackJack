// import dotenv from "dotenv";
// dotenv.config();
import 'dotenv/config';
import mongoose from "mongoose";
import User from "../models/user.js";
import Asset from "../models/asset.js";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
// import sampleData from "./sample.json" { type: "json" };

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const samplePath = path.resolve(__dirname, "sample.json");
const sampleData = JSON.parse(await fs.readFile(samplePath, "utf8"));

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

// console.log(process.env);
// const {MONGO_URI} = process.env;

const seed = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ successfully connected to MongoDB");

        // delete all users and assets
        // await User.deleteMany();
        // await Asset.deleteMany();
        await Promise.all([User.deleteMany(), Asset.deleteMany()]);

        const { users } = sampleData;

        for (const userData of users) {
            // pop the userData.assets || pop off the assets from the userData
            const assets = userData.assets;
            userData.assets = [];

            // create the user
            const user = await User.create(userData);
            console.log(`✅ created user ${user.username}`);

            // const { assets } = userData;
            for (const assetData of assets) {
                console.log(assetData);
                const asset = await Asset.create(assetData);
                console.log(`✅ created asset ${asset.symbol}`);

                // add the asset to the user
                user.assets.push(asset._id); // user.assets.push(asset);
                await user.save();
                console.log(`✅ added asset ${asset.symbol} to user ${user.username}`);
            }
        }
        console.log("✅ successfully seeded the database");

        await mongoose.disconnect();
        console.log("✅ successfully disconnected from MongoDB");
    } catch (error) {
        console.error("❌ error seeding the database", error);
    }
}

seed();
