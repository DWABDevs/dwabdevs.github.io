

async function showJson(){
    let json = await fetch("./aboutData.json")
    let people = await json.json()

    let template = document.querySelector("#aboutContainer")


    template.querySelector("#name").textContent = people[0].name
    template.querySelector("#description").textContent = people[0].description
    template.querySelector("#profilePic").src = people[0].photo

}

showJson()