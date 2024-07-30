import { onMounted, ref } from "vue";
import { useStore } from "vuex";
import { ActionsEnum } from "@/store/modules/users/actions";
import type { UserType } from "@/store/modules/users/types";

export function useUsers() {
  const store = useStore<{}>();
  const users = ref<UserType[]>([]);
  const loading = ref<boolean>(false);

  onMounted(async () => {
    loading.value = true;
    try {
      const data = await store.dispatch<UserType[]>(ActionsEnum.LoadAPIResult);
      users.value = data;
    } catch (error) {
      console.error('Error loading API result:', error);
    } finally {
      loading.value = false;
    }
  });

  return {
    users,
    loading
  };
}