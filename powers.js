document.querySelector("#activate-flight").addEventListener("click", universalPowerActivation)

document.querySelector("#activate-mindreading").addEventListener("click", universalPowerActivation)

document.querySelector("#activate-xray").addEventListener("click", universalPowerActivation)

let powers = document.getElementsByClassName("power")

document.querySelector("#activate-all").addEventListener("click", () => {
    for (let i =0; i < powers.length; i++) {
        if (powers[i].classList.contains("disabled")) {
            powers[i].classList.toggle("enabled")
            powers[i].classList.toggle("disabled")
        }
    }
})
document.querySelector("#deactivate-all").addEventListener("click", () => {
    for (let i =0; i < powers.length; i++) {
        if (powers[i].classList.contains("enabled")) {
            powers[i].classList.toggle("enabled")
            powers[i].classList.toggle("disabled")
        }
    }
})

function universalPowerActivation(event) {
    console.log("works!")
    let go = event.target.id.split("-")[1]
    document.getElementById(go).classList.toggle("enabled")
    document.getElementById(go).classList.toggle("disabled")
}

