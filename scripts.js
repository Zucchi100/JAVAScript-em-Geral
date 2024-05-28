const result = document.querySelector(".result")
const myscore = document.querySelector("#my-score")
const scoremachine = document.querySelector("#score-machine")

let myscorenumber = 0
let scoremachinenumber = 0

function playhuman(humanchoice) {

    playTheGame(humanchoice, playmachine())
}

function playmachine() {
    const choices = ['rock', 'paper', 'scissors']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]

}

function playTheGame(human, machine) {

    console.log("humano: " + human + "Maquina:" + machine)

    if (human === machine) {
        result.innerHTML = "Deu Empate!"
    }
    else if ((human === 'paper' && machine === 'rock') ||
        (human === 'rock' && machine === 'scissors') ||
        (human === 'scissors' && machine === 'paper')) {
            myscorenumber++
            myscore.innerHTML = myscorenumber
            result.innerHTML = "Você Ganhou!"
    } else {
        scoremachinenumber++
        scoremachine.innerHTML = scoremachinenumber
        result.innerHTML = "Alisson Ganhou!"
    }


}




