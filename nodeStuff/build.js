const fs = require('node:fs')

const html_parce = require('node-html-parser')
const { parse } = html_parce

var aliases = require("./aliases.json")
const { error } = require('node:console')



if (!fs.existsSync('../static'))
    fs.mkdirSync('../static')



for (let index = 0; index < aliases.pages.length; index++) {
    const pageName = aliases.pages[index];

    pageText = fs.readFileSync("../pages/" + pageName, 'utf8')


    root = parse(pageText)

    for (let jindex = 0; jindex < aliases.templates.length; jindex++) {
        const templateName = aliases.templates[jindex];
        templateText = fs.readFileSync("../templates/" + templateName, 'utf8')

        try {
            placeholder = root.querySelector('body').querySelector(`#${templateName.split('.')[0]}`)
            placeholder.replaceWith(templateText)
            console.log(`place ${templateName} in ${pageName} body`)
        }
        catch {

        }

        
        try {
            placeholder = root.querySelector('head').querySelector(`#${templateName.split('.')[0]}`)
            if(placeholder == undefined)
                throw new Error("not supp")
            
            root.querySelector('head').removeChild(placeholder)

            root.querySelector("head").innerHTML += templateText
            
            console.log(`place ${templateName} in ${pageName} head`)
        }
        catch (e) {
        }

    }

    fs.writeFile(`../static/${pageName}`, root.outerHTML, () => { })


}





