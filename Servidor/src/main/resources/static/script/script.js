const url = "http://localhost:8080/api/Empleados";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < data.length; i++) {
      const nombre = data[i].nombre;
      const apellido = data[i].apellido;
      const edad = data[i].edad;

      var ul = document.getElementById("nombres");
      var newLi = document.createElement("li");
      newLi.textContent = nombre;
      ul.appendChild(newLi);

      var ul = document.getElementById("apellidos");
      var newLi = document.createElement("li");
      newLi.textContent = apellido;
      ul.appendChild(newLi);

      var ul = document.getElementById("edades");
      var newLi = document.createElement("li");
      newLi.textContent = edad;
      ul.appendChild(newLi);

      var ul = document.getElementById("email")
      var newLi = document.createElement("li")
      newLi.textContent = email
      ul.appendChild(newLi)
      console.log(data)
    }
  })
  .catch((error) => {
    console.error("Error al obtener los datos:", error);
  });

function postData() {
  
  var valueNombre = document.getElementById("Nombre");
  var valueApellido = document.getElementById("Apellido");
  var valueEdad = document.getElementById("edad");
  var valueEmail = document.getElementById("email");
  var nombre = valueNombre.value.trim();
  var apellido = valueApellido.value.trim();
  var edad = valueEdad.value.trim();
  var email = valueEmail.value.trim();
  const url = "http://localhost:8080/api/Empleados";
  const data = {
    nombre: nombre,
    apellido: apellido,
    edad: parseInt(edad),
    email: email
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
    fetch(url)
  .then((response) => response.json())
  location.reload()
  .then((data) => {
    for (let i = 0; i < data.length - 1; i++) {
      
      const ultimoElemento = data[data.length - 1]
      
      const nombre = ultimoElemento.nombre;
      const apellido = ultimoElemento.apellido;
      const edad = ultimoElemento.edad;
      const email = ultimoElemento.email;

      var ul = document.getElementById("nombres");
      var newLi = document.createElement("li");
      newLi.textContent = nombre;
      ul.appendChild(newLi);

      var ul = document.getElementById("apellidos");
      var newLi = document.createElement("li");
      newLi.textContent = apellido;
      ul.appendChild(newLi);

      var ul = document.getElementById("edades");
      var newLi = document.createElement("li");
      newLi.textContent = edad;
      ul.appendChild(newLi);

      var ul = document.getElementById("email")
      var newLi = document.createElement("li")
      newLi.textContent = email
      ul.appendChild(newLi)

      console.log(data)
      alert("El empleado se creo con exito")
    }
  })
}
