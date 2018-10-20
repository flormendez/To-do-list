//Botón para editar tarea
$("#editar").click(function() {
    var $li = $("#tareas-por-hacer li").click(function(e) {     //
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


    //Botón editar
    var editarTarea = false; 

    $("#editar").click(function() {
        editarTarea = true;
      });
    
      $(document).on("click", "#tareas-por-hacer li", function() {
        if (editarTarea) {
              $(this).remove();
              var editarTarea = prompt("Edita tu tarea");
              tareasPorHacer.push(editarTarea);
              $("#tareas-por-hacer").append("<li></li>");
              $("#tareas-por-hacer li:last-child").append(editarTarea);
       
        
            $(".delete").click(function(e) {
              $(this)
                .parent()
                .remove();
            });
        };
    
      });
    