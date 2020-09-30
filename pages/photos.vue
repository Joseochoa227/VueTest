<template>
  <div>
    <i class="fab fa-accessible-icon"></i>
    <!-- Navbar -->
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
          <ul class="navbar-nav m-auto ">
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

    <!-- FOTOS -->
    <div class="row">
      <div v-for="photo of photos" :key="photo.id" class="col-4 contenedorPhoto">
        <h5>{{ photo.title }}</h5>
        <div class="photo">
          <img :src="photo.thumbnailUrl" alt="" />
          <div class="idImg">{{ photo.albumId }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import env from "../config/env";
export default {
  name: "PhotosPage",
  data() {
    return {
      photos: [],
    };
  },
  created() {
    axios.get(`${env.endPoint}?_limit=10`).then(
      (response) => {
        console.log(response);
        this.photos = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  },
};
</script>
<style lang="scss" scoped>
.enlaces {
  text-decoration: none;
  color: #31846a;
  &:hover {
    color: black;
  }
}

.contenedorPhoto {
  text-align: center;
  padding: 30px;

  h5 {
    min-height: 80px;
    color: #444444;
    background: #ffffff;
    text-shadow: 1px 0px 1px #cccccc, 0px 1px 1px #eeeeee, 2px 1px 1px #cccccc, 1px 2px 1px #eeeeee, 3px 2px 1px #cccccc, 2px 3px 1px #eeeeee,
      4px 3px 1px #cccccc, 3px 4px 1px #eeeeee, 5px 4px 1px #cccccc, 4px 5px 1px #eeeeee, 6px 5px 1px #cccccc, 5px 6px 1px #eeeeee,
      7px 6px 1px #cccccc;
    color: #444444;
    background: #ffffff;
  }
}

.photo {
  position: relative;

  cursor: pointer;
  .idImg {
    position: absolute;
    height: 0px;
    bottom: 0;
    left: 124px;
    width: 150px;
    overflow: hidden;
    background: #31846a;
  }
  &:hover {
    .idImg {
      height: auto;
    }
  }
}
</style>
