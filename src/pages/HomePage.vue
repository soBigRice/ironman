<template>
  <div class="viewContainer">
    <div class="headContainer"></div>
    <div class="bodyContainer">
      <Viewer3D />
    </div>
    <div class="bottomContainer"></div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import Viewer3D from "./Viewer3D.vue";
export default {
  name: "HomePage",
  components: {
    Viewer3D,
  },
  setup() {
    onMounted(() => {});
  },
};
</script>

<style scoped>
.viewContainer {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.headContainer {
  flex: 1;
  /* background-color: yellow; */
}
.bottomContainer {
  flex: 1;
  /* background-color: blue; */
}
.bodyContainer {
  flex: 18;
  /* background-color: red; */
  /* display: flex; */
  /* flex-direction: row; */
}
</style>
