<template>
    <div class="container my-5">
        <nav style="--bs-breadcrumb-divider: '>'" aria-label="breadcrumb">
            <ol class="breadcrumb fs-5 fw-bold">
                <li class="breadcrumb-item">
                    <RouterLink to="/" class="text-decoration-none text-black-50">Home</RouterLink>
                </li>
                <li class="breadcrumb-item">
                    <RouterLink to="/cart" class="text-decoration-none text-black">Cart</RouterLink>
                </li>
            </ol>
        </nav>
        <h1 class="main-title mb-5">Your Cart</h1>
        <div class="row">
            <div class="col-lg-8 col-sm-12 border border-2 border-light-subtle rounded-5 w-100 p-2 "
                v-if="carts && carts.length > 0">
                <table class="table " style="width: 100%">
                    <tbody>
                        <tr v-for="cart in carts" :key="cart.id">
                            <td>
                                <div class="d-flex mt-4 align-items-center">
                                    <img :src="cart.image" class="rounded-4 me-3"
                                        style="width: 125px ; height: 125px; object-fit: cover;" :alt="cart.title" />
                                    <div class=" ms-1">
                                        <p class="fw-medium fs-sm-5 mb-0">{{ cart.title }}</p>
                                        <div class="d-flex align-items-center gap-2">
                                            <span class="fw-medium text-muted fs-7">Color:</span>
                                            <span v-if="cart.color"
                                                :style="{ backgroundColor: cart.color, width: '20px', height: '20px', borderRadius: '50%', display: 'inline-block', border: '1px solid #ccc' }"></span>
                                            <span v-else class="text-muted fs-7">Default</span>
                                        </div>

                                        <span class="fw-bold d-block text-muted fs-6">size: {{ cart.size || "Default" }}
                                        </span>
                                        <p class="fw-semibold mb-0">
                                            {{ currencyUSD(cart.price) }}
                                        </p>

                                    </div>

                                </div>

                            </td>
                            <td class="d-flex  justify-content-end flex-column align-items-end py-5">
                                <button class="button " @click="cartStore.removeFromCart(cart.id)">
                                    <svg viewBox="0 0 448 512" class="svgIcon">
                                        <path
                                            d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                                        </path>
                                    </svg>
                                </button>
                                <div class="btn-group mt-3" role="group" aria-label="Basic example">
                                    <button class="btn btn-light rounded-start-5"
                                        @click="cartStore.decreaseQuantity(cart.id)">
                                        <i class="fas fa-minus"></i>
                                    </button>
                                    <button class=" btn bg-light border-0 " value="1">{{ cart.quantity }}</button>
                                    <button class="btn btn-light rounded-end-5"
                                        @click="cartStore.increaseQuantity(cart.id)">
                                        <i class="fas fa-plus"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="col-lg-4 py-sm-2 mt-1" v-if="carts && carts.length > 0">
                <div class=" rounded-4 border border-2 border-light-subtle p-4">
                    <h3 class="fw-bold mb-4">Our Summary</h3>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="fw-bold mb-0 text-black-50">Subtotal</p>
                        <p class="fw-bold mb-0">{{ currencyUSD(cartStore.subtotal) }}</p>
                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="fw-bold mb-0 text-black-50">
                            Discount (-{{ totalDiscountPercent }}%)
                        </p>
                        <p class="fw-bold mb-0 text-danger">
                            - {{ currencyUSD(cartStore.totalDiscount) }}
                        </p>

                    </div>
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <p class="fw-bold mb-0 text-black-50">Delivery Fee</p>
                        <p class="fw-bold mb-0">{{ currencyUSD(cartStore.deliveryFee) }}</p>
                    </div>

                    <div class="d-flex flex-column border-top border-1 border-light pt-3">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <p class="fw-bold mb-0">Total</p>
                            <p class="fw-bold mb-0">
                                {{ currencyUSD(cartStore.total) }}
                            </p>



                        </div>

                        <div class="d-flex justify-content-between">
                            <small class="fw-bold mb-0 text-black-50">Promo Code Discount</small>
                            <small class="text-danger fw-bold mb-0">- {{ currencyUSD(cartStore.promoDiscountAmount)
                                }}</small>
                        </div>

                        <div class="d-flex py-3">
                            <div
                                class=" rounded-5 border-0 bg-light w-100 px-auto d-flex justify-content-center align-items-center">
                                <i class="fas fa-tag text-secondary px-2"></i>
                                <input type="text" placeholder="Add Promo Code" id="text"
                                    class=" input border-0 bg-light text-muted" v-model="promoCode">
                            </div>
                            <button class="btn btn-dark rounded-5 px-3 fw-bold fs-5" @click="applyPromoCode()">
                                Apply
                            </button>

                        </div>
                        <button class="animated-button" @click="cartStore.checkout()">
                            <svg viewBox="0 0 24 24" class="arr-2" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                                </path>
                            </svg>
                            <span class="text fw-bold">Go to checkout</span>
                            <span class="circle"></span>
                            <svg viewBox="0 0 24 24" class="arr-1" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="!carts || carts.length === 0" class="text-center w-50 ">
            <h5 class="alert alert-secondary text-black-50 ">Your cart is empty <i
                    class="fas fa-shopping-cart fs-6"></i></h5>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '@/store/cartStore';
