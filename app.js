// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];

console.log(friends);

function agregarAmigo() {
  let friendsName = document.getElementById("amigo").value.trim();

  if (friendsName.trim() === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    friends.push(friendsName);
    recorrerLista(friends); // actualiza la lista en el DOM
    console.log(friends);
    limpiarCaja();
  }

}

function limpiarCaja() {
  document.getElementById("amigo").value = "";
}

function recorrerLista(array) {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      let li = document.createElement("li"); // creamos un elemento <li>
      console.log(li);
      li.textContent = array[i];
      lista.appendChild(li); // aqui lo agregamos a la lista <ul>
    }
  }
}

function sortearAmigo() {

  if (friends.length === 0){
    alert("La lista esta vacia");
    return;
  }
  
  let randomIndex = Math.floor(Math.random() * friends.length); //aleatorio
  let randomName = friends[randomIndex]; // seleccionamos nombre

  let result = document.getElementById('resultado');
  result.innerHTML = `<li>${randomName}</li>`;
}


