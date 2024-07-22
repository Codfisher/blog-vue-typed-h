<template>
  <q-card>
    <q-card-section class="bg-teal text-white">
      建立資料
    </q-card-section>

    <q-form @submit="handleSubmit">
      <q-card-section>
        <q-input
          v-model="modelValue.name"
          label="名稱"
          outlined
        ></q-input>

        <div class="flex gap-2 mt-2">
          <q-btn
            label="取消"
            @click="emit('cancel')"
          />

          <q-btn
            label="送出"
            type="submit"
            class="flex-1"
            color="teal"
          />
        </div>
      </q-card-section>
    </q-form>
  </q-card>
</template>

<script
  setup
  lang="ts"
>
import { ref } from 'vue';

interface Props {
  modelValue?: {
    name: string;
  };
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: () => ({
    name: '',
  }),
});

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'update:modelValue', value: NonNullable<Props['modelValue']>): void;
}>();

const modelValue = ref({ ...props.modelValue });

function handleSubmit() {
  emit('update:modelValue', modelValue.value);
}
</script>

<style
  scoped
  lang="sass"
></style>
