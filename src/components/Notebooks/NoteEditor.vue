  <template>
    <div class="note-editor">
      <!-- Eğer düzenleme modundaysak Quill editörünü göster, değilse statik içeriği göster -->
      <div v-show="isEditing">
        <div ref="editor" class="quill-editor"></div>
      </div>
      <div v-show="!isEditing" class="static-content" v-html="staticContent" @click.prevent="toggleEditor"></div>


      <!-- Kaydet/Değiştir düğmesi -->
      <div class="button-area gap-2">
        <div class="btn btn-success" @click.prevent="toggleEditor" >
          <i :class="isEditing? 'fas fa-floppy-disk':'fas fa-pen'"></i>
          
        </div>
        <button @click="addNote" class="btn btn-primary ml-2">
          <i class="fas fa-plus"></i>
        </button>
        <button @click="deleteNote" class="btn btn-warning ml-2">
          <i class="fas fa-minus"></i>
        </button>
      </div>
    </div>
  </template>

  <script setup>
  import { ref, onMounted, watch, defineEmits, defineProps } from 'vue';
  import Quill from 'quill';
  import 'quill/dist/quill.snow.css'; // Quill stilini ekleyin

  const props = defineProps({
    notes: Array,
    index: Number
  });

  const emit = defineEmits(['updateNotes', 'addNote','deleteNote']);

  const editor = ref(null);
  const quill = ref(null);
  const isEditing = ref(true); // Başlangıçta düzenleme modunda
  const staticContent = ref(''); // Düzenlenemeyen içerik

  // Quill editörünü başlat
  onMounted(() => {
    quill.value = new Quill(editor.value, {
      theme: 'snow',
      modules: {
        toolbar: [
          [{ 'header': '1' }, { 'header': '2' }],
          ['bold', 'italic', 'underline'],
          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
          ['link']
        ]
      }
    });

    // Eğer not içeriği varsa editöre aktar
    if (props.notes[props.index].content) {
      quill.value.root.innerHTML = props.notes[props.index].content;
    }

    // Editor'daki değişiklikleri parent'a gönder
    quill.value.on('text-change', () => {
      const content = quill.value.root.innerHTML;
      emit('updateNotes', { index: props.index, content });
    });
  });

  // Not içeriğini güncelle
  watch(() => props.notes[props.index].content, (newContent) => {
    if (quill.value && newContent !== quill.value.root.innerHTML) {
      quill.value.root.innerHTML = newContent;
      staticContent.value=newContent;
      if(!newContent){
        isEditing.value=true
      }
    }
  });

  const toggleEditor = () => {
    if (isEditing.value) {
      staticContent.value = quill.value.root.innerHTML; // Düzenleme modundan çıkarken Quill'deki içeriği al
    }
    isEditing.value = !isEditing.value;
  };

  const addNote = () => {
    emit('addNote');
  };
  const deleteNote=()=>{
    emit('deleteNote',{index:props.index});
  };
  </script>

  <style scoped>
  .note-editor {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    position: relative;
    
  }

  .quill-editor {
    min-height: 10vh;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: white;
    width: 58vw;
  }

  .static-content {
    padding: 10px;
    background-color: #f9f9f9;
    white-space: pre-wrap;
    width: 58vw;
  }
.button-area{
  padding: 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-left: auto;
}


  .add-note-button {
    padding: 5px 5px;
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  .add-note-button:hover {
    background-color: #45a049;
  }



  </style>
