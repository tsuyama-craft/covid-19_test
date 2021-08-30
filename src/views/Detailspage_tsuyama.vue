<template>
  <mainmenu judge=0 />
  <div class="pagelink">
    <router-link to="/">新型コロナウイルス情報</router-link><a>＞津山市コロナ感染者詳細情報</a>
  </div>
  <h1>津山市コロナ感染者詳細情報</h1>
  <button type="button" v-on:click="Back" :disabled="isTestDisabledBack">前</button>
  <button type="button" v-on:click="Next" :disabled="isTestDisabledNext">次</button>
  <!--
  <canvas v-if="isLarge == true" id="chart" height="100" width="300"></canvas>
  <canvas v-else-if="isLarge == false" id="chart"></canvas>
  -->
</template>


<script>

</script>