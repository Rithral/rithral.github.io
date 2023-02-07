﻿# rithral.github.io
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generador de Curriculum Vitae</title>
    <link rel="stylesheet" type="text/css" href="css/style.css">
   
  </head>
  <body>
    <div class="form">
      <div class="form-item">
        <img id="fotoPerfil" src="" alt="Foto de Perfil">
        <div>
          <label for="name">Nombre:</label>
          <input type="text" id="name" disabled>
        </div>
      </div>
       <ul class="navigation" id="nav">
      <li><a id="DatosBoton">Datos</a></li>
      <li><a id="ExperienciasBoton">Experiencias</a></li>     
        </ul>
      <div id="Datos">
        <div class="form-item">
        <label for="email">Email:</label>
        <input type="email" id="email" disabled>
      </div>
      <div class="form-item">
        <label for="telephone">Telefono:</label>
        <input type="tel" id="telephone" disabled>
      </div>
      <div class="form-item">
        <label for="age">Edad:</label>
        <input type="text" id="age" disabled>
      </div>
      <div class="form-item">
        <label for="address">Direccion:</label>
        <input type="text" id="address" disabled>
      </div>
    </div>
    <div id="ExperienciasF" hidden>
    <div class="form-item">
      <label for="experiencia">Experiencia:</label>
    </div>
    <div class="form-item">
      <p id="experiencia">Experiencias</p>
    </div>
    <div class="form-item">
      <label for="Intereses">Intereses:</label>  
    </div>
    <div class="form-item">
      <p id="intereses">Intereses</p>
    </div>
  </div>
      <button id="generarCV">Generar CV</button>
    </div>
    <script src="js/function.js">
     
    </script>
</body>
</html>
    

