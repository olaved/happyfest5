<?php
        include 'templates/header.php';
        include 'templates/navegacion.php';
?>
    
    <div class="container fest">
            <h1 class="mt-5 center text-center">Contacto</h1>
    </div>

    <div class="container pb-5 formulariox">
        <div class="row justify-content-center">
                <main class="col-lg-8 contenido-principal">
                    <h2 class="d-block d-md-none text-uppercase text-center">
                        Contacto
                    </h2>
                    <form class="p-5 formulario-contacto needs-validation" novalidate action="enviar2.php">
                          <div class="form-group">
                              <label for="nombre">Nombre:</label>
                              <input type="text" name="nombre" class="form-control" id="nombre" placeholder="Tu Nombre" required>
                              <div class="invalid-feedback">
                                 El nombre es obligatorio
                              </div>
                              <div class="valid-feedback">
                                Correcto
                             </div>
                          </div>
                          <div class="form-group">
                            <label for="email">E-Mail:</label>
                            <input type="email" name="email" class="form-control" id="email" placeholder="Tu Correo" required>
                            <div class="invalid-feedback">
                              El correo es obligatorio
                           </div>
                           <div class="valid-feedback">
                             Correcto
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="mensaje">Mensaje:</label>
                          <textarea id="mensaje" name="mensaje" class="form-control"  required></textarea>
                          <div class="invalid-feedback">
                            El mensaje es obligatorio
                         </div>
                         <div class="valid-feedback">
                           Correcto
                        </div>
                      </div>
                      <input type="submit" class="btn btn-primary text-uppercase" value="Enviar">
                    </form>
                </main>

        </div>
    </div>


<?php
    include 'templates/footer.php'
?>