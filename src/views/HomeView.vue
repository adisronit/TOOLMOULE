<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <!--begin::Row-->
      <div class="row">
        <div class="col-sm-6"><h3 class="mb-0">You did it!</h3></div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">You did it!</li>
          </ol>
        </div>
      </div>
      <!--end::Row-->
    </div>
  </div>
  <div class="app-content">
    <button class="btn btn-primary" @click="modalRef.openModal()">Open Modal</button>

    <BaseModal ref="modalRef" title="Hello Modal" size="md">
      <template #default>
        <p>This is a reusable Bootstrap popup in Vue 3 🚀</p>
      </template>

      <template #footer>
        <button class="btn btn-secondary" @click="modalRef.closeModal()">Close</button>
        <button class="btn btn-primary" @click="onConfirm">Confirm</button>
      </template>
    </BaseModal>

    <div class="mt-4">
      <h4>Advanced (Multi Select with Search)</h4>
      <div class="mb-3 row">
        <div class="col-sm-6">
          <AdvancedDropdown
            v-model="selectedCountries"
            :options="countries"
            label="Select Country"
            value-field="code"
            text-field="description"
            multi
            :searchable="true"
          />
          <p class="mt-2">Selected: {{ selectedCountries }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import BaseModal from '@/components/BaseModal.vue'
import AdvancedDropdown from '@/components/BaseSelect.vue'

const modalRef = ref(null)

function onConfirm() {
  alert('Confirmed from HomeView ✅')
  modalRef.value.closeModal()
}

const selectedCountries = ref([])

const countries = [
  { code: 'us', description: 'United States' },
  { code: 'th', description: 'Thailand' },
  { code: 'jp', description: 'Japan', disabled: true }, // disabled example
  { code: 'fr', description: 'France' },
]
</script>
