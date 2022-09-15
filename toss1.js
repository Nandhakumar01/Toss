participants = { Player: 0, Computer: 0 }
gameDetails = []


Toss = ["Heads", "Tails"]
function coinTossFunction() {
    round = 1
    return new Promise((resolve) => {
        resolve(
            a = setInterval(function coinToss() {
                if (round == 5) {
                    clearInterval(a)
                    console.log(" From All Rounds ")
                    console.table([participants])
                    finalCalculation(participants.Player, participants.Computer)
                    result(participants.Player, participants.Computer)
                    console.table(gameDetails)
                }
                else {
                    console.log(`       Round ${round}       `)
                    coinTossing()
                    round++
                    return coinToss
                }
            }(), 15000)
        )
    })
}

function coinTossing() {
    player1CoinToss = []
    player2CoinToss = []
    range = 0
    b = setInterval(() => {
        if (range == 10) {
            clearInterval(b)
            findScore(player1CoinToss, player2CoinToss)
            console.table([participants])
            finalCalculation(participants.Player, participants.Computer)
            result(participants.Player, participants.Computer)
        }
        else {
            tossTheCoin()
            range++
        }
    }, 1000);
}
function findScore(player1List, player2List) {
    for (i of player1List) {
        if (i == "Heads") {
            participants.Player += 1
        }
    }
    for (i of player2List) {
        if (i == "Heads") {
            participants.Computer += 1
        }
    }
}
function result(player1, player2) {
    if (player1 > player2) {
        console.log(` Player Won`)
    }
    else if (player1 < player2) {
        console.log(` Computer Won`)
    }
    else {
        console.log(" Match Draw")
    }

}
function tossTheCoin() {
    p1 = Toss[Math.floor(Math.random() * 2)]
    p2 = Toss[Math.floor(Math.random() * 2)]
    player1CoinToss.push(p1)
    player2CoinToss.push(p2)
    gameDetails.push({ "Round": round - 1, "Player1": p1, "Player2": p2 })
    console.log(`Toss ${range + 1}  \n * Player   : " ${p1} "\n * Computer : " ${p2} "`)
}

function finalCalculation(Player, Computer) {
    scoreDifference = Player - Computer
    if (scoreDifference > 0) {
        console.log(`Player Got ${Math.abs(scoreDifference)} Heads greater than Computer`)
    }
    else if (scoreDifference == 0) {
        console.log("Match Draw")
    }
    else {
        console.log(`Computer Got ${Math.abs(scoreDifference)} Heads greater than Player`)
    }
}




coinTossFunction()