<template>
  <div>
    <input 
      v-model="userName" 
      @keyup.enter="triggerSearch"
      placeholder="input user name here"
    />
    <button @click="triggerSearch">Search</button>
    <div class="profile-item" v-for="(value, key) in userProfile" :key="key">
      {{ key }} : {{ value }}
    </div>
  </div>
</template>

<style scoped>
  .profile-item {
    text-align: left;
    margin: 5px auto;
    width: 94%;
  }
</style>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  data: () => ({ userName: "" }),
  computed: {
    ...mapState('userInfo', [
      'userProfile'
    ])
  },
  methods: {
    ...mapActions('userInfo', [
      'search'
    ]),
    triggerSearch() {
      let { userName } = this.$data;
      this.search({ userName, })
    }
  }

}
</script>

