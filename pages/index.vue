<template>
  <div>
    <!-- navbar -->
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav m-auto">
            <li class="nav-item ml-3 mr-3">
              <NuxtLink class="enlaces" to="/">Home</NuxtLink>
            </li>
            <li class="nav-item ml-3 mr-3">
              <NuxtLink class="enlaces" to="/photos">Photos</NuxtLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="header m-auto text-center pt-4">
      <h1>VueJS</h1>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.enlaces {
  text-decoration: none;
  color: #31846a;
  &:hover {
    color: black;
  }
}

.header {
  background-image: url("../assets/cover.jpg");
  min-height: 100vh;
  color: white;
  color: #ffffff;
  text-shadow: 3px 5px 2px #474747;
}
</style>
