<script setup lang="ts">
import { useQuasar, QDialog, QImg } from 'quasar';
import { h } from 'vue';
import { typedH } from './common/utils'

const $q = useQuasar();

/** 將 QImg 使用 QDialog 包起來後，使用 $q.dialog 開啟 */
function openImgWithDialog(src: string) {
  $q.dialog({
    component: typedH(
      QDialog,
      undefined,
      { default: () => typedH(QImg, { src }) }
    )
  });
}

</script>

<template>
  <div class="fit flex flex-col gap-4">
    <q-img class="w-[20rem] h-[15rem]" src="https://live.staticflickr.com/4325/35716212880_217fa28b46_k.jpg"
      @click="openImgWithDialog('https://live.staticflickr.com/4325/35716212880_217fa28b46_k.jpg')" />

    <q-img class="w-[20rem] h-[15rem]" src="https://live.staticflickr.com/4332/36174479423_07747816b9_k.jpg"
      @click="openImgWithDialog('https://live.staticflickr.com/4332/36174479423_07747816b9_k.jpg')" />
  </div>
</template>

<style scoped></style>
