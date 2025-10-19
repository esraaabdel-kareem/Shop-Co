<template>
  <div class="overflow-x-hidden">
    <div class="container py-5 h-100 ">
      <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
        <ol class="breadcrumb fs-5 fw-bold">
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-decoration-none text-black-50">Home</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-decoration-none text-black-50">Shop</RouterLink>
          </li>
          <li class="breadcrumb-item">
            <RouterLink to="/" class="text-decoration-none text-black-50">Man</RouterLink>
          </li>
          <li class="breadcrumb-item " aria-current="page" v-if="product && product.id">
            <RouterLink to="/" class="text-decoration-none text-black ">
              {{ product.name }} </RouterLink>
          </li>
        </ol>
      </nav>
      <!-- productDetails -->
      <div class="d-flex justify-content-center" v-if="!product">
        <h2>Loading product details...</h2>
      </div>
      <div class="row py-5 g-5 " v-else-if="product && product.id">
        <div class="col-lg-6 col-sm-12">
          <div class="card border-0 gap-2" style="width:500px; height: 500px;">
            <img :src="selectedImage || product.image" class=" rounded-5 mb-2 "
              style="width: 400px; height: 400px; object-fit: cover" :alt="product.title" />
            <div class="d-flex gap-4 py-4">
              <img v-for="(img, index) in [product.image, product.image1, product.image2]" :key="index" :src="img"
                class="rounded-4 " style="width: 100px; height: 100px; object-fit: cover" @click="changeImage(img)" />
            </div>
          </div>
        </div>
        <div class="col-lg-6 col-sm-12 px-5 px-sm-3 mt-sm-5">
          <div class="card-body d-flex flex-column mt-lg-1">
            <div class="text border-bottom border-1 border-light-subtle">
              <h1 class="main-title fw-bold fs-1">
                {{ product.title }}
              </h1>
              <ratingStarsC :rating="product.rating" class="mb-2" />
              <p class="card-text fw-bold fs-5">
                <span v-if="product.discount && product.discount > 0" class="ps-2 fs-4 fw-bold">
                  ${{ discountedPrice(product.price, product.discount) }}
                  <small class="text-muted text-decoration-line-through fs-5">
                    ${{ product["priceOld"] }}
                  </small>
                  <span class="text-danger ms-1 mark-discount bg-danger-subtle rounded-pill p-1 fs-6">
                    -{{ product.discount }}%
                  </span>
                </span>
                <span v-else class="fs-4 fw-bold">
                  ${{ product.price }}
                </span>
              </p>
              <p class="card-text mb-3 text-black-50 text-capitalize">{{ product.details }}</p>
            </div>
            <div class="form_area">
              <p class="fw-bold fs-5">Color :</p>
              <div>
                <button v-for="color in colors" :key="color" :style="{ backgroundColor: color }" :class="[
                  'btn border-1 border-light-subtle mx-1 rounded-circle p-3 mb-2', selectedColor === color ? 'border border-dark shadow' : ''
                ]" @click="changeColor(color)">
                </button>
              </div>
              <p class="fw-bold fs-5">Size :</p>
              <div>
                <button v-for="size in sizes" :key="size"
                  :class="['size-btn btn btn-light border-1 border-light-subtle mx-1 rounded-5', { 'active': size === selectedSize }]"
                  @click="changeSize(size)">
                  {{ size }}
                </button>
              </div>
            </div>
            <div class="from_area  row">
              <div class="btn-group py-5 col-lg-6 col-sm-12 h-100" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-light rounded-start-5 " @click="decrementQuantity()"><i
                    class="fas fa-minus"></i></button>
                <button class=" btn bg-light border-0 " value="1">{{ quantity }}</button>
                <button type="button" class="btn btn-light rounded-end-5" @click="incrementQuantity()"><i
                    class="fas fa-plus"></i></button>
              </div>
              <div class="btn-group col-lg-6 col-sm-12 py-lg-5 h-100" role="group" aria-label="Basic example">
                <button type="button" class="btn btn-dark rounded-start-5"><i class="fas fa-heart"></i></button>
                <button type="button" class="btn btn-dark " @click="addProductToCart">Add To Cart</button>
                <button type="button" class="btn btn-dark rounded-end-5"><i class="fas fa-share-alt"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- navProduct -->
    <div class="container py-2 my-2">
      <ul class="nav border-bottom justify-content-around" id="myTab" role="tablist">
        <li class="nav-item">
          <button class="nav-link fs-3 text-black-50 active" id="productDetails-tab" data-bs-toggle="tab"
            data-bs-target="#productDetails" type="button" role="tab" aria-controls="productDetails"
            aria-selected="true">product Details</button>
        </li>
        <li class="nav-item">
          <button class="nav-link fs-3 text-black-50 " id="reviews-tab" data-bs-toggle="tab" data-bs-target="#reviews"
            type="button" role="tab" aria-controls="reviews" aria-selected="false">Reviews & Rating</button>
        </li>
        <li class="nav-item">
          <button class="nav-link fs-3 text-black-50 " id="faqs-tab" data-bs-toggle="tab" data-bs-target="#faqs"
            type="button" role="tab" aria-controls="faqs" aria-selected="false"> FAQs </button>
        </li>
      </ul>
    </div>
    <div class="tab-content " id="myTabContent">
      <div class="tab-pane fade show active" id="productDetails" role="tabpanel" aria-labelledby="productDetails-tab">
        <div class="container py-5">
          <p class="text-black fs-4">
            Introducing our Loose Fit Bermuda Shorts, the ultimate choice for warm-weather
            comfort and style. With a relaxed silhouette that hits just above the knee, these shorts are designed to
            keep you cool and
            free-moving during those sunny days.
          </p>
          <p class="text-black fs-4">
            <span class="fw-bold"> Casual Comfort : </span> Crafted from lightweight, breathable fabric, these Bermuda
            shorts provide a soft feel
            against the skin, making them perfect for everything from beach trips to backyard barbecues. The loose
            fit ensures maximum comfort without compromising your style.
          </p>
          <p class="text-black fs-4">
            <span class="fw-bold">Versatile Style:</span> Featuring a classic design with functional pockets, these
            shorts can easily be dressed
            up with a polo shirt or kept casual with a simple tee. They pair effortlessly with sandals, sneakers, or
            your favorite slip-ons, making them a versatile addition to your summer wardrobe.
          </p>
          <p class="text-black fs-4">
            <span class="fw-bold">Care Instructions:</span> Easy to care for, these shorts are machine washable and
            designed to hold their shape
            and color wash after wash.
          </p>
          <p class="text-black fs-4">
            <span class="fw-bold">Available Sizes : </span> S . M . L . XL . XXL
          </p>
          <p class="text-black fs-4">
            Elevate your summer style with our Loose Fit Bermuda Shorts—your go-to option for comfort and ease in
            the sun!
          </p>
        </div>
      </div>
      <div class="tab-pane fade" id="reviews" role="tabpanel" aria-labelledby="reviews-tab">
        <div class="container py-5">
          <div class="row">
            <div class="col-6">
              <h1 class="text-black fs-4"> All Reviews (0) </h1>
            </div>
            <div class="col-6">
              <div class="row d-flex justify-content-end">
                <div class="col-auto">
                  <button type="button" class="btn btn-light rounded-5 fs-6"><i
                      class="fa-solid fa-sliders fa-rotate-270"></i></button>
                </div>
                <div class="col-auto">
                  <button type="button" class="btn btn-light rounded-5 fs-5">Latest</button>
                </div>
                <div class="col-auto">
                  <button type="button" class="btn btn-dark rounded-5 fs-5">write a review</button>
                </div>
              </div>
            </div>
          </div>

          <div class="container py-5">
            <div class="row g-2 py-2 align-items-center justify-content-center">
              <div class="col-5  border-1 border-light-subtle border  rounded-5  p-3">
                <div class="icons py-2">
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star-half"></i>
                </div>
                <div class="text">
                  <h3 class="text-black">
                    Samantha D.
                    <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
                  </h3>
                  <p class="text-black-50">
                    "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a
                    fellow
                    designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                  </p>
                  <span class="text-black-50 fw-bold">Posted on August 14, 2023</span>
                </div>
              </div>
              <div class="col-5 border-1 border-light-subtle border mx-2 rounded-5  p-3">
                <div class="icons ">
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                </div>
                <div class="text">
                  <h3 class="text-black">
                    Alex m.
                    <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
                  </h3>
                  <p class="text-black-50">
                    "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is
                    top-notch. Being
                    a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a
                    thumbs up
                    from me."
                  </p>
                  <span class="text-black-50 fw-bold">Posted on August 15, 2023</span>
                </div>
              </div>
              <div class="col-5 border-1 border-light-subtle border mx-2 rounded-5 p-3">
                <div class="icons py-2">
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star-half"></i>
                </div>
                <div class="text">
                  <h3 class="text-black">
                    Ethan R.
                    <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
                  </h3>
                  <p class="text-black-50">
                    "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet
                    stylish
                    pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of
                    this
                    shirt."
                  </p>
                  <span class="text-black-50 fw-bold">Posted on August 16, 2023</span>
                </div>
              </div>
              <div class="col-5 border-1 border-light-subtle border mx-2 rounded-5 p-3">
                <div class="icons py-2">
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                </div>
                <div class="text">
                  <h3 class="text-black">
                    Olivia P.
                    <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
                  </h3>
                  <p class="text-black-50">
                    "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents
                    those
                    principles but also feels great to wear. It's evident that the designer poured their creativity
                    into
                    making this t-shirt stand out."
                  </p>
                  <span class="text-black-50 fw-bold">Posted on August 17, 2023</span>
                </div>
              </div>
              <div class="col-5 border-1 border-light-subtle border mx-2 rounded-5 ">
                <div class="icons py-2">
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                </div>
                <div class="text">
                  <h3 class="text-black">
                    Liam k.
                    <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
                  </h3>
                  <p class="text-black-50">
                    "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks
                    volumes
                    about the designer's skill. It's like wearing a piece of art that reflects my passion for both
                    design
                    and fashion."
                  </p>
                  <span class="text-black-50 fw-bold">Posted on August 18, 2023</span>
                </div>
              </div>
              <div class="col-5  border-1 border-light-subtle border mx-2 rounded-5 p-3">
                <div class="icons py-2">
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                  <i class="text-warning fas fa-star"></i>
                </div>
                <div class="text">
                  <h3 class="text-black">
                    Ava H.
                    <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
                  </h3>
                  <p class="text-black-50">
                    "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details
                    and
                    thoughtful layout of the design make this shirt a conversation starter."
                  </p>
                  <span class="text-black-50 fw-bold">Posted on August 19, 2023</span>
                </div>

              </div>
              <div class="d-flex justify-content-center my-5">
                <button class="btn btn-white border-1 border-light-subtle py-3 px-5  rounded-5 fw-bold fs-5 ">
                  Load More Reviews
                </button>
              </div>
            </div>
          </div>
        </div>




      </div>
      <div class="tab-pane fade" id="faqs" role="tabpanel" aria-labelledby="faqs-tab">
        <div class="alert alert-primary w-50 justify-content-center mx-auto text-center" role="alert"> ..wite.. </div>
      </div>
    </div>
    <!-- product like -->
    <div class="selling border-top border-1 py-5" id="selling">
      <div class="container h-50">
        <section class="top-selling mb-5 py-5">
          <h2 class="main-title my-5 text-center text-uppercase">you might also like</h2>
          <div class="d-flex  justify-content-center g-5 align-content-center row-slider" v-if="productLike">
            <div class="col-4 mb-2" v-for="product in productLike" :key="product.id">
              <div class="card  border-0" style="width: 20rem; height: 33rem;">
                <RouterLink :to="{ name: 'product', params: { id: product.id } }">
                  <img :src="product.image" class="card-img-top rounded-5 mb-2"
                    style="width: 320px; height: 320px; object-fit: cover" :alt="product.title" />
                </RouterLink>
                <div class="card-body">
                  <h4 class="card-title  fw-bold">
                    {{ product.title }}
                  </h4>
                  <ratingStarsC :rating="Number(product.rating)" class="mb-2" />
                  <p class="card-text fw-bold fs-5">
                    <span v-if="product.discount && product.discount > 0" class="ps-2 fs-5">
                      {{ currency(discountedPrice(product.price, product.discount)) }}
                      <small class="text-muted text-decoration-line-through fs-5">
                        {{ currency(product["priceOld"]) }}
                      </small>
                      <span class="text-danger ms-1 mark-discount bg-danger-subtle rounded-pill p-1 fs-6">-{{
                        product.discount }}%</span>
                    </span>
                    <span v-else class="fs-5 fw-bold">
                      {{ currency(product.price) }}
                    </span>
                    <button class="Btn " @click="cartStore.addToCart({
                      id: product.id,
                      title: product.title,
                      image: product.image,
                      price: product.price,
                      priceOld: product.priceOld,
                      discount: product.discount,
                    });">
                      <div class="sign">
                        <i class="fas fa-cart-plus"></i>
                      </div>
                      <div class="text">
                        Add To Cart
                      </div>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import ratingStarsC from "@/components/ratingStarsC.vue";
