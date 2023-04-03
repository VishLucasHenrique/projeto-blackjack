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

const testeComprarCarta = () => {

   while (true) {
      let cartaSorteada = comprarCarta()
      if (!existeCarta(cartaSorteada)) {

         cartasJaSorteadas.push(cartaSorteada)
         return cartaSorteada
      }
   }

}

const existeCarta = (cartaSorteada) => {
   cartasJaSorteadas.forEach(element => {
      if (cartaSorteada.texto === element.texto) {
         return true
      }
   });
   return false
}

const lerOTextoDoBaralho = (baralho) => {
   let cartas = []
   baralho.forEach(element => {
      cartas.push(element.texto)
   });
   return cartas
}

const somaDoBaralho = (baralho) => {
   let somaDoBaralho = 0
   baralho.forEach(element => {
      somaDoBaralho += element.valor
   });

   return somaDoBaralho
}

let cartasDoUsuario = []
let cartasDoComputador = []
let cartasJaSorteadas = []

console.log("Boas vindas ao jogo de BlackJack!")

const desafio = () => {
   if (confirm("Quer iniciar uma nova rodada?")) {
      cartasDoUsuario.push(testeComprarCarta(), testeComprarCarta())
      cartasDoComputador.push(testeComprarCarta(), testeComprarCarta())

      if (somaDoBaralho(cartasDoUsuario) == 22) {
         cartasDoUsuario.splice(0, 2)
         cartasDoUsuario.push(testeComprarCarta(), testeComprarCarta())
      }

      if (somaDoBaralho(cartasDoComputador) == 22) {
         cartasDoComputador.splice(0, 2)
         cartasDoComputador.push(testeComprarCarta(), testeComprarCarta())
      }

      if (somaDoBaralho(cartasDoUsuario) == 21) {
         alert(`Usuario - Cartas: ${lerOTextoDoBaralho(cartasDoUsuario)} - Pontuação: ${somaDoBaralho(cartasDoUsuario)} \n ` +
            `Computador - Cartas: ${lerOTextoDoBaralho(cartasDoComputador)} - Pontução: ${somaDoBaralho(cartasDoComputador)} \n` +
            `O usuario ganhou!`)

            return
      }

      if (somaDoBaralho(cartasDoComputador) == 21) {
         alert(`Usuario - Cartas: ${lerOTextoDoBaralho(cartasDoUsuario)} - Pontuação: ${somaDoBaralho(cartasDoUsuario)} \n ` +
            `Computador - Cartas: ${lerOTextoDoBaralho(cartasDoComputador)} - Pontução: ${somaDoBaralho(cartasDoComputador)} \n` +
            `O computador ganhou!`)

            return
      }


      if (confirm(`Suas cartas são ${lerOTextoDoBaralho(cartasDoUsuario)}. A carta relevada do computador é ${cartasDoComputador[0].texto}. \nDeseja comprar mais uma carta?`)) {
         while (somaDoBaralho(cartasDoUsuario) < 21) {

            cartasDoUsuario.push(testeComprarCarta())

            if (somaDoBaralho(cartasDoUsuario) == 21) {
               alert(`Usuario - Cartas: ${lerOTextoDoBaralho(cartasDoUsuario)} - Pontuação: ${somaDoBaralho(cartasDoUsuario)} \n ` +
                  `Computador - Cartas: ${lerOTextoDoBaralho(cartasDoComputador)} - Pontução: ${somaDoBaralho(cartasDoComputador)} \n` +
                  `O usuario ganhou!`)

               return

            } else if (somaDoBaralho(cartasDoUsuario) > 21) {
               alert(`Usuario - Cartas: ${lerOTextoDoBaralho(cartasDoUsuario)} - Pontuação: ${somaDoBaralho(cartasDoUsuario)} \n ` +
                  `Computador - Cartas: ${lerOTextoDoBaralho(cartasDoComputador)} - Pontução: ${somaDoBaralho(cartasDoComputador)} \n` +
                  `O computador ganhou!`)

               return
            }

             if (!confirm(`Suas cartas agora são ${lerOTextoDoBaralho(cartasDoUsuario)} . A carta relevada do computador é ${cartasDoComputador[0].texto}. \nDeseja comprar mais uma carta?`)) {

               break
             }
         }
      } else if (somaDoBaralho(cartasDoComputador) > somaDoBaralho(cartasDoUsuario)) {
         alert(`Usuario - Cartas: ${lerOTextoDoBaralho(cartasDoUsuario)} - Pontuação: ${somaDoBaralho(cartasDoUsuario)} \n ` +
            `Computador - Cartas: ${lerOTextoDoBaralho(cartasDoComputador)} - Pontução: ${somaDoBaralho(cartasDoComputador)} \n` +
            `O computador ganhou!`)

         return
      }
      while (somaDoBaralho(cartasDoComputador) < somaDoBaralho(cartasDoUsuario)) {
         cartasDoComputador.push(testeComprarCarta())

         if (somaDoBaralho(cartasDoComputador) == 21) {
            alert(`Usuario - Cartas: ${lerOTextoDoBaralho(cartasDoUsuario)} - Pontuação: ${somaDoBaralho(cartasDoUsuario)} \n ` +
               `Computador - Cartas: ${lerOTextoDoBaralho(cartasDoComputador)} - Pontução: ${somaDoBaralho(cartasDoComputador)} \n` +
               `O computador ganhou!`)

            return
         } else if (somaDoBaralho(cartasDoComputador) > 21) {
            alert(`Usuario - Cartas: ${lerOTextoDoBaralho(cartasDoUsuario)} - Pontuação: ${somaDoBaralho(cartasDoUsuario)} \n ` +
               `Computador - Cartas: ${lerOTextoDoBaralho(cartasDoComputador)} - Pontução: ${somaDoBaralho(cartasDoComputador)} \n` +
               `O usuário ganhou!`)

            return
         } else if(somaDoBaralho(cartasDoComputador) == somaDoBaralho(cartasDoUsuario)) {
            alert(`Usuario - Cartas: ${lerOTextoDoBaralho(cartasDoUsuario)} - Pontuação: ${somaDoBaralho(cartasDoUsuario)} \n ` +
            `Computador - Cartas: ${lerOTextoDoBaralho(cartasDoComputador)} - Pontução: ${somaDoBaralho(cartasDoComputador)} \n` +
            `Empate!`)

            return
         }
      }
   } else {
      console.log("O jogo acabou!")
   }
}

desafio()



// splice(i,2) - remove N elementos a partir da posição i do array


