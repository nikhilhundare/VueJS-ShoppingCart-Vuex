<template>
  <div id="app">
    <ProductsList/>
    <hr>
    <ShoppingCart />
  </div>
</template>

<script>
import ProductsList from './components/ProductsList';
import ShoppingCart from './components/ShoppingCart';
import store from '@/store/index';

export default {
  name: 'app',
  components: {
    ProductsList,
    ShoppingCart
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
