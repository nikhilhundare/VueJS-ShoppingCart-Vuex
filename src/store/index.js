import Vuex from 'vuex';
import Vue from 'vue';
import shop from '../api/shop';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        products:[],
        cart: []
    },
    mutations: {
        setProducts(state, products){
            state.products = products;
        },
        pushProductToCart (state, productId) {
            state.cart.push({
                id: productId,
                quantity: 1
            })
        },
        incrementItemQty(state, cartItem){
            cartItem.quantity++;
        },
        decrementProductInv(state, product){
            product.inventory--;
        }
    },
    actions: {
        fetchProducts(context){
            return new Promise((resolve, reject)=>{
                
            shop.getProducts(products => {
                context.commit('setProducts', products);
                resolve();
            })
            
            })
        },
        addProductToCart (context, product){
            if(product.inventory > 0) {
                const cartItem = context.state.cart.find(item => item.id === product.id);
                if(!cartItem){
                    context.commit('pushProductToCart', product.id)
                } else {
                    context.commit('incrementItemQty', cartItem)
                }

                context.commit('decrementProductInv', product)
            }
        }
    },
    getters: {
        availableProducts(state){
            return state.products.filter(product => product.inventory > 0)
        },
        cartProducts(state){
            return state.cart.map(cartItem => {
                const product = state.products.find(product=> product.id === cartItem.id)
                return {
                    title : product.title,
                    price: product.price,
                    quantity: cartItem.quantity
                }
            })
        }
    }
})