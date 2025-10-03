<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <!--begin::Row-->
      <div class="row">
        <div class="col-sm-6"><h3 class="mb-0">Shift</h3></div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li class="breadcrumb-item"><a href="#">Setup</a></li>
            <li class="breadcrumb-item active" aria-current="page">Shift</li>
          </ol>
        </div>
      </div>
      <!--end::Row-->
    </div>
  </div>
  <div class="app-content">
    <div class="mb-3 d-flex justify-content-end">
      <button class="btn btn-primary" @click="modalRef.openModal()">Add New Shift</button>
    </div>
    <BaseTable :columns="columns" :data="data" :show-checkbox="false" :page-length="25" />
  </div>

  <BaseModal ref="modalRef" title="Add/Edit Shift" size="md">
    <template #default>
      <div class="mb-3">
        <label for="description" class="form-label">Description</label>
        <input
          type="text"
          class="form-control"
          id="description"
          placeholder="Enter shift description"
        />
      </div>
      <div class="mb-3">
        <label for="start" class="form-label">Start Time</label>
        <input type="time" class="form-control" id="start" />
      </div>
      <div class="mb-3">
        <label for="finish" class="form-label">Finish Time</label>
        <input type="time" class="form-control" id="finish" />
      </div>
    </template>

    <template #footer>
      <button class="btn btn-secondary" @click="modalRef.closeModal()">Close</button>
      <button class="btn btn-primary" @click="onConfirm">Confirm</button>
    </template>
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue'
import BaseTable from '@/components/BaseTable.vue'
import BaseModal from '@/components/BaseModal.vue'
const columns = [
  { key: 'No', label: 'No' },
  { key: 'Description', label: 'Description' },
  { key: 'Start', label: 'Start' },
  { key: 'Finish', label: 'Finish' },
]

const data = [
  { No: 1, Description: 'Normal Shift', Start: '08:00', Finish: '17:00' },
  { No: 2, Description: 'Overtime Shift', Start: '17:30', Finish: '20:00' },
]

const modalRef = ref(null)

function onConfirm() {
  alert('Confirmed from HomeView ✅')
  modalRef.value.closeModal()
}
</script>
