const getForm = document.querySelectorAll('.login input');
const getFormAlone = document.querySelector('.login');


const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const expresionesValidacion = {
    nombre: false,
    correo: false,
    celular: false
}


const functionValidation = (e) =>{
    switch (e.target.name) {
        case 'nombre':
            funtionCode(expresiones.nombre, e.target, "nombre");
        break;
        case 'correo':
            funtionCode(expresiones.correo, e.target, "correo");
        break;
        case 'celular':
            funtionCode(expresiones.telefono, e.target, "celular");
        break;
    }
}

const funtionCode = (expresion, tar, tipo) => {
    if(expresion.test(tar.value)){
        document.querySelector(`.login__bloque--${tipo}`).classList.add('login__bloque-bien');
        document.querySelector(`.login__bloque--${tipo}`).classList.remove('login__bloque-mal');
        expresionesValidacion[tipo] = true;
        
    } else{
        document.querySelector(`.login__bloque--${tipo}`).classList.remove('login__bloque-bien');
        document.querySelector(`.login__bloque--${tipo}`).classList.add('login__bloque-mal');
        expresionesValidacion[tipo] = false;
        
    }
}

getForm.forEach((input)=>{
    input.addEventListener('blur', functionValidation);
    input.addEventListener('keyup', functionValidation);
});

getFormAlone.addEventListener('submit', (e)=>{
    e.preventDefault();
    if(expresionesValidacion.nombre && expresionesValidacion.correo && expresionesValidacion.celular){
        var datosUsuario = {
            nombre: document.querySelector('#nombre').value,
            correo: document.querySelector('#correo').value,
            celular: document.querySelector('#celular').value,
        }
        localStorage.setItem('datos', JSON.stringify(datosUsuario));
        window.setTimeout( ()=>{
            window.location="./tareas.php";
        }, 2500);
        document.querySelector('.login__mensaje--texto-correcto').classList.add('active');
    } else{
        var getMensajeValidation = document.querySelector('.login__mensaje');
        getMensajeValidation.classList.add('active');
        window.setTimeout( ()=>{
            getMensajeValidation.classList.remove('active');
        }, 2500);
    }
});


//BUTTOON SUBMIT

var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }