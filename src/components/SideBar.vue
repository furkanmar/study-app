<template>
    
    <div class="row  d-flex ">
        
    <button type="button" class="btn btn-primary " id="liveToastBtn" @click="showToast">
        
        <span class="d-inline-flex ">
            <button type="button" class="btn btn-secondary ms-2" @click="showToast">Show</button>
        </span>
        <h3 class="d-inline-flex">düğme</h3>
        
        
    </button>
    
    
    </div>  
    

  
</template>

<script>
import { useToast } from 'vue-toast-notification';


export default {
  setup() {
    const $toast = useToast();

    const showToast = () => {
      $toast.open({
        message: "Toast",
        type:"success",
        position: 'top-right',
        duration: 2500, 
        dismissible: true,
        pauseOnHover: true,  
      });
    };

    return {
      showToast,
      
    };
  }
}
</script>




