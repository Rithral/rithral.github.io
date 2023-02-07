const BotonDatos = document.getElementById("DatosBoton");
const BotonExperencia = document.getElementById("ExperienciasBoton");
const GenerarCV = document.getElementById("generarCV"); 

BotonDatos.addEventListener("click", () => {
  document.getElementById("Datos").hidden = false;
  document.getElementById("ExperienciasF").hidden = true;
})

BotonExperencia.addEventListener("click", () => {
  document.getElementById("Datos").hidden = true;
  document.getElementById("ExperienciasF").hidden = false;
})


GenerarCV.addEventListener("click", () => {  //Genera el CV y los intereses y aplica en sus respectivos inputs
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const profilePicture = document.getElementById("fotoPerfil");
      profilePicture.src = data.results[0].picture.medium;
      document.getElementById("name").value = `${data.results[0].name.first} ${data.results[0].name.last}`;
      document.getElementById("email").value = data.results[0].email;
      document.getElementById("telephone").value = data.results[0].phone;
      document.getElementById("age").value = data.results[0].dob.age;
      document.getElementById('address').value = `${data.results[0].location.street.name} ${data.results[0].location.street.number}`;
    })
    fetch("https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1")
    .then(response => response.json())
    .then(bacon => {
      document.getElementById("experiencia").innerHTML = bacon     
    }
    )
    fetch("https://baconipsum.com/api/?type=all-meat&paras=1")
    .then(response => response.json())
    .then(bacon2 => {
      document.getElementById("intereses").innerHTML = bacon2;    
    }
    )
  })

  function TransferirDatos(){
    
    
  }