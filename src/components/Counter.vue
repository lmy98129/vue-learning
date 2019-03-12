<template>
  <div>
    <div> {{ count }} </div>
    <div>this is a {{ isEven ? 'even' : 'odd' }} number</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  computed: {
    ...mapState('counter', [
      'count',
    ]),
    ...mapGetters('counter', {
      isEven: 'judgeEven',
    })
  },
  methods: {
    increment() {
      this.$store.commit('counter/increment');
      this.$emit('increment');
      // this.$emit('increment', { data: this.$store.state });
    },
    decrement() {
      this.$store.commit('counter/decrement');
      this.$emit('decrement');
      // this.$emit('decrement', { data: this.$store.state })
    }
    // ...mapMutations('counter', [
    //   'increment', 'decrement',
    // ])
  }
}
</script>

