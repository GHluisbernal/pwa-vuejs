<template>
  <div id="app-root">
    <app-nav></app-nav>

    <main>
      <transition name="easeInOut">
        <router-view></router-view>
      </transition>
    </main>

    <app-footer></app-footer>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.easeInOut-enter-active {
  transition: all .3s ease-in;
}

.easeInOut-leave-active {
  transition: all .3s ease-out;
}

.easeInOut-enter,
.easeInOut-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>
