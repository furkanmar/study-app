<template>
  <div class="notebook-display">
    <h3 class="text-decoration-underline mb-4">Defter Listesi</h3>
    <ul class="list-group">
      <li
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center mb-2"
        v-for="(notebook, index) in notebooks" 
        :key="index"
        @click.prevent="openNotebook(index)"
      >
        <div>
          <span class="notebook-name">{{ notebook.Name || 'Untitled Notebook' }}</span>
        </div>
        <span class="badge bg-primary rounded-pill">{{ notebook.notes.length }} Not</span>
        <button 
          class="btn btn-danger btn-sm delete-button" 
          @click.stop="deleteNotebook(index)"
        >
          <i class="fas fa-trash"></i>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useToast } from 'vue-toast-notification';
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['openNotebook']);
const $toast = useToast();

// Parent component'ten gelecek defter listesini props ile alıyoruz
const props = defineProps({
  notebooks: {
    type: Array,
    required: true
  }
});

const openNotebook = (index) => {
  if (index >= 0 && index < props.notebooks.length) {
    const selectedNotebook = {
      Name: props.notebooks[index].Name,
      notes: props.notebooks[index].notes,
    };
    emit('openNotebook', selectedNotebook);
  } else {
    console.error('Geçersiz index:', index);
  }
};
</script>

<style scoped>
.notebook-display {
  display: flex;
  flex-direction: column;
  align-items: center;
  
  padding: 20px;
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 90vh;
}

h3 {
  color: #343a40;
  text-align: center;
}

ul {
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
}

.list-group-item {
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.delete-button {
  position: absolute;
  
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  display: none;
}
.list-group-item:hover .delete-button {
  display: block;
}

.list-group-item:hover {
  background-color: #e9ecef;
}

.notebook-name {
  font-weight: bold;
  color: #495057;
}

.badge {
  font-size: 1rem;
}
</style>
