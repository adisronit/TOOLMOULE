<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <!--begin::Row-->
      <div class="row">
        <div class="col-sm-6"><h3 class="mb-0">Timeline</h3></div>
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
import { onMounted, ref } from 'vue'
import { Calendar } from '@fullcalendar/core'
import resourceTimelinePlugin from '@fullcalendar/resource-timeline'
import interactionPlugin from '@fullcalendar/interaction'

const calendarRef = ref(null)

onMounted(() => {
  const calendar = new Calendar(calendarRef.value, {
    plugins: [resourceTimelinePlugin, interactionPlugin],
    initialView: 'resourceTimelineDay',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'resourceTimelineDay,resourceTimelineWeek,resourceTimelineMonth,resourceTimelineYear',
    },
    resourceAreaHeaderContent: 'Resources',
    resources: [
      { id: 'a', title: 'Resource A' },
      { id: 'b', title: 'Resource B' },
      { id: 'c', title: 'Resource C' },
    ],
    events: [
      {
        id: '1',
        resourceId: 'a',
        start: '2025-10-03T09:00:00',
        end: '2025-10-03T12:00:00',
        title: 'Meeting A',
      },
      {
        id: '1a',
        resourceId: 'a',
        start: '2025-10-03T09:00:00',
        end: '2025-10-03T11:30:00',
        title: 'Actual Kickoff',
        color: '#28a745',
      },
      {
        id: '2',
        resourceId: 'b',
        start: '2025-10-03T13:00:00',
        end: '2025-10-03T16:00:00',
        title: 'Workshop B',
      },
      {
        id: '2a',
        resourceId: 'b',
        start: '2025-10-03T13:00:00',
        end: '2025-10-03T17:30:00',
        title: 'Actual Kickoff',
        color: '#28a745',
      },
      {
        id: '3',
        resourceId: 'c',
        start: '2025-10-04T10:00:00',
        end: '2025-10-04T12:00:00',
        title: 'Presentation C',
      },
    ],
    eventOrder: function (a, b) {
      if (a.title.includes('Planned')) return -1
      if (b.title.includes('Planned')) return 1
      return 0
    },
    views: {
      resourceTimelineDay: {
        slotDuration: { hours: 1 },
        slotLabelFormat: { hour: 'numeric', minute: '2-digit', hour12: false }, // ✅ แสดงเวลา
      },
      resourceTimelineWeek: {
        slotDuration: { days: 1 },
        slotLabelFormat: { weekday: 'short', day: 'numeric' }, // ✅ แสดงวัน
      },
      resourceTimelineMonth: {
        slotDuration: { days: 1 },
        slotLabelFormat: [
          { month: 'short', year: 'numeric' }, // บรรทัดบน → เดือน ปี
          { day: 'numeric', weekday: 'short' }, // บรรทัดล่าง → วัน
        ],
      },
      // ✅ Year View (53 weeks)
      resourceTimelineYear: {
        type: 'resourceTimeline',
        visibleRange: function (currentDate) {
          let year = currentDate.getFullYear()
          return {
            start: new Date(year, 0, 1), // 1 Jan
            end: new Date(year, 11, 31), // 31 Dec
          }
        },
        slotDuration: { weeks: 1 },
        slotLabelFormat: [
          { month: 'short' }, // เดือน
          { week: 'numeric' }, // สัปดาห์
        ],
      },
    },
    editable: true,
  })

  calendar.render()
})
</script>
