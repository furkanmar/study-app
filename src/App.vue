<template>
  <div class="container-fluid">
    <div class="container">
      <div class="row">
        <div class="col-2 mt-4 mb-2 ms-4 px-0 border rounded">
          <NavComp/>
        </div>
        <div class="col-7 mt-4 mb-2 ms-4 px-4 border rounded">
          <RouterView/>
        </div>
        <div class="col-2 mt-4 mb-2 ms-2 px-4 border rounded">
          <SideBar/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavComp from './components/NavComp.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: {
    NavComp,
    SideBar
  }
}
</script>

<style scoped>
.container-fluid {
  background-color: beige;
  background-image: url('@/../public/stairs.jpg'); /* Resim yolu */
  background-size: cover; /* Resmi kapsayacak şekilde ölçeklendirir */
  background-position: center; /* Resmi merkezler */
  background-repeat: no-repeat;
  padding-top: 3vh; 
  padding-bottom: 3vh;
  min-height: 100vh; /* Tüm ekran yüksekliği */
}

.container {
  background-color: whitesmoke;
  height: auto; /* İçeriğe göre otomatik yükseklik */
}
</style>
