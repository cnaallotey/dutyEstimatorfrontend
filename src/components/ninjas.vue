<template>
  <div>
    <p @click="changetitle">{{ ninja }}</p>
  </div>
</template>

<script>
export default {
  props: {
    ninja: {
      type: String,
    },
  },
  data() {
    return { nameseek: "charles", age: 25 };
  },
  methods: {
    changetitle: function () {
      this.$emit("changetitle", "vue wizards");
    },
  },
};
</script>
