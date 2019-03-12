import Vue from 'vue'

export default {
  namespaced: true,
  state: {
    userProfile: {},
  },
  mutations: {
    update: (state, { userProfile }) => state.userProfile = userProfile,
    failed: (state, { msg }) => state.userProfile = msg,
  },
  actions: {
    search: async ({ commit }, { userName }) => {
      try {
        let { data } = await Vue.http.get(`https://api.github.com/users/${userName}`);
        let userProfile = data;
        commit('update', { userProfile });
      } catch (error) {
        commit('failed', { msg: "no such user" });
      }
    }
   }
}