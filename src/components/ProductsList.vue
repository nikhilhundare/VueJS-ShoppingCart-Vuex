const { data } = require("autoprefixer");
const { template } = require("babel-core");
const { default: shop } = require("../api/shop");

<template>
    <div>
        <h1>Products List</h1>
        <ul>
            <li :key="product.id" v-for="product in products">
                {{product.title}} ({{product.inventory}}) - {{product.price}}
                <button @click="addProductsToCart(product)">Add Item</button>
            </li>
        </ul>
    </div>
</template>
<script>

export default {
    computed: {
        products(){
            return this.$store.getters.availableProducts;
        }
    },
    created(){
        this.$store.dispatch('fetchProducts');
    },
    methods:{
        addProductsToCart(product){
            this.$store.dispatch('addProductToCart', product)
        }
    }
}
</script>
<style>

</style>