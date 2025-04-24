function mostrarMensagem() {
    alert("Olá! Esta é a mensagem que apareceu!");
  }

  const frasesMotivacionais = [
    "A persistência é o caminho do êxito!",
    "Você é capaz de muito mais do que imagina!",
    "Cada dia é uma nova oportunidade para aprender e crescer.",
    "O sucesso começa com a decisão de tentar.",
    "Nunca é tarde para ser quem você poderia ter sido.",
    "Acredite em si mesmo e todo o resto virá naturalmente.",
    "Grandes coisas nunca vêm de zonas de conforto.",
    "Seu potencial é infinito - continue avançando!"
];

function mostrarMensagem() {
    const mensagemDiv = document.getElementById('mensagem');
    const fraseAleatoria = frasesMotivacionais[Math.floor(Math.random() * frasesMotivacionais.length)];
    
    mensagemDiv.textContent = fraseAleatoria;
    mensagemDiv.style.display = 'block';

}
