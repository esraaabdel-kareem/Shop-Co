import { defineStore } from "pinia";
import { useRouter } from "vue-router";

export const useNavigationStore = defineStore("navigation", () => {
  const router = useRouter();

  const redirectTo = (route) => {
    router.push(route);
  };

  return {
    redirectTo,
  };
});
