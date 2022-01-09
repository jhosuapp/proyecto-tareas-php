<?php 
    include 'template-parts/header.php';
?>
<h2 class="get-nombre tareas__titulo"></h2>
<form action="" class="form__tareas">
    <input class="form__tareas-input" type="text" id="input-titulo" placeholder="Titulo de tarea">
    <input class="form__tareas-input" type="text" id="input-contenido" placeholder="Contenido tarea">
    <button class="form__tareas-submit" type="submit">Guardar tarea</button>
</form>

<div class="tareas">
    
</div>

<div class="modal__tareas">
    <div class="modal__tareas-contenedor">
        <h2 class="modal__tareas-titulo">¿Quieres eliminar esta tarea?</h2>
        <form class="modal__tareas-contenedor-botones">
            <button class="modal__tareas-button modal__tareas-button--verde" id="remove-item" type="submit">Si</button>
            <a class="modal__tareas-button" id="no-remove-item">No</a>
        </form>
    </div>
</div>

<script src="assets/js/tareas.js"></script>
<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>
