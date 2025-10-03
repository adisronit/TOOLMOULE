<template>
  <aside class="app-sidebar bg-body-secondary shadow" data-bs-theme="dark">
    <div calss="sidebar-brand">
      <a href="./index.html" class="brand-link">
        <!--begin::Brand Image-->
        <img
          src="@/assets/img/AdminLTELogo.png"
          alt="AdminLTE Logo"
          class="brand-image opacity-75 shadow"
        />
        <!--end::Brand Image-->
        <!--begin::Brand Text-->
        <span class="brand-text fw-light">AdminLTE 4</span>
        <!--end::Brand Text-->
      </a>
    </div>
    <div class="sidebar-wrapper">
      <nav class="mt-2">
        <!--begin::Sidebar Menu-->
        <ul
          class="nav sidebar-menu flex-column"
          data-lte-toggle="treeview"
          role="navigation"
          aria-label="Main navigation"
          data-accordion="false"
          id="navigation"
        >
          <!-- <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon bi bi-speedometer"></i>
              <p>
                Dashboard
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="./index.html" class="nav-link active">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Dashboard v1</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index2.html" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Dashboard v2</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="./index3.html" class="nav-link">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Dashboard v3</p>
                </a>
              </li>
            </ul>
          </li> -->
          <li class="nav-item">
            <a href="/home" class="nav-link" :class="{ active: $route.path === '/home' }">
              <i class="nav-icon bi bi-hand-thumbs-up-fill"></i>
              <p>Home</p>
            </a>
          </li>
          <li class="nav-item">
            <a
              href="/work-order"
              class="nav-link"
              :class="{ active: $route.path === '/work-order' }"
            >
              <i class="nav-icon bi bi-hand-thumbs-up-fill"></i>
              <p>Work Order</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="/about" class="nav-link" :class="{ active: $route.path === '/about' }">
              <i class="nav-icon bi bi-hand-thumbs-up-fill"></i>
              <p>About</p>
            </a>
          </li>
          <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon bi bi-speedometer"></i>
              <p>
                Setup
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a
                  href="/User"
                  class="nav-link active"
                  :class="{ active: $route.path === '/User' }"
                >
                  <i class="nav-icon bi bi-circle"></i>
                  <p>User</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="/Permission"
                  class="nav-link"
                  :class="{ active: $route.path === '/Permission' }"
                >
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Permission</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/shift" class="nav-link" :class="{ active: $route.path === '/shift' }">
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Shift</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="/supplier/add"
                  class="nav-link"
                  :class="{ active: $route.path === '/supplier/add' }"
                >
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Supplier</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="/customer/add"
                  class="nav-link"
                  :class="{ active: $route.path === '/customer/add' }"
                >
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Customer</p>
                </a>
              </li>
            </ul>
          </li>
          <li class="nav-item menu-open">
            <a href="#" class="nav-link active">
              <i class="nav-icon bi bi-speedometer"></i>
              <p>
                Plan
                <i class="nav-arrow bi bi-chevron-right"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a
                  href="/Calendar"
                  class="nav-link active"
                  :class="{ active: $route.path === '/Calendar' }"
                >
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Calendar</p>
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="/Timeline"
                  class="nav-link active"
                  :class="{ active: $route.path === '/Timeline' }"
                >
                  <i class="nav-icon bi bi-circle"></i>
                  <p>Timeline</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <!--end::Sidebar Menu-->
      </nav>
    </div>
  </aside>
</template>

<script setup></script>
