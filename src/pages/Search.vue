<template>
  <div>
    <Xsearch :bool="true"/>
    <div class="foot"></div>
  </div>
</template>

<script>
import Xsearch from "../components/Xsearch.vue";
export default {
  components: {
    Xsearch
  }
};
</script>

<style scoped>
.foot{
  position: fixed;
  height: 53px;
  width: 100%;
  bottom:0;
  background: white;
  z-index: 88888;
}
</style>

