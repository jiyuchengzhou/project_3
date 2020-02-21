<template>
  <div>
    <div @click="ddo">123</div>
    <mt-checklist v-model="value" :options="options"></mt-checklist>
    <!-- <mt-radio v-model="value" options="0"></mt-radio> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      //存放所选选项
      value: [],
      //checklist设置
      options: [
        {
          label: "选项A",
          value: "A"
        },
        {
          label: "选项B",
          value: "B"
        },
        {
          label: "选项C",
          value: "C"
        },
        {
          label: "选项D",
          value: "D"
        }
      ]
    };
  },
  watch: {},
  methods: {
    ddo() {
      this.value.push("D");
      console.log(this.value);
    }
  },
  computed: {}
};
</script>
<style scoped>
</style>