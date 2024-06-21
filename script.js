function playRockPaperScissor(player1, player2) {
    if (player1 === player2) {
        return "Empate!";
    }
    if (
        (player1 === 'Pedra' && player2 === 'Tesoura') ||
        (player1 === 'Papel' && player2 === 'Pedra') ||
        (player1 === 'Tesoura' && player2 === 'Papel')
    ) {
        return "Jogador 1 venceu!";
    }
    return "Jogador 2 venceu!";
}

let result = playRockPaperScissor("Papel", "Papel")
