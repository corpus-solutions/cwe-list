const { XMLParser } = require("fast-xml-parser");
const fs = require("fs");

// TODO: Input file should be parameter or auto-find

const options = {
    ignoreAttributes : false
};

const parser = new XMLParser(options);

let XMLdata = fs.readFileSync("./cwec_v4.9.xml");

let jsObj = parser.parse(XMLdata);

let weaknesses = jsObj.Weakness_Catalog.Weaknesses.Weakness;

//console.log(weaknesses);

let id2name = {};
let name2id = {};

weaknesses.forEach(element => {
    let id = element["@_ID"];
    let name = element["@_Name"];
    id2name[id] = name;
    name2id[name] = id;
});

console.log("Saving to cwe2name.json...");
fs.writeFileSync("./cwe2name.json", JSON.stringify(id2name, null, 2));

console.log("Saving to name2cwe.json...");
fs.writeFileSync("./name2cwe.json", JSON.stringify(name2id, null, 2));

