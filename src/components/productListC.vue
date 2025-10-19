<template>
    <div class="container py-5 ">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb fs-4 py-5 fw-bold">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-black-50">Home</RouterLink>
                </li>
                <li class="breadcrumb-item active text-black" aria-current="page">
                    <RouterLink to="/product-list" class="text-decoration-none text-black">Shop</RouterLink>
                </li>
            </ol>
        </nav>
        <div v-if="products.length" class="row g-5 align-content-center">
            <div class="col-lg-4 col-md-6 d-flex justify-content-center mb-2" v-for="product in products"
                :key="product.id">
                <div class="card border-0" style="width: 20rem; height: 31rem;">
                    <RouterLink :to="{ name: 'product', params: { id: product.id } }">
                        <img :src="product.image" class="card-img-top rounded-3 mb-2"
                            style="width: 320px; height:310px; object-fit: cover" :alt="product.title" />
                    </RouterLink>
                    <div class="card-body">
                        <h4 class="card-title  fw-bold">
                            {{ product.title }}
                        </h4>
                        <ratingStarsC :rating="Number(product.rating)" class="mb-2" />
                        <p class="card-text fw-bold fs-5">
                            <span v-if="product.discount && product.discount > 0" class="ps-2 fs-5">
                                ${{ discountedPrice(product.price, product.discount) }}
                                <small class="text-muted text-decoration-line-through fs-5">
                                    ${{ product["priceOld"] }}
                                </small>
                                <span class="text-danger ms-1 mark-discount bg-danger-subtle rounded-pill p-1 fs-6">-{{
                                    product.discount }}%</span>
                            </span>
                            <span v-else class="fs-5 fw-bold">
                                ${{ product.price }}
                            </span>
                            <button class=" Btn mt-2 " @click="cartStore.addToCart({
                                id: product.id,
                                title: product.title,
                                image: product.image,
                                price: product.price,
                                priceOld: product.priceOld,
                                discount: product.discount
                            })">
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
        <div v-else class="text-center py-5">
            Loading products...
        </div>
    </div>
</template>

<script>
import ratingStarsC from "./ratingStarsC.vue";
import { useCartStore } from "../store/cartStore";
import { nextTick } from "vue";


export default {
    name: "productListC",
    components: { ratingStarsC },

    setup() {
        const cartStore = useCartStore();
        return {
            cartStore,
        };
    },
    data() {
        return {
            products: [],
        };
    },
    mounted() {
        this.fetchProducts();
    },

    methods: {
        discountedPrice(price, discount) {
            return (price - (price * discount) / 100).toFixed(2);
        },

        fetchProducts() {
            fetch("/db.json")
                .then((response) => response.json())
                .then((data) => {
                    this.products = data.product;
                    nextTick(() => {
                        console.log("Products loaded and DOM updated")
                    })
                })
                .catch((error) => console.error("Error fetching products:", error));
        },
    },

}
</script>

<style lang="scss" scoped>
.card {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.164);
    border-radius: 10px;
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
</style>