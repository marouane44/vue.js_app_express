import axios from "axios";
const state = {
  cartItems: [],
};
const mutations = {
  UPDATE_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
};
const actions = {
  getCartItems({ commit }) {
    axios.get("/api/cart").then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  addCartItem({ commit }, cartItem) {
    axios.post("/api/cart", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
  removeCartItem({ commit }, cartItem) {
    axios.post("/api/cart/delete", cartItem).then((response) => {
      commit("UPDATE_CART_ITEMS", response.data);
    });
  },
};
const getters = {};
const cartModule = {
  state,
  mutations,
  actions,
  getters,
};
export default cartModule;
