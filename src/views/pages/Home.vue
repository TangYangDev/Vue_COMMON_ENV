<template>
  <div>
    <div v-html="msg"></div>
    <p v-html="'作者:' + authorName "></p>
    <p>{{ date }}</p>
    <p>{{ count }}</p>
  </div>
</template>

<script>
// Vuex 另一种数据映射写法 安装 npm i babel-preset-stage-1 -D
import { mapState, mapMutations } from "vuex";
export default {
  name: "home",
  data() {
    return {
      msg: "这是一个首页"
    };
  },
  mounted() {
    let date = new Date();
    let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate();
    const dateStr = `${year}年${month}月${day}日`;

    this.$store.dispatch("updateDateStyleAsync", {
      date: dateStr,
      time: 1000
    });

    //映射安装方法传参实现
    this.updateCount({
      param: 5
    });
  },
  methods: {
    ...mapMutations(["updateCount"])
  },
  computed: {
    ...mapState(["date", "count"]),
    authorName() {
      return this.$store.getters.fullName;
    }
  }
};
</script>