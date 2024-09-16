<template>
    <div class="container">
      <div class=" body" v-show="login">
        <LoginForm @registerPage="pageChange"/>
      </div>
      <div class="row" v-show="!login">
        <RegisterForm @returnLoginPage="returnLoginPage"/>
      </div>
    </div>
</template>
<script setup>
import {ref} from 'vue';
import RegisterForm from './RegisterForm.vue';
import LoginForm from './LoginForm.vue';

const login=ref(true);


const pageChange =()=>{
  login.value=false;
}
const returnLoginPage =()=>{
  login.value=true;
}

</script>
<style>
.body{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

  .logo-img {
    max-width: 200px; /* Resmin genişliği 200px ile sınırlanır */
    height: auto; /* Yükseklik oranı korunarak ayarlanır */
  }

</style>
