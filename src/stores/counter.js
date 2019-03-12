export default {
  namespaced: true,
  state: {
    count: 0,
  },
  mutations: {
    increment: state => state.count++,
    decrement: state => state.count--,
  },
  getters: {
    judgeEven: state => {
      return state.count % 2 === 0
    },
  },
}