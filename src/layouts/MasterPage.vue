<template>
  <div class="app-wrapper">
    <!-- Navbar -->
    <Navbar />
    <!-- Sidebar -->
    <Sidebar />

    <main class="app-main"><router-view /></main>
    <!-- Content Wrapper -->

    <Footer />
  </div>
</template>

<script setup>
import Navbar from '@/components/NavbarTemplate.vue'
import Sidebar from '@/components/SidebarTemplate.vue'
import Footer from '@/components/FooterTemplate.vue'
</script>

<style scoped>
.content-wrapper {
  margin-left: 220px; /* ความกว้าง Sidebar */
  transition: margin-left 0.3s;
}
</style>
