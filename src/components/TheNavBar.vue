<template>
  <nav class="bottom-navbar">
    <RouterLink to="/" class="nav-item" active-class="active">
      <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
    </RouterLink>
    <RouterLink to="/chat/chatListView" class="nav-item" active-class="active">
      <font-awesome-icon :icon="['far', 'message']" />
    </RouterLink>
    <RouterLink to="/" class="nav-item" exact-active-class="active">
      <font-awesome-icon :icon="['fas', 'house']" />
    </RouterLink>

    <RouterLink to="/" class="nav-item" active-class="active">
      <font-awesome-icon :icon="['far', 'user']" />
    </RouterLink>

    <RouterLink to="/" class="nav-item" active-class="active">
      <font-awesome-icon :icon="['far', 'bell']" />
    </RouterLink>
  </nav>
</template>
