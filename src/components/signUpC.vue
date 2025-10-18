<template>
  <div class="signUp">
    <div class="container" id="signUp">
    <div class="form_area">
      <p class="title">SIGN UP</p>
      <form @click.prevent>
        <div class="form_group">
          <label class="sub_title" for="name">Name</label>
          <input
            placeholder="Enter your full name"
            id="name"
            class="form_style"
            type="text"
            v-model="name"
            required
          />
        </div>
        <div class="form_group">
          <label class="sub_title" for="email">Email</label>
          <input
            placeholder="Enter your email"
            id="email"
            class="form_style"
            type="email"
            v-model="email"
            required
          />
        </div>
        <div class="form_group">
          <label class="sub_title" for="password">Password</label>
          <input
            placeholder="Enter your password"
            id="password"
            class="form_style"
            type="password"
            required
            v-model="password"
          />
        </div>
        <div class="form_group">
          <div>
            <input type="checkbox" id="checkbox" />
            <label for="checkbox" class="px-2">Remember me </label>
          </div>
        </div>
        <div>
          <button class="btn btn-dark" @click="signUp()">SIGN UP</button>
          <div class="content__or-text">
            <span></span>
            <span>Or</span>
            <span></span>
          </div>
          <div class="buttons-container">
            <div class="apple-login-button">
              <a href="#">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  class="apple-icon"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M747.4 535.7c-.4-68.2 30.5-119.6 92.9-157.5-34.9-50-87.7-77.5-157.3-82.8-65.9-5.2-138 38.4-164.4 38.4-27.9 0-91.7-36.6-141.9-36.6C273.1 298.8 163 379.8 163 544.6c0 48.7 8.9 99 26.7 150.8 23.8 68.2 109.6 235.3 199.1 232.6 46.8-1.1 79.9-33.2 140.8-33.2 59.1 0 89.7 33.2 141.9 33.2 90.3-1.3 167.9-153.2 190.5-221.6-121.1-57.1-114.6-167.2-114.6-170.7zm-105.1-305c50.7-60.2 46.1-115 44.6-134.7-44.8 2.6-96.6 30.5-126.1 64.8-32.5 36.8-51.6 82.3-47.5 133.6 48.4 3.7 92.6-21.2 129-63.7z"
                  ></path>
                </svg>
              </a>
              <span class="fw-bold">Log in with Apple</span>
            </div>
            <div class="google-login-button">
              <a href="#">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  version="1.1"
                  x="0px"
                  y="0px"
                  class="google-icon"
                  viewBox="0 0 48 48"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
                        c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
                        c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
                        C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
                        c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
                        c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
              </a>
              <span class="fw-bold">Log in with Google</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: "signUpC",

  data() {
    return {
      email: "",
      password: "",
      password_confirmation: "",
    };
  },
};
</script>

<style scoped>

.is-invalid {
  border-color: rgb(99, 11, 11);
}
.signUp {
  width: 100%;
  height: 100vh;
  position: relative;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}

.form_area {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #e9e9e9;
  height: 100%;
  width: 350px;
  border: 2px solid #264143;
  border-radius: 20px;
  box-shadow: 3px 4px 0px 1px #264143;
  padding: 20px;
}

.title {
  color: #264143;
  font-weight: 900;
  font-size: 1.5em;
  margin-top: 20px;
}

.sub_title {
  font-weight: 600;
  margin: 5px 0;
}

.form_group {
  display: flex;
  flex-direction: column;
  align-items: baseline;
  margin: 10px;
}

.form_style {
  outline: none;
  border: 2px solid #264143;
  box-shadow: 3px 4px 0px 1px #264143;
  width: 290px;
  padding: 12px 10px;
  border-radius: 4px;
  font-size: 15px;
}

.flex-row > div > label {
  font-size: 14px;
  color: black;
  font-weight: 400;
}

.form_style:focus,
.btn:focus {
  transform: translateY(4px);
  box-shadow: 1px 2px 0px 0px #264143;
}

.btn {
  padding: 15px;
  margin: 25px 0px;
  width: 290px;
  font-size: 15px;
  background-color: #264143;
  border-radius: 10px;
  font-weight: 800;
  box-shadow: 3px 3px 0px 0px #264143;
}

.btn:hover {
  opacity: 0.9;
}

.content__or-text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 16px;
  column-gap: 12px;
  margin: 19px 0;
}

.content__or-text span:nth-child(3),
.content__or-text span:nth-child(1) {
  display: block;
  width: 50%;
  height: 1px;
  background-color: rgb(31, 30, 30);
  margin: 0 5px;
}

.link {
  font-weight: 800;
  color: #264143;
  padding: 5px;
  text-decoration: none;
  margin: 5px;
}

.buttons-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  gap: 15px;
}

.apple-login-button,
.google-login-button {
  border-radius: 20px;
  box-sizing: border-box;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px,
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
  font-size: 11px;
  gap: 5px;
}

.apple-login-button {
  background-color: #000;
  color: #fff;
  border: 2px solid #000;
}

.google-login-button {
  border: 2px solid #747474;
}

.apple-icon,
.google-icon {
  font-size: 18px;
  margin-bottom: 1px;
}
</style>
