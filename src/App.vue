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
import { computed, watch } from 'vue';
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
    
    
    // 监听路由
    watch(
      () =>
        router?.currentRoute?.value?.name,// get route-name
      (value) => {
        store.commit('headerStore/setHeaderTitle', value)
      } 
    )
    

    return computed(() => state.headerStore).value
  }
}
</script>

<style lang="scss" scoped>
  #app {
    // 防止连续多次点击后报错https://blog.csdn.net/lijingshan34/article/details/88350456
    touch-action: none;
  }
</style>


