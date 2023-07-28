// Base de usuarios
const users = [
  { username: 'sebastian.pereyra', password: 'coffeman1' },
  { username: 'nicolas.rubio', password: 'teaboy1' },
  { username: 'ariel.pesce', password: 'coffeman2' },
  { username: 'facundo.sanchez', password: 'taekwondo' },
  { username: 'joseluis.rodriguez', password: 'coffeman3' },
  { username: 'thomas.casco', password: 'adminboy' }
];

// Función para verificar el inicio de sesión
function loginUser() {
  // Obtener los valores ingresados en los campos de usuario y contraseña
  const usernameInput = document.getElementById('user').value;
  const passwordInput = document.getElementById('password').value;

  // Verificar si el usuario y la contraseña coinciden en la base de usuarios
  const user = users.find(user => user.username === usernameInput && user.password === passwordInput);

  if (user) {
    // Redireccionar a otra página si el inicio de sesión es exitoso
    window.location.href = './src/pages/main_page.html';
    console.log("holaaa")
  } else {
    // Mostrar un mensaje de error si las credenciales son incorrectas
    alert('Usuario o contraseña incorrectos');
  }
}

// Asignar la función loginUser al evento click del botón "Entrar"
const loginButton = document.querySelector('button');
loginButton.addEventListener('click', loginUser);

 // Obtenemos una referencia al campo de texto y al botón
  const campoTexto = document.getElementById("password");
  const boton = document.getElementById("miBoton");

  // Agregamos un evento para capturar la pulsación de tecla en el campo de texto
  campoTexto.addEventListener("keyup", function(event) {
    // Comprobamos si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
      // Activamos el botón simulando un clic en él
      boton.click();
    }
  });

  // Agregamos el evento click al botón para que haga lo que necesites
  boton.addEventListener("click", function() {
    loginUser()
  });