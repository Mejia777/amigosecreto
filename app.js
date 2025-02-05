// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let friends = [];
// friends.push("Daniel");
// friends.push("Samuel");
// friends.push("David");
// friends.push("Tauren");
// friends.push("Diego"); 
console.log(friends);

function agregarAmigo(){
    let friendsName = document.getElementById('amigo').value;

    if(friendsName.trim() == ""){
        alert("Por favor, inserte un nombre.");
    } else {
        friends.push(friendsName);
        console.log(friends);
    }
}