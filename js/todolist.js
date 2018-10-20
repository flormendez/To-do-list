var tareasPorHacer = [];

var marcarImportante = false;
var marcarTerminado=false;
var editarItemTarea = false; 

$(document).ready(function() {

//Botón agregar tareas y botón eliminar específico para cada tarea
  $("#nuevo").click(function() {
    nuevoSelected = true;
    var tarea = prompt("Agrega nueva tarea");
    tareasPorHacer.push(tarea);
    $("#tareas-por-hacer").append("<li><input type='checkbox'/></li>");
    $("#tareas-por-hacer li:last-child").append(tarea);
    $("#tareas-por-hacer li:last-child").append(
      "<button class='delete'>X</button>");
      //$("#tareas-por-hacer li:last-child").append(
        //"<button id='importante' class='button' >'<i class='fas fa-plus-circle'>'</i></button>
    //);
    nuevoSelected = false;
  });

  //Agrega botón delete en cada li de nueva tarea
  $(document).on("click", ".delete", function() {
    $(this)
      .parent()
      .remove();
  });

  //Botón imporante 
  $("#importante").click(function() {
    marcarImportante = true;
  });

  $(document).on("click", "#tareas-por-hacer li", function() {
    if (marcarImportante) {
      //resalta
      $(this).addClass("selected");
      //Ordena el <li> importante primero en la lista
      $(this)
        .parent()
        .prepend($(this));
      marcarImportante = false;
    }
  });

//Botón eliminar item
$("#terminado").click(function() {
  $("#tareas-por-hacer li").click(function(e) {
    $(this).remove();
  });
});

//Botón para editar tarea
$("#editar").click(function() {
    editarItemTarea = true;
  });

  $(document).on("click", "#tareas-por-hacer li", function() {
    if (editarItemTarea) {
          $(this).remove();
          var editarTarea = prompt("Edita tu tarea");
          tareasPorHacer.push(editarTarea);
          $("#tareas-por-hacer").append("<li><input type='checkbox'/></li>");
          $("#tareas-por-hacer li:last-child").append(editarTarea);
          $("#tareas-por-hacer li:last-child").append(
            "<button class='delete'>X</button>"
          );
          
    };
    editarItemTarea=false;
  });
   
    
  
  //Agrega botón delete en cada li de nueva tarea
  $(document).on("click", ".delete", function() {
    $(this)
      .parent()
      .remove();
  });
  /*
//Botón tarea terminada
$("#tareaLista").click(function() {
  marcarTerminado=false;
});

  $("#tareas-por-hacer li").click(function(e) {
    $checkBox.show();
  });
*/

/*$("#tareaLista").click(function(){
    var $li = $("#tareas-por-hacer li").click(function(e) {
      $checkBox.show();
  });
});*/
});