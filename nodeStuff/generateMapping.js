fs = require("node:fs")

var output = {}


function readDirCallback(err, files){
    if(err){
        console.error("error reading directory")
        return
    }
    console.log(files)
    return files

}






output.pages = fs.readdirSync("../pages")
output.templates = fs.readdirSync("../templates")

console.log(JSON.stringify(output))

fs.writeFile("aliases.json", JSON.stringify(output), "utf8", ()=>{})

