<!--
 * @Author: superRice
 * @Date: 2025-04-23 14:36:40
 * @LastEditors: superRice 1246333567@qq.com
 * @LastEditTime: 2025-04-23 14:43:31
 * @FilePath: /IronManVisualizer/src/App.vue
 * @Description: 
 * Do your best to be yourself
 * Copyright (c) 2025 by superRice, All Rights Reserved. 
-->

<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  display: -webkit-flex; /* Safari */
  flex-direction: column;
  margin: auto;
  align-content: center;
  justify-content: center;
  position: fixed;

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
