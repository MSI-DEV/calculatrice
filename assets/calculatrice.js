console.log("Script chargé !")
let saisies = [];
let maCalculatrice = document.createElement("div")
    maCalculatrice.className = "calculatrice"
    document.body.appendChild(maCalculatrice)

let monEcran = document.createElement("div")
    monEcran.className = "ecran"
    maCalculatrice.appendChild(monEcran)
    monEcran.innerText = "0"

let monClavier = document.createElement("div")
    monClavier.className = "clavier"
    maCalculatrice.appendChild(monClavier)

for (let i = 1; i < 18; i++) {
    let mesButtons = document.createElement("button")
    mesButtons.className = "button-number"
    monClavier.appendChild(mesButtons)
    mesButtons.innerText = i

    switch (i) {
        case 1:
            break;

        case 2: 
            break;

        case 3:
            break;

        case 4: 
            mesButtons.innerText = "C"
            mesButtons.className = "clear-button"
            break;

        case 5: 
            mesButtons.innerText = "4"
            // mesButtons.className = "button-number"
            break;

        case 6: 
            mesButtons.innerText = "5"
            // mesButtons.className = "button-number"
            break;

        case 7: 
            mesButtons.innerText = "6"
            break;
        
        case 8: 
            mesButtons.innerText = "7"
            break;

        case 9:
            mesButtons.innerText = "8"
            break;

        case 10:
            mesButtons.innerText = "9"
            break;

        case 11:
            mesButtons.innerText = "-"
            mesButtons.className = "button-operator"
            break;

        case 12:
            mesButtons.innerText = "0"
            mesButtons.className =  "button-number button-double"

            break;

        case 13:
            mesButtons.innerText = "."
            break;

        case 14:
            mesButtons.innerText = "+"
            mesButtons.className = "button-operator"
            break;

        case 15: 
            mesButtons.innerText = "/"
            mesButtons.className = "button-operator"
            break;

        case 16:
            mesButtons.innerText = "*"
            mesButtons.className = "button-operator"
            break;

        case 17:
            mesButtons.innerText = "="
            mesButtons.className = "button-egal"
            break;

        default:
            break;

    }

}

                 // -----------------------------------------------------//


let numbers = document.querySelectorAll(".button-number")
let clear = document.querySelector(".clear-button")
let operator = document.querySelectorAll(".button-operator")
let egal = document.querySelector(".button-egal")
let unButton = document.querySelectorAll(".button-number, .button-operator")
let ecran = ""
let operation = undefined


// numbers.forEach((calcNumber) => {
//     calcNumber.addEventListener("click", (n) => 
//     ecran.innerText = calcNumber) 
    
// })
//--------------------affichage numero--------------------

unButton.forEach(unButton => {
    unButton.addEventListener("click", (eventClick) => {
        // console.log("Vous avez appuyé sur : ", unButton.innerText);
        if (saisies.length == 0)
document.querySelector(".ecran").innerText = "";      
document.querySelector(".ecran").innerText += eventClick.target.innerText
saisies.push(eventClick.target.innerText)

    })

})

//----------------------------------Supprimer à chaque saisie(button)------------------------------------
console.log("clear : ", clear);
clear.addEventListener("click", function () {
saisies = [];
document.querySelector(".ecran").innerText = "0";
// console.log(saisies);
})
