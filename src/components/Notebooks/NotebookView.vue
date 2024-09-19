<template>
    <div class="notebook-view">
        <div class="d-flex justify-content-center mb-2" >
            <div class="form-floating width">
                <!-- Defter Adı Giriş Alanı -->
                <input 
                v-model="notebookTitle" 
                id="bookname" 
                
                class="form-control mb-2 " 
                @blur="toggleName" 
                :disabled="isDisabled" 
                required
                />
                <label for="bookname">Defter Adı</label>
                <div class=" btn btn-warning border rounded-2"
                v-if="isDisabled" 
                @click.prevent="toggleName">
                    
                    <i 
                    class='fas fa-pen' 
                    
                    style='font-size:auto; '></i>
                </div> 
            </div>
            <div class="button-group">
              <button @click="createNewNote" class="save-button" style="margin-left: auto;">Yeni not ekle</button>
            
              <button @click="saveToNotebook" class="save-button">Defteri Kaydet</button>
            </div>
          </div>
  
      <div v-for="(note, index) in notes" :key="index" class="note-block mb-2">
        <NoteEditor 
        :notes="notes"
        :index="index"
        @updateNotes="updateNoteContent"
        @addNote="addNote"
        @deleteNote="deleteNote"
        
        />
        
      </div>
  
      
    </div>
    
    
        

        
    
  </template>
  
  <script setup>
  import { ref, defineEmits, defineProps, onMounted, watch } from 'vue';
  import NoteEditor from './NoteEditor.vue';
  import { useToast } from 'vue-toast-notification';

  const emit = defineEmits(['saveNotebook']);
  const props = defineProps({
    activeNotebook: {
      type: Object,
      required: true
    }
  });

  const isDisabled = ref(false);
  const notebookTitle = ref('');
  const notes = ref([{ content: '' }]);

  const toggleName = () => {
    isDisabled.value = !isDisabled.value;
  };

  // props.activeNotebook'taki değişiklikleri izleyin ve güncelleyin
  watch(() => props.activeNotebook, (newVal) => {
    if (newVal) {
      notebookTitle.value = newVal.Name || '';
      notes.value = newVal.notes || [{ content: '' }];
    }
  }, { immediate: true });

  const updateNoteContent = ({ index, content }) => {
    notes.value[index].content = content;
  };

  const addNote = () => {
    notes.value.push({ content: '' });
  };

  const deleteNote = ({ index }) => {
    notes.value.splice(index, 1);
  };
  const createNewNote=()=>{
    notebookTitle.value='';
    notes.value=[];
    addNote();
    
  };

  const saveToNotebook = () => {
    if (notebookTitle.value !== undefined && Array.isArray(notes.value)) {
      const notebook = {
        Name: notebookTitle.value,
        notes: notes.value,
      };
      emit('saveNotebook', notebook);
      notebookTitle.value = '';
      notes.value = [];
      addNote();
      isDisabled.value = false;
      showToast();
    } else {
      console.error('notebookTitle veya notes doğru şekilde tanımlanmamış.');
    }
  };
  onMounted(()=>{
    if(notes.value.length===0){
      addNote();
    }
  });
  const $toast = useToast();

const showToast = () => {
  $toast.open({
    message: "Defter Başarıyla kaydedildi.",
    type: "success",
    position: 'top-right',
    duration: 2500,
    dismissible: true,
    pauseOnHover: true,
  });
};
  </script>
  <style scoped>



  .notebook-view {
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 90vh;
    padding: 10px;
    margin-top: 10px;
    
    width: 100%;
    
  }
#bookname {
    margin-right: auto;
}
  
  
.form-control:disabled{
    font-size: 1.75em; 
  font-weight: bold; 
}

  
  .note-block {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    
    
  }
  .button-group{
    
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    
    gap: 5px;
    
    
  }
  

  .save-button {
    
    
    padding: 10px 10px;
    background-color: #008CBA;
    color: white;
    border: thin;
    border-radius: 4px;
    cursor: pointer;
    max-height:100vh ;
  }
  
  .save-button:hover {
    background-color: #007bb5;
  }
  </style>
  