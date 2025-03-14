// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];
const lista = document.getElementById("listaAmigos");
const amigoElegido = document.getElementById("resultado");

function agregarAmigo(event) {
  event.preventDefault();

  const inputNombre = document.getElementById("amigo");
  const amigo = inputNombre.value;
  amigo;

  if (amigo === "") {
    alert("Por favor, inserte un nombre");
    return;
  }

  if (amigos.includes(amigo)) {
    alert("El nombre ingresado ya se encuentra registrado");
    return;
  }

  amigos.push(amigo);

  actualizarLista();

  inputNombre.value = "";
}

function actualizarLista() {
  lista.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement("li");
    li.innerHTML = amigos[i];
    lista.appendChild(li);
  }
  console.log(amigos);
}

function sortearAmigo(event) {
  event.preventDefault();

  if (amigos.length === 0) {
    alert("No hay Nombres para sortear");
    return;
  }

  if (amigos.length < 2) {
    alert("Se necesita al menos dos nombres para hacer el sorteo");
    return;
  }

  let numeroAleatorio = Math.floor(Math.random() * amigos.length);

  const sorteo = amigos[numeroAleatorio];

  amigoElegido.innerHTML = `El amigo secreto sorteado es:${sorteo}`;

  setTimeout(() => {
    lista.innerHTML = "";
    amigoElegido.innerHTML = "";
    amigos.length = 0;
  }, 5000);

  console.log(amigos);
}

const inputNombre = document.getElementById("amigo");
inputNombre.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    agregarAmigo(e);
  }
});
