<template>
  <div id="app">
    <my-header>{{headerTitle}}</my-header>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/Header';
import { computed } from 'vue';
import { useStore } from 'vuex';
// import { useRouter } from 'vue-router'

  export default {
    name: 'App',
    components: {
      MyHeader
    },
    setup() {
      const store = useStore(),
            state = store.state
            // router = useRouter();
      // router.push('/')
      

      return computed(() => state.header).value
    }
  }
</script>


