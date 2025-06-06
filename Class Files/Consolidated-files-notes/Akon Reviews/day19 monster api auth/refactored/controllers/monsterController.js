let monsters = [
    { id: 1, name: "Hydra", type: "Mythical Beast", dangerLevel: 10 },
    { id: 2, name: "Gremlin", type: "Trickster", dangerLevel: 4 },
];

const getAllMonsters = (req, res) => res.json(monsters);

const getMonsterById = (req, res) => {
    const monster = monsters.find(m => m.id === parseInt(req.params.id));
    if (!monster) return res.status(404).send("Monster not found");
    res.json(monster);
};

const createMonster = (req, res) => {
    const { name, type, dangerLevel } = req.body;
    if (!name || !type || dangerLevel == null) {
        return res.status(400).send("Name, type, and danger level are required");
    }
    const newMonster = {
        id: monsters.length + 1,
        name,
        type,
        dangerLevel: parseInt(dangerLevel)
    };
    monsters.push(newMonster);
    res.status(201).json(newMonster);
};

const updateMonster = (req, res) => {
    const { name, type, dangerLevel } = req.body;
    const monster = monsters.find(m => m.id === parseInt(req.params.id));
    if (!monster) return res.status(404).send("Monster not found");
    if (!name || !type || dangerLevel == null) {
        return res.status(400).send("All fields are required");
    }
    monster.name = name;
    monster.type = type;
    monster.dangerLevel = parseInt(dangerLevel);
    res.json(monster);
};

const patchMonster = (req, res) => {
    const { name, type, dangerLevel } = req.body;
    const monster = monsters.find(m => m.id === parseInt(req.params.id));
    if (!monster) return res.status(404).send("Monster not found");

    if (name) monster.name = name;
    if (type) monster.type = type;
    if (dangerLevel != null) monster.dangerLevel = parseInt(dangerLevel);

    res.json(monster);
};

const deleteMonster = (req, res) => {
    const id = parseInt(req.params.id);
    const index = monsters.findIndex(m => m.id === id);
    if (index === -1) return res.status(404).send("Monster not found");
    const deleted = monsters.splice(index, 1);
    res.json(deleted[0]);
};

module.exports = {
    getAllMonsters,
    getMonsterById,
    createMonster,
    updateMonster,
    patchMonster,
    deleteMonster
};
