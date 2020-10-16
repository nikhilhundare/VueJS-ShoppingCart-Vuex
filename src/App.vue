<template>
  <div id="app">
    <ProductsList/>
  </div>
</template>

<script>
import ProductsList from './components/ProductsList';
import store from '@/store/index';

export default {
  name: 'app',
  components: {
    ProductsList
  },
  store
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
