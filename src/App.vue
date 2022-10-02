<template>
  <div id="app2">
    <my-header>{{ headerStore.headerTitle }}</my-header>
    <search-input
      :placeholder="headerStore.placeholder"
      :maxLength="headerStore.maxLength"
    ></search-input>
    <router-view/>
    <page-tab></page-tab>
  </div>
</template>

<script>
import MyHeader from '@/components/Header/index.vue';
import PageTab from 'components/Tab/index.vue'
import SearchInput from 'components/SearchInput/index.vue'
import { computed, watch } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    MyHeader,
    PageTab,
    SearchInput
  },
  setup() {
    const store = useStore(),
          state = store.state,
          router = useRouter();
    router.push('/month')
    store.commit('headerStore/setPlaceholder', 'day')
    store.commit('headerStore/setMaxLength', 'day')
    
    
    // 监听路由
    watch(
      () =>
        router.currentRoute.value.name,// get route-name
      (value) => {
        store.commit('headerStore/setHeaderTitle', value)
        store.commit('headerStore/setPlaceholder', value)
        store.commit('headerStore/setMaxLength', value)
      } 
    )
    

    return {
      ...computed(() => state).value
    }
  }
}
</script>

<style lang="scss" scoped>
  #app2 {
    // fix: 防止连续多次点击后报错https://blog.csdn.net/lijingshan34/article/details/88350456
    touch-action: none;
  }
</style>


