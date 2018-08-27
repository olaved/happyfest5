(function() {
     'use strict';
     window.addEventListener('load', function() {
       // Seleccionar el formulario para validar
       var forms = document.getElementsByClassName('needs-validation');
       // Validar cada campo y prevenir que se envie
       var validation = Array.prototype.filter.call(forms, function(form) {
         form.addEventListener('submit', function(event) {
           if (form.checkValidity() === false) {
             event.preventDefault();
             event.stopPropagation();
           }
           form.classList.add('was-validated');
         }, false);
       });
     }, false);
   })();

(function() {
     'use strict';
$(document).ready(function() {  
    $('#boton1x').click(function(){
    $('#asidet').html('<h1 class="pt-5 tituloh4">Por Solo </h1><h4 class="pt-5 pb5"> $55.000 <br> Iva incluido</h4>');
  /*  $('#imagenx').replaceWith('<img id="imagenx" src="editar/fiesta/aside1.jpg" class="img-fluid" alt="imagen cambiada" width="500" height="400">');
  */ });
});
   })();

(function() {
     'use strict';
$(document).ready(function() {  
   $('#boton2x').click(function(){
   $('#asidet').html('<h1 class="pt-5 tituloh4">Por Solo </h1><h4 class="pt-5 pb5"> $15.000 <br> Iva incluido</h4>');
 /*   $('#imagenx').replaceWith('<img id="imagenx" data-spy="scroll" src="editar/fiesta/fiesta3.jpg" class="img-fluid" alt="imagen cambiada" width="500" height="400">');
  
  */ });
});
   })();



(function() {
     'use strict';
$(document).ready(function() {  
   $('#boton3x').click(function(){
   $('#asidet').html('<h1 class="pt-5 tituloh4">Por Solo </h1><h4 class="pt-5 pb5"> $50.000 <br> Iva incluido</h4>');
    /*$('#imagenx').replaceWith('<img id="imagenx" src="editar/fiesta/fiesta1.jpg" class="img-fluid" alt="imagen cambiada" width="500" height="400">');
 */  });
});
   })();

(function() {
     'use strict';
$(document).ready(function() {  
   $('#boton4x').click(function(){
  $('#asidet').html('<h1 class="pt-5 tituloh4">Por Solo </h1><h4 class="pt-5 pb5"> $120.000 <br> Iva incluido</h4>');
     /* $('#imagenx').replaceWith('<img id="imagenx" data-spy="scroll" src="editar/fiesta/fiesta3.jpg" class="img-fluid" alt="imagen cambiada" width="500" height="400">');
 */   });
});
   })();

(function() {
     'use strict';
$(document).ready(function() {  
   $('#boton5x').click(function(){
  $('#asidet').html('<h1 class="pt-5 tituloh4">Por Solo </h1><h4 class="pt-5 pb5"> $25.000 <br> Iva incluido</h4>');
     /* $('#imagenx').replaceWith('<img id="imagenx" data-spy="scroll" src="editar/fiesta/fiesta3.jpg" class="img-fluid" alt="imagen cambiada" width="500" height="400">');
 */   });
});
   })();