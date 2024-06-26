fs = require('node:fs')
jsdom = require("jsdom")
const { JSDOM } = jsdom
var aliases = require("./aliases.json")



if(!fs.existsSync('./static'))
    fs.mkdirSync('./static')



for (let index = 0; index < aliases.pages.length; index++) {
    const pageName = aliases.pages[index];

    pageText = fs.readFileSync("pages/" + pageName, 'utf8')

    
    document = new JSDOM(pageText).window.document

    for (let jindex = 0; jindex < aliases.templates.length; jindex++) {
        const templateName = aliases.templates[jindex];
        templateText = fs.readFileSync("templates/" + templateName, 'utf8')

        try{
            placeholder = document.querySelector(`#${templateName.split('.')[0]}`)
            placeholder.outerHTML = templateText
            console.log(`place ${templateName} in ${pageName}`)
        }
        catch{

        }

    }

    fs.writeFile(`./static/${pageName}`, document.documentElement.outerHTML, ()=>{})
    

}





