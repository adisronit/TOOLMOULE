<template>
  <!-- Toolbar -->
  <div class="toolbar mb-3" v-if="showExport">
    <button class="btn btn-secondary me-2" @click="exportCSV">Export CSV</button>
    <button class="btn btn-secondary me-2" @click="exportExcel">Export Excel</button>
  </div>
  <!-- DataTable -->
  <table ref="tableRef" class="display stripe hover">
    <thead>
      <tr>
        <th v-if="showCheckbox">
          <input type="checkbox" @change="toggleAll" :checked="allSelected" />
        </th>
        <th>#</th>
        <th v-for="col in columns" :key="col.key">
          {{ col.label }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <td v-if="showCheckbox">
          <input type="checkbox" v-model="selectedRows" :value="row" />
        </td>
        <td>{{ rowIndex + 1 }}</td>
        <td v-for="col in columns" :key="col.key">
          {{ row[col.key] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, watch } from 'vue'
import DataTable from 'datatables.net-dt'
import DataTableCore from 'datatables.net'
import 'datatables.net-dt/css/dataTables.dataTables.min.css'

DataTable.use(DataTableCore)

const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  pageLength: { type: Number, default: 25 },
  showExport: { type: Boolean, default: false },
})

const tableRef = ref(null)
let dtInstance = null
const selectedRows = ref([])
const allSelected = ref(false)
const toggleAll = () => {
  if (allSelected.value) {
    selectedRows.value = []
  } else {
    selectedRows.value = [...props.data]
  }
  allSelected.value = !allSelected.value
}
watch(selectedRows, (newVal) => {
  allSelected.value = newVal.length === props.data.length
})
watch(
  () => props.data,
  () => {
    dtInstance?.clear().rows.add(props.data).draw()
  },
)
import { onMounted } from 'vue'
onMounted(() => {
  dtInstance = new DataTable(tableRef.value, {
    pageLength: props.pageLength || 25,
    lengthMenu: [
      [25, 50, 100],
      [25, 50, 100],
    ],
    //dom: "<top'f>rft<bottom'p><'clear'>",
  })
})

// ✅ Export CSV
function exportCSV() {
  const csvRows = []
  const headers = props.columns.map((col) => col.label)
  csvRows.push(headers.join(','))
  props.data.forEach((row) => {
    const values = props.columns.map((col) => `"${row[col.key]}"`)
    csvRows.push(values.join(','))
  })
  const blob = new Blob([csvRows.join('\n')], { type: 'text/csv' })
  const url = window.URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.setAttribute('hidden', '')
  a.setAttribute('href', url)
  a.setAttribute('download', 'data.csv')
  a.click()
  window.URL.revokeObjectURL(url)
}

// ✅ Export Excel
function exportExcel() {
  exportCSV()
}

// expose selected rows to parent
defineExpose({ selectedRows })
</script>