import { onMounted, ref, computed } from "vue";
import { useCartStore } from "@/store/cartStore";
import { useProductStore } from "@/store/productStore";
import { currencyUSD } from "@/shared/currency";
import { useRoute } from "vue-router";
import { Tab } from "bootstrap";
import Swal from "sweetalert2";

export default {
  name: "ProductHomeC",
  components: { ratingStarsC },

  setup() {

    const sizes = ref(["Small", "Medium", "Large", "X-Large"]);
    const colors = ref(["#31344F", "#4F4631", "#314F4A"]);
    const quantity = ref(1);
    const selectedSize = ref(null);
    const selectedColor = ref(null);
    const selectedImage = ref(null);
    const product = ref(null);
    const route = useRoute();
    const productId = route.params.id;
    const currency = currencyUSD;

    const cartStore = useCartStore();
    const productStore = useProductStore();
    productStore.fetch_products_limit();

    const productLike = computed(() => {
      return productStore.productLike;
    })

    const changeImage = (img) => { selectedImage.value = img; };
    const changeColor = (color) => { selectedColor.value = color; };
    const changeSize = (size) => { selectedSize.value = size; };


    const incrementQuantity = () => {
      if (quantity.value < 5) {
        quantity.value++;
      }
    };

    const decrementQuantity = () => {
      if (quantity.value > 1) {
        quantity.value--;
      }
    };

    const tabElement = document.querySelector('#myTab');
    if (tabElement) {
      new Tab(tabElement);
    }

    const addProductToCart = () => {
      if (!selectedSize.value || !selectedColor.value) {
        Swal.fire({
          icon: "warning",
          title: "Please select size and color",
          timer: 1500,
          showConfirmButton: false,
        });
        return;
      }

      const productWithOptions = {
        id: product.value.id,
        title: product.value.title,
        image: selectedImage.value || product.value.image,
        color: selectedColor.value,
        size: selectedSize.value,
        price: product.value.price,
        priceOld: product.value.priceOld,
        discount: product.value.discount,
        quantity: quantity.value,
      };

      cartStore.addToCart(productWithOptions);

      Swal.fire({
        icon: "success",
        title: "Product added to cart!",
        timer: 1200,
        showConfirmButton: false,
      });
    };

    const active = (event) => {
      const target = event.target;
      const tabs = target.closest('.nav-tabs');
      tabs.querySelector('.active').classList.remove('active');
      target.classList.add('active');
    }


    const fetchProducts = async (productId) => {
      try {
        console.log('Fetching product with ID:', productId);
        const response = await fetch(`/db.json`);
        console.log('Response status:', response.status);
        if (!response.ok) {
          throw new Error(`Failed to fetch product: ${response.status}`);
        }
        const data = await response.json();
        product.value = data.product.find(p => p.id === productId);
      } catch (error) {
        console.error("Error fetching products:", error.message);
      }

    };

    const discountedPrice = (price, discount) => {
      return (price - (price * discount) / 100).toFixed(2);
    };

    onMounted(() => {
      fetchProducts(productId);
    });



    return {
      product,
      quantity,
      sizes,
      colors,
      changeImage,
      changeSize,
      changeColor,
      incrementQuantity,
      decrementQuantity,
      addProductToCart,
      currency,
      discountedPrice,
      productLike,
      selectedSize,
      selectedColor,
      selectedImage,
      cartStore,
      active
    };
  },
};

