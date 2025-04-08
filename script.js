const steps = [
  {
    title: "¿Qué es el Truco?",
    text: "El Truco es un juego de cartas muy popular en Argentina. Se juega con una baraja española de 40 cartas.",
    img: "img/cartas.png"
  },
  {
    title: "El objetivo",
    text: "El objetivo del juego es sumar puntos ganando manos, cantando envido, truco y otras jugadas.",
    img: "img/envido.png"
  },
  {
    title: "El Envido",
    text: "El Envido es una apuesta basada en el valor de las cartas del mismo palo. Se canta antes del Truco.",
    img: "img/envido.png"
  },
  {
    title: "El Truco",
    text: "Cuando alguien canta 'Truco', el otro jugador puede aceptar (quiero), rechazar (no quiero) o subir la apuesta (retruco).",
    img: "img/truco.png"
  },
  {
    title: "¡Fin!",
    text: "¡Ya sabés lo básico! Ahora podés practicar con amigos o seguir aprendiendo variantes como Flor o Pica Pica.",
    img: "img/cartas.png"
  }
];

let currentStep = 0;

function renderStep() {
  const step = steps[currentStep];
  document.getElementById("step-content").innerHTML = `
    <h2>${step.title}</h2>
    <p>${step.text}</p>
    <img src="${step.img}" alt="${step.title}" />
  `;
}

function nextStep() {
  if (currentStep < steps.length - 1) {
    currentStep++;
    renderStep();
  }
}

function prevStep() {
  if (currentStep > 0) {
    currentStep--;
    renderStep();
  }
}

// Cargar el primer paso al iniciar
renderStep();
