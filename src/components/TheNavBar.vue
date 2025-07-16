<template>
  <nav class="bottom-navbar">
    <div class="nav-item">
      <RouterLink to="">
        <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
      </RouterLink>
    </div>
    <div class="nav-item">
      <RouterLink to="">
        <font-awesome-icon :icon="['far', 'message']" />
      </RouterLink>
    </div>
    <div class="nav-item">
      <RouterLink to="/">
        <font-awesome-icon :icon="['fas', 'house']" />
      </RouterLink>
    </div>

    <div class="nav-item">
      <RouterLink to="">
        <font-awesome-icon :icon="['far', 'user']" />
      </RouterLink>
    </div>
    <div class="nav-item">
      <RouterLink to="">
        <font-awesome-icon :icon="['far', 'bell']" />
      </RouterLink>
    </div>
  </nav>
</template>
