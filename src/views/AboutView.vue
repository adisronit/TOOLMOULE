<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <!--begin::Row-->
      <div class="row">
        <div class="col-sm-6"><h3 class="mb-0">About us!</h3></div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li class="breadcrumb-item"><a href="#">Home</a></li>
            <li class="breadcrumb-item active" aria-current="page">About us!</li>
          </ol>
        </div>
      </div>
      <!--end::Row-->
    </div>
  </div>
  <div class="app-content">
    <BaseTable :columns="columns" :data="data" :show-checkbox="false" :page-length="25" />
  </div>
</template>

<script setup>
import BaseTable from '@/components/BaseTable.vue'

const columns = [
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'email', label: 'Email' },
]

const data = [
  { name: 'John Doe', age: 30, email: 'john@example.com' },
  { name: 'Jane Smith', age: 25, email: 'jane@example.com' },
]
</script>
