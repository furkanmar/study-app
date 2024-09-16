  <template>
    <div class="container-fluid">
      <div class="container">
        <div class="row" v-if="!loginPage">
          <div class="col-2 mt-4 mb-2 ms-4 px-0 border rounded">
            <NavComp/>
          </div>
          
          <div class="col-7 mt-4 mb-2 ms-2 px-4 border rounded">
            <RouterView/>
          </div>
          <div class="col-2 mt-4 mb-2 ms-2 px-4 border rounded">
            <SideBar/>
          </div>
        </div>
        <div class="row" v-else>
            <LoginPage/>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  import NavComp from './components/NavComp.vue';
  import SideBar from './components/SideBar.vue';
  import LoginPage from './components/Login/LoginPage.vue';
  import {ref} from 'vue';

  const loginPage=ref(false);


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
    border-radius: 1%;
    border: 4px solid;
    
    background-color: whitesmoke;
    height: 90vh; /* İçeriğe göre otomatik yükseklik */
  }
  </style>
