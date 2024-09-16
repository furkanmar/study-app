<template>
    <div class="d-flex p-2 mt-2 ">
        <div class="d-inline-flex btn">
            <i class='fas fa-arrow-alt-circle-left' 
            @click.prevent="returnLoginPage"
            style='font-size:48px;color:blue'></i>
        </div>
    </div>
    <div class="register-form ">
      <h2 class="form-label ">Kayıt Ol</h2>
      <div class="d-flex gap-2">
  
        <!-- Kullanıcı Adı -->
        <form class="form-floating mb-3 d-inline-flex ">
            <input
            type="text"
            class="form-control"
            id="floatingUsername"
            v-model="username"
            required
            />
            <label for="floatingUsername">Kullanıcı Adı</label>
            <span v-if="errors.username" class="error">{{ errors.username }}</span>
        </form>
    
        <!-- E-posta -->
        <form class="form-floating mb-3 d-inline-flex">
            <input
            type="email"
            class="form-control"
            id="floatingEmail"
            v-model="email"
            required
            />
            <label for="floatingEmail">E-posta</label>
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
        </form>
    </div>
  
      <!-- Şifre -->
      <form class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          v-model="password"
          required
        />
        <label for="floatingPassword">Şifre</label>
        <span v-if="errors.password" class="error">{{ errors.password }}</span>
      </form>
  
      <!-- Şifre Tekrar -->
      <form class="form-floating mb-3">
        <input
          type="password"
          class="form-control"
          id="floatingConfirmPassword"
          v-model="confirmPassword"
          required
        />
        <label for="floatingConfirmPassword">Şifre Tekrar</label>
        <span v-if="errors.confirmPassword" class="error">{{ errors.confirmPassword }}</span>
      </form>
  
      <!-- Kayıt Ol Butonu -->
      <div class="mb-4">
        <button class="btn btn-success text-uppercase" type="submit" @click.prevent="handleSubmit">
          Kayıt Ol
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits } from 'vue';

  
  // Reaktif değişkenler
  const firstName=ref('');
  const lastName=ref('');
  const age=ref('');
  const eduStatus=ref('');
  const gender=ref('');

  const username = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const errors = ref({
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });
  const emmit=defineEmits(['returnLoginPage']);
  const returnLoginPage=()=>{
    emmit('returnLoginPage');
  };
  
  
  const handleSubmit = () => {
    if (validateForm()) {
      alert('Form başarıyla gönderildi!');
    }
  };
  
  // Form doğrulama işlevi
  const validateForm = () => {
    clearErrors();
    
    // Kullanıcı adı doğrulaması
    if (!username.value) {
      errors.value.username = 'Kullanıcı adı boş olamaz.';
    }
  
    // E-posta doğrulaması
    if (!email.value) {
      errors.value.email = 'E-posta boş olamaz.';
    } else if (!isValidEmail(email.value)) {
      errors.value.email = 'Geçerli bir e-posta adresi giriniz.';
    }
  
    // Şifre doğrulaması
    if (!password.value) {
      errors.value.password = 'Şifre boş olamaz.';
    } else if (password.value.length < 6) {
      errors.value.password = 'Şifre en az 6 karakter olmalıdır.';
    }
  
    // Şifre tekrar doğrulaması
    if (confirmPassword.value !== password.value) {
      errors.value.confirmPassword = 'Şifreler uyuşmuyor.';
    }
  
    return Object.values(errors.value).every(error => error === null);
  };
  
  // E-posta doğrulama işlevi
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };
  
  // Hataları temizleme işlevi
  const clearErrors = () => {
    errors.value = {
      username: null,
      email: null,
      password: null,
      confirmPassword: null,
    };
  };
  </script>
  
  <style scoped>
  .register-form {
    max-width: 400px;
    margin: 0 auto;
  }
  
  .error {
    color: red;
    font-size: 0.875rem;
  }
  
  .form-label {
    margin-bottom: 20px;
    font-size: 1.5rem;
    text-align: center;
  }
  
  .underline {
    text-decoration: underline;
  }
  </style>
  