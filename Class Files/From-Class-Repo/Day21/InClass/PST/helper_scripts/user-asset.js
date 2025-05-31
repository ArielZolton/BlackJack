require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/user");
const Asset = require("../models/asset");
const MONGO_URI = process.env.MONGO_URI;


const createUser = async () => {
    try {
        const user = await User.create({
            username: "testuser",
            email: "testuser@test.com",
            password: "password",
            balance: 100,
        });
        console.log(user);

        // let's add an asset to the user
        const asset = await Asset.create({
            symbol: "GOOGL",
            shares: 10,
            type: "stock",
        });
        console.log(asset);

        // let's add the asset to the user
        user.assets.push(asset);
        await user.save();
        console.log(user);

        return user._id;
    } catch (error) {
        console.error("❌ error creating user", error);
    }
}


const getUser = async (id) => {
    try {
        const user = await User.findById(id);
        console.log(user);
    } catch (error) {
        console.error("❌ error getting user", error);
    }
}

const getUserAssets = async (id) => {
    try {
        const user = await User.findById(id).populate("assets");
        console.log(user);
    } catch (error) {
        console.error("❌ error getting user assets", error);
    }
}
// ---------- 1. DB Connection ----------
(async () => {
    try {
        await mongoose.connect(MONGO_URI, {
            bufferTimeoutMS: 1000,
            connectTimeoutMS: 1000,
        });
        console.log("✅ successfully connected to MongoDB");
        const userId = await createUser();

        console.log("------ getting user ------");
        await getUser(userId);

        console.log("------ getting user assets ------");
        await getUserAssets(userId);


    } catch (error) {
        console.error("❌ error connecting to MongoDB", error);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        console.log("✅ successfully disconnected from MongoDB");
        process.exit(0);
    }
})();
