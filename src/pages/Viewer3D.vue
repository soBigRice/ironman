<template>
  <div id="webglView"></div>
</template>

<script>
import { onMounted } from "vue";
import { View3D } from "../script/View3D.js";
export default {
  name: "Viewer3D",
  setup() {
    onMounted(() => {
      const view3D = new View3D({
        container: document.getElementById("webglView"),
      });
    });
  },
};
</script>

<style scoped>
#webglView {
  width: 100%;
  height: 100%;
}
</style>
