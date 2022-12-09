$(document).ready(function () { // .ready hace que se ejecute el codigo de la funcion una vez se haya cargado la pagina
  // alert(12345)
  //cargarTodosDatos()
  // DataTable es una libreria que agrega funcionalidades a la tabla(Como paginacion y demas)
})


async function cargarTodosDatos ()// Cuando se usa await se le debe indicar a la funcion que es asincrona
{ // funcion fetch para hacer un llamado al servidor
  // funcion fetch sacada de stackoverflow fetch example: Fetch: POST JSON data
  const request = await fetch('/dev/buscarTodos', { // await permite esperar hasta que se obtenta el resultado del llamado, en este caso del fetch
    method: 'GET',
    headers: {
    // Indica que el contenido va a ser de tipo Json
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const datos = await request.json()// convierte el resultado en Json //Para el metodo Delete no necesito esta linea ya que no se tiene una respuesta en JSON

  console.log(datos)

  let listadoHTML = ''// Variable para almacenar todas las filas de los datos de cada usuario
  for (const dato of datos)// creo variable usuario de usuarios para tomar datos del JSON
  {
    // Datos que se pasan a la Tabla Usuarios; en la seccion tbody de la Tabla Usuarios
    const clienteHTML = '<tr><td>' + dato._id + '</td><td>' + dato.nombre + ' ' + dato.apellido + '</td><td>' +
    dato.email + '</td><td>' + dato.provincia + '</td><td>' + dato.ciudad +
                      '</td></tr>'
    listadoHTML += clienteHTML
  }
  // Paso datos de forma estatica
  // let usuarioHTML = '<tr><td>123</td><td>Edgar Alvarado</td><td>edgar@gmail.com</td><td>0998547858</td><td><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></td></tr>';

  document.querySelector('#tabla_listar_datos tbody').outerHTML = listadoHTML
}

async function cargarPorId ()// Cuando se usa await se le debe indicar a la funcion que es asincrona
{ // funcion fetch para hacer un llamado al servidor

  let id = document.getElementById('id').value

  // funcion fetch sacada de stackoverflow fetch example: Fetch: POST JSON data
  const request = await fetch('/dev/buscarPorId/'+id, { // await permite esperar hasta que se obtenta el resultado del llamado, en este caso del fetch
    method: 'GET',
    headers: {
    // Indica que el contenido va a ser de tipo Json
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const dato = await request.json()// convierte el resultado en Json //Para el metodo Delete no necesito esta linea ya que no se tiene una respuesta en JSON

  console.log(dato)

  let listadoHTML = ''// Variable para almacenar todas las filas de los datos de cada usuario
  
    // Datos que se pasan a la Tabla Usuarios; en la seccion tbody de la Tabla Usuarios
    const clienteHTML = '<tr><td>' + dato._id + '</td><td>' + dato.nombre + ' ' + dato.apellido + '</td><td>' +
    dato.email + '</td><td>' + dato.provincia + '</td><td>' + dato.ciudad +
                      '</td></tr>'
    listadoHTML += clienteHTML
 
  // Paso datos de forma estatica
  // let usuarioHTML = '<tr><td>123</td><td>Edgar Alvarado</td><td>edgar@gmail.com</td><td>0998547858</td><td><a href="#" class="btn btn-danger btn-circle btn-sm"><i class="fas fa-trash"></i></a></td></tr>';

  document.querySelector('#tabla_listar_datos tbody').outerHTML = listadoHTML
}