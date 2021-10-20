<template>
  <div>
    <div class="pl-10 bg-gray-100 w-2/3 pt-5 h-screen">
      <div
        class="w-2/3 mx-auto bg-white mt-5 pl-4 pb-10 pr-4"
        v-for="receiptdata in receiptdata"
        :key="receiptdata"
      >
        <h1 class="font-medium text-md text-gray-500">
          {{ receiptdata.timehours }}:{{ receiptdata.timeminutes }}
        </h1>
        <h1 class="text-center font-semibold text-2xl">Receipt</h1>
        <h1 class="font-medium text-l mt-5">
          {{ receiptdata.name }}
        </h1>
        <h1 class="font-medium text-l mt-2">
          {{ receiptdata.email }}
        </h1>
        <h1 class="font-medium text-l mt-2">
          {{ receiptdata.momo }}
        </h1>
        <h1 class="font-medium text-sm text-center">
          paid
          <span class="text-right font-semibold text-4xl text-blue-800"
            >${{ receiptdata.price }}</span
          >
        </h1>
        <h1 class="text-lg font-medium text-green-700 mt-10 text-center">
          {{ receiptdata.list }}
        </h1>
        <slot name="heading"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    receiptdata: {
      type: Array,
    },
  },
};
</script>
