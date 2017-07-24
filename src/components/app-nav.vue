<template>
  <header id="app-nav">
    <nav class="navbar navbar-toggleable-sm scrolling-navbar navbar-dark default-color sticky-top">
      <div class="container">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav1" aria-controls="navbarNav1" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">
          <strong>{{ brand }}</strong>
        </a>
        <div class="collapse navbar-collapse" id="navbarNav1">
          <ul class="navbar-nav mr-auto">
            <router-link tag="li" to="/" class="nav-item">
              <a class="nav-link waves-effect waves-light">Home</a>
            </router-link>
            <router-link tag="li" to="/Error" class="nav-item">
              <a class="nav-link waves-effect waves-light">About</a>
            </router-link>

            <form class="form-inline waves-effect waves-light">
              <input class="form-control" type="search" name="search" placeholder="Search">
            </form>
          </ul>

          <ul class="navbar-nav">
            <template v-if="true">
              <router-link tag="li" to="/SignUp" class="nav-item">
                <a class="nav-link waves-effect waves-light">
                  <li class="fa fa-user-plus"></li>
                  <span>Sign Up</span>
                  </a>
              </router-link>
              <router-link tag="li" to="/LogIn" class="nav-item">
                <a class="nav-link waves-effect waves-light">
                  <i class="fa fa-sign-in"></i>
                  <span>Log In</span>
                </a>
              </router-link>
            </template>
            <li v-else class="nav-item dropdown">
              <a class="nav-link dropdown-toggle waves-effect waves-light" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                <i class="fa fa-user"></i>
              </a>
              <div class="dropdown-menu dropdown-menu-right dropdown-default" aria-labelledby="navbarDropdownMenuLink" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
                <a class="dropdown-item waves-effect waves-light" href="#">My Account</a>
                <a class="dropdown-item waves-effect waves-light" href="#">
                  <li class="fa fa-sign-out"></li>
                  <span>Log Out</span>
                </a>
              </div>
            </li>
          </ul>
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
    };
  },
  methods: {
  },
};
</script>

<style>

</style>
