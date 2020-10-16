<template>
    <div id="shoppingCart">
        <h1>Cart Items List</h1>
        <ul>
            <li :key="product.id" v-for="product in products">
                {{product.title}} - {{product.price}} ({{product.quantity}})
            </li>
        </ul>
        <p>Total : {{total}} </p>
    </div>
</template>
<script>

export default {
    computed: {
        products(){
            return this.$store.getters.cartProducts
        },
        total(){
            return this.$store.getters.cartTotal
        }
    }
}
</script>
<style>

</style>