<template>
<div>
  <div class="mx-auto w-full" v-for="spending in spendings" :key="spending.title">
    <div class="p-8 rounded-md border-2 border-red-100">
        <div class="flex justify-between">
            <span class="text-md text-gray-400">12/3/2022</span>
            <span class="text-md text-red-400 font-bold">- Rp.{{spending.amount}}</span>
        </div>
        <div class="mt-4">
            <h2 class="text-lg font-bold mb-2">{{ spending.title }}</h2>
            <p class="text-lg mb-2">{{ spending.detail }}</p>
            <span class="text-md text-red-400">Rp.425.000 -> Rp.400.000</span>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    spendings: { type: Array, required: true}
  }
}
</script>

<style>

</style>