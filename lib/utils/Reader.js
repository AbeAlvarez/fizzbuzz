const fs = require ("fs");

class Reader {

    static readJsonFile(path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata)
    }
}

console.log("Hola Mundo")
module.exports = Reader
