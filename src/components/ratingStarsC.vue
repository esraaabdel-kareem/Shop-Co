<template>
  <div class="rating">
    <i v-for="index in fullStars" :key="'full-' + index" class="fas fa-star text-warning ms-1"></i>
    <i v-if="hasHalfStar" class="fas fa-star-half text-warning ms-1"></i>
    <span class="text-muted ms-2 fw-bold">{{ rating }} / 5</span>
  </div>
</template>

<script>
export default {
  props: {
    rating: {
      type: Number,
      required: true,
      default: 0,
    
    },
  },
  computed: {
    normalizedRating() {
      const parsedRating = parseFloat(this.rating);
      return isNaN(parsedRating) || parsedRating < 0 ? 0 : parsedRating;
    },
    fullStars() {
      return Math.floor(this.normalizedRating);
    },
    hasHalfStar() {
      return this.rating % 1 !== 0;
    },
  },
};
</script>
