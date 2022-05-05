<template>
<router-View>
  <nav class="navbar navbar-expand-md navbar-light bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <img alt="D'Dot" src="@/assets/logo.png" class="d-inline-block align-text-top" width="30" height="30"/>
      D'Dot
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <router-link class="nav-link active" aria-current="page"  to="/">Inicio </router-link>
        </li>
        <li class="nav-item">
           <router-link class="nav-link"  to="/about">Nosotros </router-link>
        </li>
        <li class="nav-item dropdown">
           <router-link class="nav-link dropdown-toggle"   id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"
           to="/shop">
            Tienda
           </router-link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li> <router-link class="dropdown-item"  to="/shop/kits">Kit personalizado </router-link></li>
            <li><hr class="dropdown-divider"></li>
            <li> <router-link class="dropdown-item"  to="/shop/vapos">Vaporizadores </router-link></li>
            <li> <router-link class="dropdown-item"  to="/shop/bongs">Bongs </router-link></li>
            <li> <router-link class="dropdown-item"  to="/shop/pipas">Pipas </router-link></li>
            <li> <router-link class="dropdown-item"  to="/shop/forjar">Forjar </router-link></li>
          </ul>
        </li>
        <li class="nav-item">
           <router-link class="nav-link disabled" to="/user">Disabled </router-link>
        </li>
      </ul>
      <!--form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form-->
    </div>
  </div>
</nav>
  
</router-View>
</template>

