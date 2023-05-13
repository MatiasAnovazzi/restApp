const url = "http://localhost:8080/api/Empleados";

var ul = document.getElementById("nombres");
var newLi = document.createElement("li");
newLi.textContent = "pepe"
ul.appendChild(newLi)

var ul = document.getElementById("apellidos");
var newLi = document.createElement("li");
newLi.textContent = "argento";
ul.appendChild(newLi)

var ul = document.getElementById("edades");
var newLi = document.createElement("li");
newLi.textContent = "35";
ul.appendChild(newLi);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    const nombre = data.nombre;
    const apellido = data.apellido;
    const edad = data.edad;

    for (let i = 0; i < nombre.length; i++) {
        var ul = document.getElementById("nombres");
        var newLi = document.createElement("li");
        newLi.textContent = data.nombre
        ul.appendChild(newLi)
    }
    for (let i = 0; i < apellido.length; i++) {
      var ul = document.getElementById("apellidos");
      var newLi = document.createElement("li");
      newLi.textContent = data.apellido
      ul.appenChild(newLi);
    }
    for (let i = 0; i < edad.length; i++) {
      var ul = document.getElementById("edades");
      var newLi = document.createElement("li");
      newLi.textContent = data.edad
      ul.appenChild(newLi);
    }
  });

function postData() {
  var valueNombre = document.getElementById("Nombre");
  var valueApellido = document.getElementById("Apellido");
  var valueEdad = document.getElementById("edad");
  var nombre = valueNombre.value;
  var apellido = valueApellido.value;
  var edad = valueEdad.value;
  const url = "http://localhost:8080/api/Empleados";
  const data = {
    nombre: nombre,
    apellido: apellido,
    edad: parseInt(edad),
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
