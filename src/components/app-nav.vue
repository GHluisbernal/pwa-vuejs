<template>
  <header id="app-nav">
    <nav class="navbar fixed-top navbar-toggleable-md navbar-dark bg-primary">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <strong>{{ brand }}</strong>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav1">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" v-for="(item, index, key) of navItems" v-bind:key="key" v-bind:to="item.path" class="nav-item">
              <a class="nav-link">{{ item.name }}</a>
            </router-link>
          </ul>
          <form class="form-inline waves-effect waves-light">
            <input class="form-control" type="text" placeholder="Search">
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'app-nav',
  data() {
    return {
      brand: 'PWA-VUE',
      navItems: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'SignUp',
          path: '/signup',
        },
        {
          name: 'About',
          path: '/about',
        },
      ],
    };
  },
  methods: {
  },
};
</script>

<style>
   #app-nav {
    height: 50px;
  }
</style>
