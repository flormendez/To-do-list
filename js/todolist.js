var listaToDos = [];
var marcarImportante = false;
var marcarTerminado = false;
var editarItemTarea = false;

$(document).ready(function() {
  function obtenerLocalStorage() {
    var listaString2 = localStorage.getItem("lista");

    for (var i = 1; i <= listaToDos; i++) {
      console.log(listaToDos[i]);
      listaToDos = JSON.parse(listaString2);
    }
  }

  obtenerLocalStorage();

  //Botón agregar tareas
  $("#nuevo").click(function() {
    var tarea = prompt("Agrega nueva tarea");
    if (controlarDatos(tarea)) {
      agregarTareas(tarea);
    }
  });

  //Boton favorito
  $(document).on("click", "#important", function() {
    $(this)
      .parent()
      //Resalta
      .addClass("selected");
    //Ordena el <li> importante primero en la lista
    $(this).parent();
    $("#tareas-por-hacer").prepend($(this).parent());
  });

  //Boton edit
  $(document).on("click", "#edit", function() {
    var editarTarea = prompt("Edita tu tarea");
    if (controlarDatos(editarTarea)) {
      agregarTareas(editarTarea);
    }
    $(this)
      .parent()
      .remove();
  });

  //Boton delete
  $(document).on("click", "#delete", function() {
    $(this)
      .parent()
      .remove();
  });
}); //Acá cierra el document ready

function agregarTareas(tarea) {
  //nuevoSelected = true;
  console.log(tarea);
  listaToDos.push({ tarea });
  $("#tareas-por-hacer").append(
    "<li class='list-item' title='" + tarea + "'><input type='checkbox'/></li>"
  );
  let text = tarea.length > 37 ? tarea.substring(0, 34) + "..." : tarea;
  $("#tareas-por-hacer li:last-child").append(text);
  $("#tareas-por-hacer li:last-child").append(
    "<button id='important' class='button button-list'> <i class='fas fa-star'></i> </button>"
  );
  $("#tareas-por-hacer li:last-child").append(
    "<button id='delete' class='button button-list'> <i class='fas fa-trash'></i></button>"
  );
  $("#tareas-por-hacer li:last-child").append(
    "<button id='edit' class='button button-list'> <i class='fas fa-edit'></i></button>"
  );
  //nuevoSelected = false;
  guardarLista();
}

function controlarDatos(dato) {
  console.log("controlando dato");
  return dato != "" && dato != null;
}

function guardarLista() {
  var listaString = JSON.stringify(listaToDos);

  localStorage.setItem("lista", listaString);
}

//Cosas que faltan:
//agregar si esta completo a otra lista nueva
//guardar
//template
