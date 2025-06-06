const express = require("express");
const router = express.Router();
const {
    getAllMonsters,
    getMonsterById,
    createMonster,
    updateMonster,
    patchMonster,
    deleteMonster
} = require("../controllers/monsterController");


// /api/monsters
router.get("/", getAllMonsters);
router.get("/:id", getMonsterById);
router.post("/", createMonster);
router.put("/:id", updateMonster);
router.patch("/:id", patchMonster);
router.delete("/:id", deleteMonster);

module.exports = router;
