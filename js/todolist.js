var tareasPorHacer = [];

var marcarImportante = false;
var marcarTerminado = false;
var editarItemTarea = false;

function controlarDatos(dato) {
  console.log("controlando dato");
  return dato != "" && dato != null;
}

$(document).ready(function() {
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
    $(this)
      .parent()
      .remove();
    editarTareas();
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
  tareasPorHacer.push(tarea);
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
}

//Botón para editar tarea
function editarTareas() {
  var editarTarea = prompt("Edita tu tarea");
  tareasPorHacer.push(editarTarea);
  agregarTareas(editarTarea);
}


//Cosas que faltan: 
//agregar si esta completo a otra lista nueva
//guardar
//template
