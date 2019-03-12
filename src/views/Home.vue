<template>
  <div class="home">
    <Counter 
      @increment="gotIncrement"
      @decrement="gotDecrement"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Counter from '@/components/Counter.vue'

export default {
  name: 'home',
  components: { Counter },
  methods: {
    gotIncrement() {
      console.log(`Home.vue got ${this.$store.state.counter.count}`);
    },
    gotDecrement() {
      console.log(`Home.vue got ${this.$store.state.counter.count}`);
    }
  }
}
</script>
