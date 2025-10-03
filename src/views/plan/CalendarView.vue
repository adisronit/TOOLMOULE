<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <!--begin::Row-->
      <div class="row">
        <div class="col-sm-6"><h3 class="mb-0">Calendar</h3></div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li class="breadcrumb-item"><a href="#">Setup</a></li>
            <li class="breadcrumb-item active" aria-current="page">Plan</li>
          </ol>
        </div>
      </div>
      <!--end::Row-->
    </div>
  </div>
  <div class="app-content">
    <div ref="calendarRef"></div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const calendarRef = ref(null)

onMounted(() => {
  const calendar = new Calendar(calendarRef.value, {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    events: [
      { title: 'Meeting', start: '2025-10-05' },
      { title: 'Holiday', start: '2025-10-10', end: '2025-10-12' },
    ],
  })
  calendar.render()
})
</script>
