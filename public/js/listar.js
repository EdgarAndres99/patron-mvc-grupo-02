async function cargarTodosDatos ()
{ 
  const request = await fetch('/dev/buscarTodos', {
    method: 'GET',
    headers: {
 
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const datos = await request.json()

  let listadoHTML = ''// Variable para almacenar todas las filas de los datos de cada usuario
  for (const dato of datos)// creo variable usuario de usuarios para tomar datos del JSON
  {
    const clienteHTML = '<tr><td>' + dato._id + '</td><td>' + dato.nombre + ' ' + dato.apellido + '</td><td>' +
    dato.correo + '</td><td>' + dato.provincia + '</td><td>' + dato.ciudad +
                      '</td></tr>'
    listadoHTML += clienteHTML
  }

  document.querySelector('#tabla_listar_datos tbody').outerHTML = listadoHTML
}

async function cargarPorId ()
{ 
  let id = document.getElementById('id').value

  const request = await fetch('/dev/buscarPorId/'+id, { 
    method: 'GET',
    headers: {

      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
  const dato = await request.json()

  let listadoHTML = ''
    
    const clienteHTML = '<tr><td>' + dato._id + '</td><td>' + dato.nombre + ' ' + dato.apellido + '</td><td>' +
    dato.correo + '</td><td>' + dato.provincia + '</td><td>' + dato.ciudad +
                      '</td></tr>'
    listadoHTML += clienteHTML

  document.querySelector('#tabla_listar_datos tbody').outerHTML = listadoHTML
}