<template>
  <div class="bg-black text-white text-center">
    <p class="p-1 m-0">
      Sign up & get 20% off to your first order.
      <a href="signUp" class="text-white text-capitalize fw-bold">sign up now</a>
    </p>
  </div>
  <navbarC />
  <router-view />
  <FooterC />
</template>

<script>
import { onMounted } from "vue";
import { useProductStore } from "./store/productStore";
import FooterC from "./components/footerC.vue";
import navbarC from "./components/navbarC.vue";

export default {
  components: {
    navbarC,
    FooterC,
  },

  setup() {
    const storeProduct = useProductStore();

    onMounted(() => {
      storeProduct.fetch_products_limit();
    });

  },

};



</script>

<style lang="scss">
* {
  box-sizing: border-box;
}
</style>
