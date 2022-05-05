<template>
  <div class="text-center row">
    <h1>Bienvenido a</h1>
    <img src="@/assets/logo.svg" class="about-logo mx-auto d-block rounded img-fluid col-4" alt="D'Dot logo">

  <!-- Collapse -->
    <p>
      <a class="btn" data-bs-toggle="collapse" href="#equipoCollapse" role="button" aria-expanded="false"
        aria-controls="multiCollapseExample1">
        <h2>Equipo</h2>
      </a>
      <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#marcasCollapse" aria-expanded="false"
        aria-controls="multiCollapseExample2">
        <h2>Marcas</h2>
      </button>
      <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse"
        aria-expanded="false" aria-controls="multiCollapseExample1 multiCollapseExample2"><h3>^</h3></button>
    </p>

    <div class="row">
      <div class="col-sm-12">
        <div class="collapse multi-collapse" id="equipoCollapse">
          <p>
            Somos un grupo de amigos enamorados de la cultura 420
            que busca compartir con todo la comunidad las herramientas
            para su consumo ludico y medicinal. Además de otros productos
            que se llevan prefectamente de la mano.
            <br><br>
            Nos encanta que estes aquí. Esperemos encuentres algo de tu agrado.
          </p>
        </div>
      </div>

    <div class="col-sm-12">
      <div class="collapse multi-collapse" id="marcasCollapse">
          <div class="row">
            <div class="col">
              <img class="brands-logo" src="@/assets/brands/Raw.png" alt="Raw">
            </div>
          <div class="col">
            <img class="brands-logo" src="@/assets/brands/LRC.svg" alt="Lion Rolling Circus">
          </div>
          </div>
          <div class="row">
            <div class="col">
              <img class="brands-logo" src="@/assets/brands/OCB.svg" alt="OCB">
            </div>
            <div class="col">
              <img class="brands-logo" src="@/assets/brands/Blazy.png" alt="Blazy Susan">
            </div>
            <div class="col">
              <img class="brands-logo" src="@/assets/brands/DK.webp" alt="D&K" style="filter: invert(100%);">
            </div>
            <div class="col brands-logo"> <h3>Y más...</h3></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
h1 {
  padding-top: 7vh;
}

.about-logo {
  width: 2em;
  height: auto;
  padding: 2em;
}

.brands-logo {
  width: 10em;
  padding: 1em;
}

collapse {
  padding: 4em;
}
</style>
