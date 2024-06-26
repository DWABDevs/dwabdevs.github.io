const fs = require('node:fs')

const html_parce = require('node-html-parser')
const { parse } = html_parce

var aliases = require("./aliases.json")



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
            placeholder = root.querySelector(`#${templateName.split('.')[0]}`)
            placeholder.replaceWith(templateText)
            console.log(`place ${templateName} in ${pageName}`)
        }
        catch {

        }

    }

    fs.writeFile(`../static/${pageName}`, root.outerHTML, () => { })


}





