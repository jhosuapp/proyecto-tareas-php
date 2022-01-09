getDatos = JSON.parse(localStorage.getItem('datos'));

document.querySelector('.get-nombre').textContent = "Hola " + getDatos.nombre + ", escribe aquí tus tareas"


var getFormTareas = document.querySelector('.form__tareas');



var getInputTitulo = document.querySelector('#input-titulo');
var getInputContenido = document.querySelector('#input-contenido');
getFormTareas.addEventListener('submit', (e)=>{
    var tituloValue = getInputTitulo.value;
    var contenidoValue = getInputContenido.value;
    if(tituloValue.length && contenidoValue.length > 1){
        localStorage.setItem(tituloValue, contenidoValue);
    } else{
        e.preventDefault();
    }
});


for(var i in localStorage){

    if(typeof localStorage[i] == 'string'){

        var createP = document.createElement('div');
        createP.classList.add('tareas__item');
        createP.setAttribute('data-storage', i);
        createP.textContent = i;

        var createTest = document.createElement('p');
        createTest.classList.add('tareas__item-titulo');
        createTest.textContent = localStorage[i];

        var getTareas = document.querySelector('.tareas');

        getTareas.append(createP);
        createP.append(createTest);
    } 

}


var getAllItems = document.querySelectorAll('.tareas__item');

getAllItems.forEach((data) =>{
    if(data.getAttribute('data-storage') == 'datos'){
        data.classList.add('hidden');
        data.classList.remove('tareas__item');
    }
});

var getAllTareasInFor = document.getElementsByClassName('tareas__item');
var getModal = document.querySelector('.modal__tareas');
var getButtonNo = document.querySelector('#no-remove-item');
var getButtonYes = document.querySelector('#remove-item');

for(i = 0; i < getAllTareasInFor.length; i++){
    getAllTareasInFor[i].addEventListener('click', function () {
        var getDataStorage = this.getAttribute('data-storage');
        
        getModal.classList.add('active');

        getButtonYes.setAttribute('data-remove', getDataStorage);

        getButtonYes.addEventListener('click', ()=>{
            localStorage.removeItem(getDataStorage);
        });

        getButtonNo.addEventListener('click', () =>{
            getModal.classList.remove('active');
        });

    });
}

var getAllWorkForMore = document.querySelectorAll('.tareas__item');
var getTheButtonShowMore = document.querySelector('#show-more');
getTheButtonShowMore.classList.add('inactive');

getAllWorkForMore.forEach((data, indice) =>{
    
    if(indice >= 6){
        data.classList.add('dnone');
        getTheButtonShowMore.classList.remove('inactive');
        
    }
});

var getAllDnone = document.querySelectorAll('.dnone');



getTheButtonShowMore.addEventListener('click', ()=>{
    getAllDnone.forEach((data, indice)=>{
        if(indice < 0){
            data.classList.remove('dnone');
        }
    });

    var getAllDnoneTwo = document.querySelectorAll('.dnone');
    getAllDnoneTwo.forEach((data, indice)=>{
        if(indice < 2){
            data.classList.remove('dnone');
        }
    });

    if(getAllDnoneTwo.length == 2 || getAllDnoneTwo.length == 1){
        getTheButtonShowMore.classList.add('inactive');
    }
});
