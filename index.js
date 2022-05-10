// Clase anterior con la que obtenemos los explorers
const Reader = require("./lib/utils/Reader")
const ExplorerService = require("./lib/services/ExplorerService")
const FizzbuzzService = require ("./lib/services/FizzbuzzService")
const explorers = Reader.readJsonFile("explorers.json")

console.log(explorers)

// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"))
//ExplorerService.getAmountOfExplorersByMission(explorers, "node");
//ExplorerService.getExplorersUsernamesByMission(explorers, "node");

console.log(FizzbuzzService.applyValidationInExplorer(explorer1))