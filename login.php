<?php 
    include 'template-parts/header.php';
?>
<form action="" class="login">

    <img src="assets/images/nubes.png" alt="" class="login__nubes">
    <img src="assets/images/cloud-1--reverse.png" alt="" class="login__nubes--two">

    <div class="login__modal active">
        <img src="assets/images/YDRAY-loro-002-5.png" alt="" class="login__loro">

        <h3 class="login__titulo">Ingrese los siguientes datos del estudiante</h3>

        <!--BLOQUE NOMBRE -->

        <div class="login__bloque login__bloque--nombre">
            <label class="login__label" for="nombre">Nombre</label>
            <div class="login__contenedor">
                <input type="text" class="login__input" id="nombre" name="nombre">
                <i class="login__validacion-estado fas fa-check-circle" aria-hidden="true"></i>
            </div>
            <p class="login__validacion-inputs">Escribe un nombre sin caracteres especiales</p>
        </div>

        <!-- BLOQUE CORREO -->

        <div class="login__bloque login__bloque--correo">
            <label class="login__label" for="correo">Correo</label>
            <div class="login__contenedor">
                <input type="email" class="login__input" id="correo" name="correo">
                <i class="login__validacion-estado fas fa-check-circle" aria-hidden="true"></i>
            </div>
            <p class="login__validacion-inputs">Por favor ingrese un correo electronico valido</p>
        </div>

        <!-- BLOQUE NUMERO -->

        <div class="login__bloque login__bloque--celular">
            <label class="login__label" for="celular">Celular</label>
            <div class="login__contenedor">
                <input type="text" class="login__input" id="celular" name="celular">
                <i class="login__validacion-estado fas fa-check-circle" aria-hidden="true"></i>
            </div>
            <p class="login__validacion-inputs">Ingrese su número sin caracteres especiales, solo el número</p>
        </div>

        <!-- VALIDAION -->

        <div class="login__mensaje">
            <i class="login__mensaje--icono fas fa-exclamation-triangle"></i>
            <p class="login__mensaje--texto">Todos los campos son obligatorios</p>
        </div>

        <!-- ENVIO -->

        <div class="login__bloque-submit">
            <button class="bubbly-button" type="submit">Enviar</button>
        </div>


        <p class="login__mensaje--texto-correcto">Formulario enviado exitosamente</p>
    </div>
    
    <span class="login__waves__item"></span>
    <span class="login__waves__item login__waves__item--two"></span>

</form>


<script src="assets/js/mainscript.js"></script>
<script src="https://kit.fontawesome.com/2c36e9b7b1.js" crossorigin="anonymous"></script>