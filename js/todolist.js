var tareasPorHacer = [];

var marcarImportante = false;
var marcarTerminado = false;
var editarItemTarea = false;

$(document).ready(function() {
  //Botón agregar tareas y botón eliminar específico para cada tarea
  $("#nuevo").click(function() {
    nuevoSelected = true;
    var tarea = prompt("Agrega nueva tarea");

    tareasPorHacer.push(tarea);
    $("#tareas-por-hacer").append(
      "<li class='list-item' title='" +
        tarea +
        "'><input type='checkbox'/></li>"
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
    nuevoSelected = false;
  });

  $(document).on("click", "#important", function() {
    $(this)
      .parent()
      //Resalta
      .addClass("selected");
    //Ordena el <li> importante primero en la lista
    $(this).parent();
    $("#tareas-por-hacer").prepend($(this).parent());
  });

  //Botón eliminar item
  $("#terminado").click(function() {
    $("#tareas-por-hacer li").click(function(e) {
      $(this).remove();
    });
  });

  //Botón para editar tarea dinamico
  $(document).on("click", "#edit", function() {
    $(this)
      .parent()
      .remove();
    var editarTarea = prompt("Edita tu tarea");
    tareasPorHacer.push(editarTarea);
    $("#tareas-por-hacer").append(
      "<li class='list-item' title='" +
        editarTarea +
        "'><input type='checkbox'/></li>"
    );
    let text =
      editarTarea.length > 37
        ? editarTarea.substring(0, 34) + "..."
        : editarTarea;
    $("#tareas-por-hacer li:last-child").append(editarTarea);
    $("#tareas-por-hacer li:last-child").append(
      "<button id='important' class='button button-list'> <i class='fas fa-star'></i> </button>"
    );
    $("#tareas-por-hacer li:last-child").append(
      "<button id='delete' class='button button-list'> <i class='fas fa-trash'></i></button>"
    );
    $("#tareas-por-hacer li:last-child").append(
      "<button id='edit' class='button button-list'> <i class='fas fa-edit'></i></button>"
    );
  });

  //Agrega botón delete en cada li de nueva tarea
  $(document).on("click", "#delete", function() {
    $(this)
      .parent()
      .remove();
  });
});

//agregar si esta completo a otra lista nueva
//guardar
