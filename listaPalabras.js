var listaPalabras = ["juego", "lista", "pelota", "auto", "camion", "gallina", "perro", "helado"];
var palabrasGuardadas = window.localStorage;
var texto = document.getElementById('texto');
var contador = localStorage.length;
var expresion = /[A-Z0-9À-ÿ\s+]/;
/* localStorage.clear(); */

function agregarPalabra(){
  var palabraTexto = texto.value;
  if (typeof palabraTexto === 'string'){
    if ((palabraTexto.length) && (palabraTexto.length <= 8)){
        if(expresion.test(palabraTexto)){
            alert("La palabra escrita solo puede tener caracteres no númericos, en mínuscula y sin tilde");
            texto.placeholder = "Escribir una palabra para agregar (Max: 8 Letras)";
            texto.value = "";
        }else{
          if((localStoragePalabraExiste(palabraTexto) === false) && (listaPalabraExiste(palabraTexto) === false)){
            contador++;
            palabrasGuardadas.setItem(contador, texto.value);
            texto.placeholder = "Palabra guardada exitosamente!";
            texto.value = "";
          }else{
            alert('La palabra ya se encuentra agregada');
            texto.placeholder = "Escribir una palabra para agregar (Max: 8 Letras)";
          }
        }
    }else{
        alert('La palabra debe tener entre 1 y 8 caracteres');
        texto.placeholder = "Escribir una palabra para agregar (Max: 8 Letras)";
    }
}else{
    alert('El argumento debe ser una cadena de caracteres.');
    texto.placeholder = "Escribir una palabra para agregar (Max: 8 Letras)";
    texto.value = "";
}
}

function actualizarLista(){
  for(var i = 1; i <= palabrasGuardadas.length; i++){
    if(listaPalabraExiste(palabrasGuardadas.getItem(i)) === false){
        listaPalabras.push(palabrasGuardadas.getItem(i));
    }
  }
}

function listaPalabraExiste(palabraAux){
    var bandera = false;
    for(var i = 0; i <= listaPalabras.length; i++){
        if(listaPalabras[i] === palabraAux){
            bandera = true;
        }
    }
    return bandera;
}

function localStoragePalabraExiste(palabraAux){
    var bandera = false;
    for(var i = 0; i <= palabrasGuardadas.length; i++){
        if(palabrasGuardadas.getItem(i) === palabraAux){
            bandera = true;
        }
    }
    return bandera;
}