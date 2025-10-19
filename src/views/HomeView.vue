<template>
  <div class="overflow-x-hidden">
    <!-- about -->
    <section class="home py-5" style="background-color: #f3f1f2">
      <div class="container ">
        <div class="row gap-4">
          <div class="content col-md-6 col-sm-12 justify-content-center align-content-center">
            <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your
              individuality
              and cater to your sense of style.</p>
            <button class="btn btn-dark rounded-5 ">
              <span class="fw-bold">SHOP NOW</span>
            </button>
            <div class="stats row mt-5 g-5 justify-content-sm-center align-content-sm-center">
              <div class="stat col-4 col-sm-6 border-end ">
                <h4>200+</h4>
                <p>International Brands</p>
              </div>
              <div class="stat col-4 col-sm-6 border-end">
                <h4>2,000+</h4>
                <p>High-Quality Products</p>
              </div>
              <div class="stat col-4 col-sm-6">
                <h4>30,000+</h4>
                <p>Happy Customers</p>
              </div>
            </div>
          </div>
          <div class="image col-3 ">
            <svg class="svg-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16">
              <path
                d="M7.53 1.282a.5.5 0 0 1 .94 0l.478 1.306a7.492 7.492 0 0 0 4.464 4.464l1.305.478a.5.5 0 0 1 0 .94l-1.305.478a7.492 7.492 0 0 0-4.464 4.464l-.478 1.305a.5.5 0 0 1-.94 0l-.478-1.305a7.492 7.492 0 0 0-4.464-4.464L1.282 8.47a.5.5 0 0 1 0-.94l1.306-.478a7.492 7.492 0 0 0 4.464-4.464Z">
              </path>
            </svg>
            <img src="../assets/home.jpg" alt="">
            <svg class="svg-sm-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
              <path
                d="M11.296 1.924c.24-.656 1.168-.656 1.408 0l.717 1.958a11.25 11.25 0 0 0 6.697 6.697l1.958.717c.657.24.657 1.168 0 1.408l-1.958.717a11.25 11.25 0 0 0-6.697 6.697l-.717 1.958c-.24.657-1.168.657-1.408 0l-.717-1.958a11.25 11.25 0 0 0-6.697-6.697l-1.958-.717c-.656-.24-.656-1.168 0-1.408l1.958-.717a11.25 11.25 0 0 0 6.697-6.697l.717-1.958Z">
              </path>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <!-- brands  -->
    <nav class="navbar bg-black mb-4 py-3">
      <div class="container ">
        <div class="justify-content-center align-items-center p-2 row-slider-1 flex flex-column flex-sm-row">
          <a href="#" class="mx-5">
            <img src="../assets/brands/V.jpg" alt="Versace Logo" class="logo" />
          </a>
          <a href="#" class="mx-5">
            <img src="../assets/brands/Z.png" alt="Zara Logo" class="logo" />
          </a>
          <a href="#" class="mx-5">
            <img src="../assets/brands/G.jpg" alt="Gucci Logo" class="logo" />
          </a>
          <a href="#" class="mx-5">
            <img src="../assets/brands/P.jpg" alt="Prada Logo" class="logo" />
          </a>
          <a href="#" class="mx-5">
            <img src="../assets/brands/ck.jpg" alt="Calvin Klein Logo" class="logo1" />
          </a>
        </div>
      </div>
    </nav>
    <!-- new arrivals -->
    <div class="arrivals py-5" id="arrivals">
      <div class="container">
        <section class="arrivals mb-5 py-5">
          <h2 class="main-title my-5 text-center text-uppercase">New Arrivals</h2>
          <div class="d-flex g-5 align-content-center row-slider" v-if="newArrivals">
            <div class=" col-7 col-sm-8 col-md-4 col-lg-4 mb-4" v-for="(product) in newArrivals" :key="product.id">
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
                        {{ currency(product.price) }}
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
                      discount: product.discount
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
          <div class="text-center my-5">
            <button class="btn fs-2 border-1 border rounded-pill p-2 edit-btn"
              @click="redirectTo({ name: 'productList' })">
              View All
            </button>
          </div>
        </section>
      </div>
    </div>
    <!-- top selling -->
    <div class="selling border-top border-1 py-5" id="selling">
      <div class="container h-50">
        <section class="top-selling mb-5 py-5">
          <h2 class="main-title my-5 text-center text-uppercase">Top Selling</h2>
          <div class="d-flex  justify-content-center g-5 align-content-center row-slider" v-if="topSelling">
            <div class="col-7 col-sm-8 col-md-4 col-lg-4 mb-4" v-for="product in topSelling" :key="product.id">
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
                      discount: product.discount
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
          <div class="text-center my-5">
            <button class="btn fs-2 border-1 border rounded-pill p-2 edit-btn"
              @click="redirectTo({ name: 'productList' })">
              View All
            </button>
          </div>
        </section>
      </div>
    </div>
    <!-- styles -->
    <div class="style py-5">
      <div class="container bg-body-secondary rounded-5 py-3">
        <div class="text-center text-uppercase">
          <h1 class="main-title mb-5">browse by dress style</h1>
        </div>
        <div class="row g-2 align-content-center justify-content-center pb-4">
          <div class="col-4 bg-white me-2 rounded-4 img1">
            <p class="text-capitalize fs-2 fw-bold m-3">casual</p>
          </div>
          <div class="col-5 bg-white me-2 rounded-4 img2">
            <p class="text-capitalize fs-2 fw-bold m-3">formal</p>
          </div>
          <div class="col-5 bg-white me-2 rounded-4 img3">
            <p class="text-capitalize fs-2 fw-bold m-3">party</p>
          </div>
          <div class="col-4 bg-white me-2 rounded-4 img4">
            <p class="text-capitalize fs-2 fw-bold m-3">gym</p>
          </div>
        </div>
      </div>
    </div>
    <!-- review -->
    <div class="review py-5" id="review">
      <div class="container">
        <div class="text-uppercase d-flex justify-content-between align-items-center">
          <h1 class="main-title mb-5">Our Happy Customers</h1>
          <div class="d-flex gap-3">
            <i class="fa fa-arrow-left fs-3 text-secondary hover:text-dark cursor-pointer"></i>
            <i class="fa fa-arrow-right fs-3 text-secondary hover:text-dark cursor-pointer"></i>
          </div>
        </div>
        <div class="d-flex g-5 align-content-center  row-slider">

          <div class="col-lg-4 col-sm-9  col-10  border-1 border-light-subtle border mx-2 rounded-5 p-3">
            <div class="icons py-2">
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
            </div>
            <div class="text">
              <h3 class="text-black">
                Sarah M.
                <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
              </h3>
              <p class="text-black-50">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-9  col-10 border-1 border-light-subtle border mx-2 rounded-5 p-4">
            <div class="icons ">
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
            </div>
            <div class="text">
              <h3 class="text-black">
                Alex K.
                <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
              </h3>
              <p class="text-black-50">
                "Finding clothes that align with my personal style used to be a
                challenge until I discovered Shop.co. The range of options they
                offer is truly remarkable, catering to a variety of tastes and
                occasions.”
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-9 col-10 border-1 border-light-subtle border mx-2 rounded-5 p-3">
            <div class="icons py-2">
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
            </div>
            <div class="text">
              <h3 class="text-black">
                James L.
                <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
              </h3>
              <p class="text-black-50">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-9  col-10 border-1 border-light-subtle border mx-2 rounded-5 p-3">
            <div class="icons py-2">
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
            </div>
            <div class="text">
              <h3 class="text-black">
                Sarah M.
                <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
              </h3>
              <p class="text-black-50">
                "I'm blown away by the quality and style of the clothes I
                received from Shop.co. From casual wear to elegant dresses,
                every piece I've bought has exceeded my expectations.”
              </p>
            </div>
          </div>
          <div class="col-lg-4 col-sm-9  col-10 border-1 border-light-subtle border mx-2 rounded-5 p-4">
            <div class="icons py-2">
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
              <i class="text-warning fas fa-star"></i>
            </div>
            <div class="text">
              <h3 class="text-black">
                Mooen
                <i class="fa fa-check-circle text-success fs-5 ps-2"></i>
              </h3>
              <p class="text-black-50">
                "As someone who's always on the lookout for unique fashion
                pieces, I'm thrilled to have stumbled upon Shop.co. The
                selection of clothes is not only diverse but also on-point with
                the latest trends.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ratingStarsC from "../components/ratingStarsC.vue";