import { currencyUSD } from '@/shared/currency';
import { ref, computed } from 'vue';

const cartStore = useCartStore();


const carts = computed(() => cartStore.carts);
const promoCode = ref('');

const applyPromoCode = () => {
    if (promoCode.value.trim() === '') {
        alert('Please enter a valid promo code.');
        return;
    }
    cartStore.applyPromoCode(promoCode.value);
    promoCode.value = '';
};
const totalDiscountPercent = computed(() => {
    const totalProductPercent = cartStore.carts.reduce((sum, item) => {
        return sum + (item.discount || 0);
    }, 0);
    return totalProductPercent + cartStore.promoDiscount;
});


</script>


<style lang="scss" scoped>
.main-title {
    font-size: 6rem;
    font-weight: bold;
    margin-bottom: 1rem;
    letter-spacing: -9px;
    font-family: "Integral-Cf-Bold", sans-serif;
    text-transform: uppercase;
}

.form-control {
    height: 50px;

    &:focus {
        box-shadow: none;
    }
}

.button {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.164);
    cursor: pointer;
    transition-duration: .3s;
    overflow: hidden;
    position: relative;

    .svgIcon {
        width: 15px;
        transition-duration: .3s;
    }

    .svgIcon path {
        fill: white;
    }

    &::before {
        position: absolute;
        top: -25px;
        content: "Delete";
        color: white;
        transition-duration: .3s;
        font-size: 2px;
    }

    &:hover::before {
        font-size: 13px;
        opacity: 1;
        transform: translateY(30px);
        transition-duration: .3s;
    }

    &:hover {
        width: 110px;
        border-radius: 50px;
        transition-duration: .3s;
        background-color: black;
        align-items: center;
    }

    &:hover .svgIcon {
        width: 50px;
        transition-duration: .3s;
        transform: translateY(60%);
    }

}

.animated-button {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px 36px;
    border: 10px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: #000;
    border-radius: 100px;
    font-weight: 600;
    color: white;
    box-shadow: 0 0 0 2px white;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button svg {
    position: absolute;
    width: 24px;
    fill: white;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .arr-1 {
    right: 16px;
}

.animated-button .arr-2 {
    left: -25%;
}

.animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
}

.animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #000;
    border-radius: 100px;
}

.animated-button:hover .arr-1 {
    right: -25%;
}

.animated-button:hover .arr-2 {
    left: 16px;
}

.animated-button:hover .text {
    transform: translateX(12px);
}

.animated-button:hover svg {
    fill: #000;
}

.animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px white;
}

.animated-button:hover .circle {
    width: 100%;
    height: 220px;
    opacity: 1;
}

.input {
    border: none;
    outline: none;
}
</style>