<template>
  <div id="signUp" class="container">
    <div class="card">
      <div class="card-block">
        <form type="post" action="https://httpbin.org/get">
          <div class="form-header blue darken-2">
            <h3>
              <i class="fa fa-user-plus"></i>
              <span>Register:</span>
            </h3>
          </div>

          <div class="row">
            <div class="col-md-4">
              <div class="md-form">
                <i class="fa fa-user prefix"></i>
                <input type="text" id="frmFname" name="fname" autocomplete="given-name" v-validate="'required|alpha'" class="form-control" required>
                <label for="frmFname">First name</label>
              </div>
            </div>
            <div class="col-md-3">
              <div class="md-form">
                <i class="fa fa-user prefix"></i>
                <input type="text" id="frmMname" name="mname" autocomplete="additional-name" v-validate="'alpha'" class="form-control">
                <label for="frmMname">Middle name</label>
              </div>
            </div>
            <div class="col-md-5">
              <div class="md-form">
                <i class="fa fa-user prefix"></i>
                <input type="text" id="frmLname" name="lname" autocomplete="family-name" v-validate="'alpha'" class="form-control">
                <label for="frmLname">Last name</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="md-form">
                <i class="fa fa-envelope prefix"></i>
                <input type="email" id="frmEmail" name="email" autocomplete="email" v-validate="'required|email'" class="form-control" required>
                <label for="frmEmail">Email</label>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <div class="md-form">
                <i class="fa fa-lock prefix"></i>
                <input type="password" id="frmPassword" name="password" autocomplete="new-password" v-validate="'required|min:8'" class="form-control" required>
                <label for="frmPassword">Password</label>
              </div>
            </div>
            <div class="col-md-6">
              <div class="md-form">
                <i class="fa fa-lock prefix"></i>
                <input type="password" id="frmPassword2" name="password2" autocomplete="new-password" v-validate="'required|confirmed:password'" class="form-control" required>
                <label for="frmPassword2">Confirm password</label>
              </div>
            </div>
          </div>

          <fieldset class="form-group">
            <input type="checkbox" id="frmChkNews">
            <label for="frmChkNews">Recieve news about us</label>
          </fieldset>

          <div class="text-center">
            <button type="submit" class="btn btn-primary" v-bind:disabled="!formIsValid">Sign up</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Welcome to Your Vue.js PWA',
    };
  },
  computed: {
    formIsValid() {
      return Object.keys(this.fields).every(key => this.fields[key].valid);
    },
  },
};
</script>

<style scoped>
#signUp {
  margin-top: 3.0rem;
}
</style>
