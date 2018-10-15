var tareasPorHacer = [];

var marcarImportante = false;
var marcarTerminado=false;

//Botón agregar tareas y botón eliminar específico para cada tarea
$(document).ready(function() {

//Botón agregar tareas y botón eliminar específico para cada tarea
  $("#nuevo").click(function() {
    nuevoSelected = true;
    var tarea = prompt("Agrega nueva tarea");
    tareasPorHacer.push(tarea);
    $("#tareas-por-hacer").append("<li></li>");
    $("#tareas-por-hacer li:last-child").append(tarea);
    $("#tareas-por-hacer li:last-child").append(
      "<button class='delete'>X</button>"
    );
    nuevoSelected = false;
  });

  //Agrega botón delete en cada li de nueva tarea
  $(document).on("click", ".delete", function() {
    $(this)
      .parent()
      .remove();
  });

  $("#importante").click(function() {
    marcarImportante = true;
  });

  $(document).on("click", "#tareas-por-hacer li", function() {
    if (marcarImportante) {
      $(this).addClass("selected");
      //Ordena el <li> importante primero en la lista
      $(this)
        .parent()
        .prepend($(this));
      marcarImportante = false;
    }
  });




//Creo checkboxes y los oculto para mostrarlos cuando se presione el botón "tara terminada"
 var checkBox = (document).on("click", "#tareas-por-hacer li:last-child", function(){
  '<input class="check" type="checkbox">'
}
);
$checkBox.hide();

//Botón eliminar item
$("#terminado").click(function() {
  $("#tareas-por-hacer li").click(function(e) {
    $(this).remove();
  });
});

//Botón para editar tarea
$("#editar").click(function() {
  var $li = $("#tareas-por-hacer li").click(function(e) {
    $(this).remove();
    var editarTarea = prompt("Edita tu tarea");
    tareasPorHacer.push(editarTarea);
    $("#tareas-por-hacer").append("<li></li>");
    $("#tareas-por-hacer li:last-child").append(editarTarea);
    $("#tareas-por-hacer li:last-child").append(
      "<button class='delete'>X</button>"
    );

    $(".delete").click(function(e) {
      $(this)
        .parent()
        .remove();
    });
  });
});

//Botón tarea terminada
$("#tareaLista").click(function() {
  marcarTerminado=false;
});

  $("#tareas-por-hacer li").click(function(e) {
    $checkBox.show();
  });


/*$("#tareaLista").click(function(){
    var $li = $("#tareas-por-hacer li").click(function(e) {
      $checkBox.show();
  });
});*/
});