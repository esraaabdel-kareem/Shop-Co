<template>
  <nav class="navbar navbar-expand-lg bg-white sticky-top shadow-sm">
    <div class="container">
      <!-- Mobile Menu Button -->
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main"
        aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Logo -->
      <RouterLink class="navbar-brand fs-1 fw-bold text-uppercase" to="/">Shop.co</RouterLink>

      <!-- Navigation Links -->
      <div class="collapse navbar-collapse" id="main">
        <ul class="navbar-nav mb-lg-0 text-capitalize fw-bold mx-auto">
          <li class="nav-item dropdown mx-lg-2">
            <a class="nav-link dropdown-toggle fs-5 fw-bold" href="#" id="navbarDropdown" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Shop
            </a>
            <nav class="dropdown-menu border-1 shadow-sm" aria-labelledby="navbarDropdown">
              <a class="dropdown-item border-bottom fs-5" href="#">Men</a>
              <a class="dropdown-item border-bottom fs-5" href="#">Women</a>
              <a class="dropdown-item border-bottom fs-5" href="#">Bags</a>
              <a class="dropdown-item fs-5" href="#">Shoes</a>
            </nav>
          </li>

          <li class="nav-item mx-2 mt-1">
            <a class="nav-link fs-5 fw-bold" href="#selling">On Sale</a>
          </li>
          <li class="nav-item mx-2 mt-1">
            <a class="nav-link fs-5 fw-bold" href="#arrivals">New Arrivals</a>
          </li>
          <li class="nav-item mx-2 mt-1">
            <a class="nav-link fs-5 fw-bold" href="#">Brands</a>
          </li>
        </ul>

        <!-- Desktop Search Bar -->
        <form
          class="d-lg-flex p-lg-1 form-control rounded-pill w-50 bg-light me-md-1 d-none d-lg-flex align-items-center">
          <i class="fa fa-search p-2 text-muted"></i>
          <input class="form-control border-0 bg-light" type="search" id="search" placeholder="Search"
            aria-label="Search" />
        </form>
      </div>

      <!-- Icons -->
      <ul class="icons d-flex ms-auto align-items-center justify-content-end">
        <!-- Mobile Search -->
        <li class="nav-item d-lg-none">
          <a href="#" class="nav-link" @click="toggleSearch">
            <i class="fa fa-search"></i>
          </a>
          <div class="search-box container" v-if="showSearch">
            <input type="text" class="form-control rounded-pill" placeholder="Search..." />
          </div>
        </li>

        <!-- Cart -->
        <li class="nav-item p-2 position-relative">
          <RouterLink class="btn btn-white border-0" to="/cart">
            <i class="fas fa-shopping-cart fs-5"></i>
            <span v-if="cartStore.cartCount > 0" class="cart-count">{{ cartStore.cartCount }}</span>
          </RouterLink>
        </li>

        <!-- User -->
        <li class="nav-item p-2">
          <RouterLink to="/signup" class="nav-link me-sm-3">
            <i class="far fa-user-circle fs-5"></i>
          </RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "../store/cartStore";
import { RouterLink } from "vue-router";

const showSearch = ref(false);
const cartStore = useCartStore();

const toggleSearch = () => {
  showSearch.value = !showSearch.value;
};
</script>

<style lang="scss" scoped>
.navbar {
  .navbar-brand {
    font-family: "Integralcf-Bold", sans-serif;
    cursor: pointer;
  }

  .nav-link {
    font-family: "Satoshi-400", sans-serif;
    color: #222;
    transition: color 0.3s ease, text-decoration 0.3s ease;

    &:hover {
      color: #000;
      text-decoration: underline;
    }
  }
}

.navbar-toggler {
  border: none !important;

  &:focus {
    box-shadow: none !important;
  }
}

.icons {
  list-style: none;
  align-items: center;
  justify-content: flex-end;

  li a {
    text-decoration: none;
    font-size: 1rem;
    color: #333;
    cursor: pointer;
    position: relative;

    &:hover {
      color: #000;
    }
  }
}

.cart-count {
  position: absolute;
  top: -4px;
  right: 0px;
  background-color: rgb(255, 121, 121);
  color: #fff;
  font-size: 0.75rem;
  font-weight: bold;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-box {
  position: fixed;
  top: 60px;
  left: 5%;
  width: 90%;
  padding: 15px;
  background-color: #fff;
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  z-index: 1000;
}
</style>
