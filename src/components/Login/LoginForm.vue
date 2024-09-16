<template>
    
    <div class="body">
    <h2>Study-app'a hoş geldiniz</h2>
        
        <img src="/logo.png" alt="Logo" class="logo-img" />
          
        <h2 class="form-label underline" for="signIn" >Giriş yap</h2>
        <form class="form-floating mb-3 width">
          <input type="email" class="form-control" id="floatingInputValue" v-model="EmailSignIn" required>
          <label for="floatingInputValue">E-mail</label>
        </form>
        <form class="form-floating mb-3 width">
          <input type="password" class="form-control" id="floatingInputValue" v-model="PasswordSignIn" required>
          <label for="floatingInputValue">Şifre</label>
        </form>
        <div class="d-flex width ">
            <div class="d-inline-flex ">Hesabınız Yok Mu?</div>
            <div @click.prevent="register" class="d-inline-flex btn "> Hemen oluşturun</div>

        </div>
        <div class="mb-4">
          <button class="btn btn-success text-uppercase" type="submit" @click.prevent="SignIn">Giriş Yap</button>
        </div>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['registerPage']);

const register=()=>{
    emit('registerPage');
};


</script>
<style>
.width{
    width: 15vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>