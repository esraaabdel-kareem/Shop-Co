import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";
import Swal from "sweetalert2";

export const useCartStore = defineStore("useCartStore", () => {
  const carts = ref(JSON.parse(localStorage.getItem("cart")) || []);
  const promoDiscount = ref(0); // Promo code % discount
  const deliveryFee = ref(15); // Flat delivery fee

  const formatNumber = (num) => Number(num.toFixed(2));

  //  Subtotal before any discount
  const subtotal = computed(() => {
    return formatNumber(
      carts.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
  });

  //  Total discount from products
  const productsDiscount = computed(() => {
    return formatNumber(
      carts.value.reduce((sum, item) => {
        if (item.discount) {
          const discountValue =
            (item.discount / 100) * item.price * (item.quantity || 1);
          return sum + discountValue;
        }
        return sum;
      }, 0)
    );
  });

  //  Apply promo discount AFTER product discounts
  const promoDiscountAmount = computed(() => {
    const amountAfterProductDiscount = subtotal.value - productsDiscount.value;
    return formatNumber(
      (promoDiscount.value / 100) * amountAfterProductDiscount
    );
  });

  //  Total discount (all combined)
  const totalDiscount = computed(() => {
    return formatNumber(productsDiscount.value + promoDiscountAmount.value);
  });

  // Final total
  const total = computed(() => {
    return formatNumber(
      subtotal.value - totalDiscount.value + deliveryFee.value
    );
  });

  //  Watch for cart changes
  watch(
    carts,
    (newCart) => {
      localStorage.setItem("cart", JSON.stringify(newCart));
    },
    { deep: true }
  );

  //  Add product to cart
  const addToCart = (product) => {
    const existing = carts.value.find((p) => p.id === product.id);
    if (existing) {
      existing.quantity++;
    } else {
      carts.value.push({
        ...product,
        quantity: 1,
        discountPercent: product.discount || 0, // per-product discount
      });
    }
    Swal.fire({
      icon: "success",
      title: "Added to cart",
      timer: 1200,
      showConfirmButton: false,
    });
  };

  //  Remove product
  const removeFromCart = (id) => {
    carts.value = carts.value.filter((item) => item.id !== id);
  };

  //  Increase quantity
  const increaseQuantity = (id) => {
    const item = carts.value.find((p) => p.id === id);
    if (item) item.quantity++;
  };

  // Decrease quantity
  const decreaseQuantity = (id) => {
    const item = carts.value.find((p) => p.id === id);
    if (item && item.quantity > 1) item.quantity--;
  };

  //  Clear cart
  const clearCart = () => {
    carts.value = [];
    localStorage.removeItem("cart");
  };

  //  Count total items
  const cartCount = computed(() =>
    carts.value.reduce((sum, item) => sum + item.quantity, 0)
  );

  //  Apply promo code
  const applyPromoCode = (code) => {
    if (code.toUpperCase() === "SALE10") {
      promoDiscount.value = 10;
      Swal.fire({
        icon: "success",
        title: "Promo code applied! 10% off",
        timer: 1500,
        showConfirmButton: false,
      });
    } else {
      promoDiscount.value = 0;
      Swal.fire({
        icon: "error",
        title: "Invalid promo code",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  };

  //  Checkout
  const checkout = () => {
    if (carts.value.length === 0) {
      Swal.fire({
        icon: "warning",
        title: "Your cart is empty!",
        timer: 1500,
        showConfirmButton: false,
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Purchase successful",
      text: "Thank you for your order!",
      timer: 2000,
      showConfirmButton: false,
    });
    clearCart();
  };

  return {
    carts,
    subtotal,
    productsDiscount,
    promoDiscount,
    promoDiscountAmount,
    totalDiscount,
    deliveryFee,
    total,
    cartCount,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    applyPromoCode,
    checkout,
  };
});