import { useProductStore } from "../store/productStore";
import { useCartStore } from "../store/cartStore";
import { useNavigationStore } from '@/store/navigationStore';
import { currencyUSD } from "@/shared/currency";
import { computed } from "vue";

export default {
  name: "HomeView",
  components: { ratingStarsC },
  setup() {
    const productStore = useProductStore();
    productStore.fetch_products_limit();

    const newArrivals = computed(() => productStore.newArrivals);

    const topSelling = computed(() => productStore.topSelling);

    const currency = currencyUSD;


    const discountedPrice = (price, discount) => {
      const discounted = price - (price * discount) / 100;
      return discounted.toFixed(2);
    };

    const cartStore = useCartStore();

    const navigationStore = useNavigationStore();

    return {
      productStore,
      cartStore,
      newArrivals,
      topSelling,
      currency,
      discountedPrice,
      redirectTo: navigationStore.redirectTo
    };
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}

.home {
  min-height: 100vh;

  @media (max-width: 913px) {
    min-height: 65vh;
  }

  @media (max-width: 540px) {
    height: 160vh;
    overflow: hidden;
  }

  @media (max-width: 1024px) {
    min-height: 40vh;
  }



  .content {

    font-family: "Satoshi-400", sans-serif;
    margin-top: 70px;

    h2 {
      font-size: 4rem;
      font-weight: bold;
      font-family: "Integralcf-Bold", sans-serif;
      line-height: 80px;
      letter-spacing: -3px;

      @media (max-width: 768px) {
        font-size: 4rem;
        line-height: 60px;
      }

      @media (max-width: 400px) {
        font-size: 1rem;
      }

      @media (max-width: 1200px) {
        font-size: 3rem;
        line-height: 60px;
      }
    }

    .btn {
      width: 15em;
      height: 3em;
      font-family: inherit;
      border: none;
      position: relative;
      overflow: hidden;
      z-index: 1;
      box-shadow: 3px 3px 6px #ccc, -3px -3px 6px #cecece;

      &::before {
        content: "";
        width: 0;
        height: 3em;
        border-radius: 30em;
        position: absolute;
        top: 0;
        left: 0;
        background-image: linear-gradient(to right, #000 0%, #777 100%);
        transition: 0.5s ease;
        display: block;
        z-index: -1;
      }

      &:hover::before {
        width: 15em;
      }

      @media (max-width: 992px) {
        width: 20em;

        &:hover:before {
          width: 20em;
        }

      }
    }

    .stats {
      .stat {
        max-width: 200px;

        &:not(:last-child) {
          border-right: 1px solid #ccc;
        }

        h4 {
          font-size: 2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          line-height: 20px;
        }

        p {
          font-size: 0.9rem;
          color: #777;
        }
      }


    }
  }

  .image {
    position: relative;

    img {
      position: absolute;
      left: 50px;
      top: 50px;
      width: 500px;

      @media (max-width: 789px) {
        left: 40px;
      }


      @media (max-width: 1200px) {
        top: 100px;
      }
    }

    .svg-icon {
      position: absolute;
      left: 410px;
      top: 40px;
      width: 70px;
      height: 70px;
      z-index: 1;

      @media (max-width: 789px) {
        left: 400px;
        top: 60px;
      }
    }

    .svg-sm-icon {
      position: absolute;
      width: 40px;
      height: 40px;
      top: 250px;
      left: 50px;
      z-index: 1;

      @media (max-width: 789px) {
        left: 50px;
        top: 260px;
      }
    }
  }

}

.brand {
  width: 100px;
  animation: scroll;
}

/* slider */

.row-slider {
  width: calc(100px * 12);
  animation: scroll 50s linear infinite;
  display: flex;
  place-items: center;
  transform: transform 0.5s ease-in-out;

  &:hover {
    /* animation-play-state: paused; */
    transform: scale(1.2);
  }

  @media (max-width: 789px) {
    width: calc(100px * 6);
  }
}

.row-slider-1 {
  width: calc(100px * 12);
  animation: scroll 5s linear infinite;
  display: flex;
  place-items: center;
  transform: transform 0.5s ease-in-out;

  @media (max-width: 789px) {
    width: calc(100px * 6);
    animation-play-state: paused;

  }
}


.logo {
  width: 130px;
}

.logo1 {
  width: 170px;
}

/* styles */
.style {

  .img1 {
    background-image: url(../assets/style/casual.png);
    background-size: 530px;
    background-position: -60px -90px;
    width: 350px;
    height: 150px;

    @media (max-width: 991px) {
      width: 350px;
      background-size: 450px;
      background-position: -40px -80px;
    }
  }

  .img2 {
    background-image: url(../assets/style/formal.png);
    background-size: 450px;
    background-repeat: repeat-y;
    background-position: 255px -65px;
    width: 550px;
    height: 150px;

    @media (max-width: 991px) {
      background-position: 90px -70px;
      width: 350px;
    }
  }

  .img3 {
    background-image: url(../assets/style/party.png);
    background-size: 450px;
    background-position: 150px -90px;
    background-repeat: no-repeat;
    width: 550px;
    height: 150px;

    @media (max-width: 991px) {
      background-size: 300px;
      background-position: 110px -60px;
      width: 350px;
    }
  }

  .img4 {
    background-image: url(../assets/style/gym.png);
    background-size: 250px;
    background-repeat: repeat-y;
    background-position: 150px -840px;
    width: 350px;
    height: 150px;

    @media (max-width: 991px) {
      width: 350px;
      background-size: 200px;
      background-position: 180px -60px;
    }
  }

  @media (max-width: 781px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

/* title section */
.main-title {
  font-family: "Integralcf-Bold", sans-serif;
  font-size: 4rem;
  font-weight: bold;
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -3px;

  @media (max-width: 991px) {
    font-size: 2rem;
  }
}

.edit-btn {
  width: 25%;

  @media (max-width: 789px) {
    width: 100%;
  }
}

.Btn {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 55px;
  height: 55px;
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
    padding: 0 10px;
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
    transform: translateX(calc(-100px * 12));
  }
}
</style>
