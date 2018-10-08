var tareasPorHacer = [];

//Botón agregar tareas y botón eliminar específico para cada tarea
$(document).ready(function() {
  $("#nuevo").click(function() {
    var tarea = prompt("Agrega nueva tarea");
    tareasPorHacer.push(tarea);
    $("#tareas-por-hacer").append("<li></li>");
    $("#tareas-por-hacer li:last-child").append(tarea); //buscar append
    $("#tareas-por-hacer li:last-child").append(
      "<button class='delete'>X</button>"
    );
    $(".delete").click(function(e) {
      $(this)
        .parent()
        .remove();
    });
  });

  //Botón marcar como importante
  $("#importante").click(function() {
    var $li = $("#tareas-por-hacer li").click(function() {
      $(this).addClass("selected");
      //Ordena el <li> importante primero en la lista
      $(this)
        .parent()
        .prepend($(this));
    });
  });

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
    });
  });

  //Botón tarea terminada 
  /*$("#terminado").click(function(){
    var $li = $("#tareas-por-hacer li").click(function(e) {
      $(this).append("<button class='delete'>✔</button>");

  });

});*/
});