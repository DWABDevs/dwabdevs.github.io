

async function showJson(){
    let json = await fetch("./aboutData.json")
    let people = await json.json()

    let template = document.querySelector("#aboutContainer")
    document.querySelector("#aboutParent").innerHTML = ""
    template.querySelector("#name").textContent = people[0].name
    template.querySelector("#description").textContent = people[0].description
    template.querySelector("#profilePic").src = people[0].photo

    for (let index = 0; index < people.length; index++) {
        const profile = people[index];
        template.querySelector("#name").textContent = profile.name
        template.querySelector("#description").textContent = profile.description
        template.querySelector("#profilePic").src = profile.photo
        document.querySelector("#aboutParent").appendChild(template)
        template = template.cloneNode(true)

    }

}

showJson()