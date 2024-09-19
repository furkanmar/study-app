  <template>
    <div class="container-fluid">
      <div class="containee">
        <div class="d-flex gap-2 border mt-2 mb-2 px-3" v-if="!loginPage">
          <div class="navbar px-0 border rounded">
            <NavComp/>
          </div>
          
          <div class="content px-2 border rounded">
            <RouterView 
            :activeNotebook="activeNotebook"
            @saveNotebook="addNotebookToList"
            />
          </div>
          <div class="sidebar  border rounded">
            <SideBar 
            :notebooks="notebooks"
            @openNotebook="OpenNotebook"
            />
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
  const notebooks = ref([]);
  const activeNotebook = ref({ Name: '', notes: [] });

 
  

// Child componentten gelen defteri listeye ekleme fonksiyonu
const addNotebookToList = (notebook) => {
  notebooks.value.push(notebook); 
  console.log('defter kaydedildi', notebook, notebooks)
};
const OpenNotebook = (notebook) => {
  console.log(notebook);
  activeNotebook.value=notebook;
  console.log('ac',activeNotebook.value);
};


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
    z-index: 1;
  }

  .containee {
    
    z-index: 2;
    top: 0;
    border-radius: 1%;
    border: 4px solid;
    width: 100%;
    background-color: whitesmoke;
    height: auto; /* İçeriğe göre otomatik yükseklik */
  }
  .content {
    width: 70vw;
    height: 90vh;
  }
  .navbar{
    margin-right: auto;
    width: 15vw;
    height: 90vh;
  }
  .sidebar{
    margin-left: auto;
    width: 15vw;
    height: 90vh;
  }
  </style>
