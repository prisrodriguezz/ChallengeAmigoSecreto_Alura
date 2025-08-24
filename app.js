// Array para almacenar los nombres ingresados 
let amigos = [];

// Función que permite al usuario ingresar un nombre en el campo de texto y añadirlo a la lista de amigos
function agregarAmigo(){
    let nombreIngresadoPorUsuario = document.getElementById('amigo').value;
    if (nombreIngresadoPorUsuario.trim() === "" ){ //trim() elimina espacios al inicio y al final
        alert('Por favor, inserte un nombre');
    }else if(!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/.test(nombreIngresadoPorUsuario)){
        alert('El nombre solo debe contener letras.');
    }else{
        amigos.push(nombreIngresadoPorUsuario); //se agrega al array
        //alert('Nombre insertado correctamente');
        document.querySelector('#amigo').value = ''; //limpiar caja
        mostrarAmigos();
    }
}

// Funcion que recorre el array y agrega cada nombre a la lista HTML
function mostrarAmigos(){
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; 
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];

        lista.appendChild(li);
    }
}

// Funcion que selecciona de manera aleatoria un nombre almacenado en el array
function sortearAmigo(){
    if(amigos.length === 0 || amigos.length < 2){
        alert('Por favor, inserta al menos dos nombres.')
    }else{
        // Genera un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);

        // Obtiene el amigo correspondiente
        let amigoSeleccionado = amigos[indiceAleatorio];

        document.getElementById('resultado').innerHTML = `El amigo sorteado es: <strong>${amigoSeleccionado}</strong>`;
    }
}