</script>



<style lang="scss" scoped>
.color-btn {
  cursor: pointer;

  &.active {
    background-color: #ffffffb4;
  }

  &:hover {
    background-color: #ffffffb4;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.781);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &.active::after {
    opacity: 1;
  }
}

.size-btn {
  cursor: pointer;

  &.active {
    background-color: black;
    color: white;
  }

  &:hover {
    background-color: black;
    color: white;
  }
}

.main-title {
  font-family: "Integralcf-Bold", sans-serif;
  font-size: 5rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
}

.row-slider {
  width: calc(100px * 12);
  animation: scroll 10s linear infinite;
  display: flex;
  place-items: center;
  transform: transform 0.5s ease-in-out;

  &:hover {
    animation-play-state: paused;
    transform: scale(1.2);
  }

}

.nav-item {
  .nav-link {
    cursor: pointer;

    &.active {
      color: #000;
    }
  }
}


.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition-duration: .3s;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
  background-color: black;
  text-decoration: none;

  .sign {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #fff;
    transition-duration: .3s;

    i {
      width: 25px;
    }
  }

  .text {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 0%;
    height: 0%;
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    opacity: 0;
    transition-duration: .3s;
  }

  &:hover {
    width: 125px;
    border-radius: 40px;
    transition-duration: .3s;

    .sign {
      width: 30%;
      transition-duration: .3s;
      padding-left: 20px;
    }

    .text {
      opacity: 1;
      width: 100%;
      transition-duration: .3s;
      padding-left: 40px;
    }
  }

  &:active {
    transform: translate(2px, 2px);
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-100px * 6));
  }
}
</style>