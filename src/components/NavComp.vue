<template>
  
    <div class="col d-flex flex-column">
      <div class="list-group flex-grow-1 " id="list-tab" role="tablist">
        <router-link
          to="/home"
          class="list-group-item list-group-item-action"
          :class="{ active: $route.path === '/home' }"
          exact
        >
          <i class="fas fa-home"></i> Home
        </router-link>

        <router-link
          to="/notebooks"
          class="list-group-item list-group-item-action "
          :class="{ active: $route.path === '/notebooks' }"
          exact
        >
        
          <i class="fas fa-book"></i> Notebooks
        </router-link>

        <router-link
          to="/profile"
          class="list-group-item list-group-item-action"
          :class="{ active: $route.path === '/profile' }"
          exact
        >

          <i class="fas fa-user"></i> Profile
        </router-link>
        <router-link
          to="/messages"
          class="list-group-item list-group-item-action"
          :class="{ active: $route.path === '/messages' }"
          exact
        >
          <i class="fas fa-envelope"></i> Messages
        </router-link>
        <router-link
          to="/settings"
          class="list-group-item list-group-item-action"
          :class="{ active: $route.path === '/settings' }"
          exact
        >
          <i class="fas fa-cog"></i> Settings
        </router-link>
      </div>
      <!-- Footer -->
      
        
        <div class="text-center">
          <button class="btn btn-danger w-100 " @click="logout">
            <i class="fas fa-sign-out-alt"></i> Logout
          </button>
        </div>
      
    </div>

</template>

<script>
export default {
  name: 'SideBar',
  methods: {
    logout() {
      // Çıkış yapma işlemleri
      console.log('User logged out');
      // Gerçek uygulamada, oturum yönetimi kodu buraya eklenir.
    }
  }
}
</script>
<style scoped>
.col {
  
  display: flex;
  flex-direction: column;
  

  height: 89vh; /* Yükseklik: Ekranın tamamı */
}

.list-group {
  flex-grow: 0.8; /* List group alanının büyümesini sağlar */
}

.footer {
  margin-top: auto; /* Footer'ı en altta hizalar */
  background-color: #f8f9fa;
  padding: 10px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
}

.btn-danger {
  display: flex;
  align-items: center;
}

.btn-danger i {
  margin-right: 8px; /* İkon ile metin arasına boşluk ekler */
}
</style>

