idade = prompt("Quantos anos você tem?")
if (idade<18){
  alert("Você Não pode jogar jokenpo")
}
if (idade>=18){
  escolhaJogador = prompt("Digite 1-Pedra, 2-Papel ou 3-Tesoura?")
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
  
  // Jugador Pedra e Computador Pedra é um Empate!!!
  // Jugador Papel e Computador Papel é um Empate!!!
  // Jugador Tesoura e Computador Tesoura é um Empate!!!  
  if (escolhaJogador == escolhaComputador) {
     alert("Empate!!!")
  }
     
  if (escolhaJogador == 1) {
    // Jugador Pedra e Computador Papel O Computador Vence!!! 
     if (escolhaComputador == 2) {
        alert("O Computador Venceu, Escolheu Papel")
     }
     // Jugador Pedra e Computador Tesoura O Jugador Vence!!!
     if (escolhaComputador == 3) {
        alert("O Jogador Venceu, Escolheu Pedra")
     }
  }  
  
  if (escolhaJogador == 2) {
     // Jugador Papel e Computador Pedra O Jugador Vence!!!
     if (escolhaComputador == 1) {
        alert("O Jogador Venceu, Escolheu Papel")       
     }
     // Jugador Papel e Computador Tesoura O Computador Vence!!!
     if (escolhaComputador == 3) {
        alert("O Computador Venceu, Escolheu Tesoura")
     }
  }    
   
  if (escolhaJogador == 3) {
    // Jugador Tesoura e Computador Pedra O Computador Vence!!!
     if (escolhaComputador == 1) {
        alert("O Computador Venceu, Escolheu Pedra")         
     }
     // Jugador Tesoura e Computador Papel O Jugador Vence!!!
     if (escolhaComputador == 2) {
        alert("O Jogador Venceu, Escolheu Tesoura")
     }
  }  
  
  alert("Escolha do Computador " + escolhaComputador)
}

