<template>
  <div id="app">
    <my-header>{{ headerTitle }}</my-header>
    <page-tab></page-tab>
    <router-view/>
  </div>
</template>

<script>
import MyHeader from '@/components/Header/index.vue';
import PageTab from 'components/Tab/index.vue'
import { computed } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

  export default {
    name: 'App',
    components: {
      MyHeader,
      PageTab
    },
    setup() {
      const store = useStore(),
            state = store.state,
            router = useRouter();
      router.push('/')
      

      return computed(() => state.header).value
    }
  }
</script>


