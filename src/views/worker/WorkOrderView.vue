<template>
  <div class="app-content-header">
    <div class="container-fluid">
      <!--begin::Row-->
      <div class="row">
        <div class="col-sm-6"><h3 class="mb-0">Work Order</h3></div>
        <div class="col-sm-6">
          <ol class="breadcrumb float-sm-end">
            <li class="breadcrumb-item"><a href="#">Work</a></li>
            <li class="breadcrumb-item active" aria-current="page">Work Order</li>
          </ol>
        </div>
      </div>
      <!--end::Row-->
    </div>
  </div>
  <div class="app-content">
    <h2>Scan QR Code to Fill Form</h2>

    <div id="qr-reader" style="width: 300px; height: 300px; margin-bottom: 10px"></div>
    <button @click="startScan">Start Scan</button>
    <button @click="stopScan">Stop Scan</button>

    <form>
      <div>
        <label>Code:</label>
        <input v-model="formData.code" />
      </div>
      <div>
        <label>Name:</label>
        <input v-model="formData.name" />
      </div>
      <div>
        <label>Email:</label>
        <input v-model="formData.email" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { Html5Qrcode } from 'html5-qrcode'

const qrRegionId = 'qr-reader'
const formData = ref({ code: '', name: '', email: '' })

let html5QrCode = null

const startScan = () => {
  html5QrCode = new Html5Qrcode(qrRegionId)

  html5QrCode.start(
    { facingMode: 'environment' }, // กล้องหลัง
    {
      fps: 10,
      qrbox: 250,
    },
    (decodedText) => {
      // เมื่อสแกนเจอ QR code
      console.log('QR Code:', decodedText)
      // สมมติ QR code เป็น JSON
      try {
        const data = JSON.parse(decodedText)
        formData.value = { ...formData.value, ...data }
      } catch {
        formData.value.code = decodedText
      }
      // หยุด scan หลังสแกนเสร็จ
      html5QrCode.stop()
    },
    (errorMessage) => {
      console.warn('Scan Error:', errorMessage)
    },
  )
}

const stopScan = () => {
  if (html5QrCode) html5QrCode.stop()
}
</script>
