import dotenv from "dotenv";
import mongoose from "mongoose";
import User from "../models/user.js";
import Asset from "../models/asset.js";
import path from "path";
import fs from "fs/promises";
import { fileURLToPath } from "url";
// import sampleData from "./sample.json";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const samplePath = path.resolve(__dirname, "sample.json");
const sampleData = JSON.parse(await fs.readFile(samplePath, "utf8"));

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const seed = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ successfully connected to MongoDB");

        // await User.deleteMany();
        // await Asset.deleteMany();
        await Promise.all([User.deleteMany(), Asset.deleteMany()]);

        const { users } = sampleData;

        for (const userData of users) {
            // pop the userData.assets
            const assets = userData.assets;
            userData.assets = [];

            const user = await User.create(userData);
            console.log(`✅ created user ${user.username}`);

            // const { assets } = userData;
            for (const assetData of assets) {
                console.log(assetData);
                const asset = await Asset.create(assetData);
                console.log(`✅ created asset ${asset.symbol}`);

                user.assets.push(asset._id);
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
