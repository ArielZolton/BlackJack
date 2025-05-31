require("dotenv").config();
const mongoose = require("mongoose");

const MONGO_URI = process.env.MONGO_URI;

// async function main() {
//     try {
//         await mongoose.connect(MONGO_URI);
//         console.log("✅ successfully connected to MongoDB");
//     } catch (err) {
//         console.error("❌ error connecting to MongoDB", err);
//     }
// }

// main();

(async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log("✅ successfully connected to MongoDB");
    } catch (err) {
        console.error("❌ error connecting to MongoDB", err);
        process.exit(1);
    } finally {
        await mongoose.connection.close();
        console.log("✅ successfully disconnected from MongoDB");
        process.exit(0);
    }
})();
