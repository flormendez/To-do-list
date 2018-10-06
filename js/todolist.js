var tareasPorHacer = [];

//Botón agregar tareas
$(document).ready(function() {
  $("#nuevo").click(function() {
    var tarea = prompt("Agrega nueva tarea");
    tareasPorHacer.push(tarea);
    $("#tareas-por-hacer").append("<li></li>");
    $("#tareas-por-hacer li:last-child").append(tarea); //buscar append
  });

  //Botón marcar como importante
  $("#importante").click(function() {
    //tendría que ser el <li> clickeado que cambie su background color
    var $li = $("#tareas-por-hacer li").click(function() {
      //$li.removeClass('selected');
      $(this).addClass("selected");
    });
  });

  //Botón eliminar
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
});
});






});
