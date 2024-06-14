const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const imgScreen1 = document.querySelector("#imgScreen1")
const messageContainer = document.querySelector(".message-container")
const cookieButtonClick = document.querySelector("#anotherCookieButtonClick")

const phrases = [
  "A vida trará coisas boas se tiver paciência.",
  "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
  "Não compense na ira o que lhe falta na razão.",
  "Defeitos e virtudes são apenas dois lados da mesma moeda.",
  "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
  "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
  "Quem quer colher rosas tem de estar preparado para suportar os espinhos.",
  "A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.",
  "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado.",
  "O pessimista vê a dificuldade em cada oportunidade; O otimista vê a oportunidade em cada dificuldade.",
  "Não acredite mais em pessoas especiais, mas em momentos especiais com pessoas normais." 
]

imgScreen1.addEventListener('click', openNextScreen)
cookieButtonClick.addEventListener('click', anotherCookie)

//retorna numero aleatorio entre 0 e 10
function randomNumber() {
  return Number(Math.round(Math.random() * 10))
}

//funcao para alternar entre telas
function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function openNextScreen(event) {
  let myLuckyNumber = randomNumber()
  console.log(myLuckyNumber)
   toggleScreen()

   messageContainer.innerText = phrases[myLuckyNumber]
}

//funcao chamada ao clicar na imagem da segunda tela
function anotherCookie(event) {
  toggleScreen()
}
