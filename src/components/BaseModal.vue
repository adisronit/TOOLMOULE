<template>
  <div class="modal fade base-modal" tabindex="-1" ref="modalEl">
    <div class="modal-dialog" :class="[sizeClass, 'modal-dialog-centered']">
      <div class="modal-content custom-modal">
        <!-- Header -->
        <div class="modal-header">
          <h5 class="modal-title">{{ title }}</h5>
          <button type="button" class="btn-close" @click="closeModal"></button>
        </div>

        <!-- Body -->
        <div class="modal-body">
          <slot>
            <p>Default body content...</p>
          </slot>
        </div>

        <!-- Footer -->
        <div class="modal-footer">
          <slot name="footer">
            <button class="btn btn-secondary" @click="closeModal">Close</button>
            <button class="btn btn-primary" @click="confirmAction">Confirm</button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, defineExpose, computed } from 'vue'
import * as bootstrap from 'bootstrap'

const props = defineProps({
  title: { type: String, default: 'Modal Title' },
  size: { type: String, default: 'lg' }, // sm, lg, xl
})

const modalEl = ref(null)
let bsModal = null

onMounted(() => {
  bsModal = new bootstrap.Modal(modalEl.value, {
    backdrop: 'static',
    keyboard: true,
  })
})

onBeforeUnmount(() => {
  bsModal?.dispose()
})

function openModal() {
  bsModal.show()
}
function closeModal() {
  bsModal.hide()
}
function confirmAction() {
  alert('Confirmed ✅')
  closeModal()
}
const sizeClass = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'modal-sm'
    case 'lg':
      return 'modal-lg'
    case 'xl':
      return 'modal-xl'
    default:
      return ''
  }
})

// ✅ ให้ parent component เรียกใช้ได้
defineExpose({ openModal, closeModal })
</script>
<style scoped>
/* ==== BaseModal Custom CSS ==== */

/* กล่อง Modal */
.custom-modal {
  border-radius: 16px;
  border: none;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.25);
  animation: fadeInScale 0.3s ease-out;
}

/* Header */
.modal-header {
  background: linear-gradient(90deg, #2563eb, #3b82f6);
  color: #fff;
  font-weight: bold;
  border-bottom: none;
  padding: 1rem 1.25rem;
}

/* Title */
.modal-title {
  font-size: 1.25rem;
  letter-spacing: 0.5px;
}

/* ปุ่มปิด */
.btn-close {
  filter: invert(1);
  opacity: 0.9;
}
.btn-close:hover {
  opacity: 1;
}

/* Body */
.modal-body {
  padding: 1.5rem;
  font-size: 1rem;
  color: #374151;
  line-height: 1.6;
}

/* Footer */
.modal-footer {
  background: #f9fafb;
  border-top: none;
  padding: 1rem 1.25rem;
}

/* ปุ่ม */
.btn {
  border-radius: 8px;
  font-weight: 500;
  padding: 0.5rem 1.25rem;
}
.btn-primary {
  background-color: #2563eb;
  border: none;
}
.btn-primary:hover {
  background-color: #1d4ed8;
}
.btn-secondary {
  background-color: #e5e7eb;
  border: none;
  color: #374151;
}
.btn-secondary:hover {
  background-color: #d1d5db;
}

/* Animation */
@keyframes fadeInScale {
  from {
    transform: scale(0.95);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
