const paleta = [
    "#FF5733", "#33FF57", "#5733FF", "#FF33AA", "#AA33FF",
    "#33AAFF", "#FF3388", "#8833FF", "#33FF88", "#8833FF",
    "#33FFAA", "#AA33FF", "#33AAFF", "#FF33BB", "#BB33FF",
    "#33BBFF", "#FF3366", "#6633FF", "#33FF66", "#6633FF"
]


function geraCor() {
    let indice =Math.floor(Math.random()*(paleta.length-0) - 0)
    return paleta[indice]
}

console.log(geraCor())