//would not recommend to do, but possible
require("dotenv").config();
const { MongoClient } = require("mongodb");

const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/myDatabase";

// Async function to connect
async function connectNativeDB() {
    const client = new MongoClient(MONGO_URI, {
        connectTimeoutMS: 3000,
    });

    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log("✅ Native MongoDB driver connected successfully");

        // Access the database 
        const db = client.db();

        const collections = await db.listCollections().toArray();
        console.log("📁 Existing Collections:", collections.map(c => c.name));

        // Return db and client for use elsewhere if needed
        return { db, client };
    } catch (error) {
        console.error("❌ Error connecting with native MongoDB driver:", error.message);
        process.exit(1);
    }
}

module.exports = connectNativeDB;
