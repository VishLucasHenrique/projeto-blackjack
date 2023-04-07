/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log("Boas vindas ao jogo de BlackJack!")

const jogo = (carta1, carta2, carta3, carta4) => {
   carta1 = comprarCarta()
   carta2 = comprarCarta()
   carta3 = comprarCarta()
   carta4 = comprarCarta()

   const pontuacaoUsuario = carta1.valor + carta2.valor
   const pontuacaoComputador = carta3.valor + carta4.valor

   if (confirm("Quer iniciar uma nova rodada?")) {
      console.log(`Usuário - cartas ${carta1.texto} ${carta2.texto} - pontuação = ${pontuacaoUsuario}`)
      console.log(`Computador - cartas ${carta3.texto} ${carta4.texto} - pontuação = ${pontuacaoComputador}`)
      if (pontuacaoUsuario > pontuacaoComputador) {
         console.log("O usúario ganhou!")
      } else if (pontuacaoComputador > pontuacaoUsuario) {
         console.log("O computador ganhou!")
      } else if (pontuacaoUsuario == pontuacaoComputador) {
         console.log("Empate!")
      }
   } else {
      console.log("O jogo acabou!")
   }
}

jogo()



