<template>
  <div id="app-root">
    <app-nav></app-nav>

    <main class="my-1">
      <transition name="easeIn">
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
.easeIn-enter-active {
   transition: all .4s ease-in;
}

.easeIn-enter {
  transform: translateY(10px);
}
</style>
