<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <card-list
        :data="monthData"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watch } from 'vue'
import getData from '@/services'
import { useStore } from 'vuex'
import ErrorTip from '@/components/ErrorTip/index.vue'
import CardList from '@/components/MonthPage/List/index.vue'
import { getNowDate } from '@/libs/utils.js'

export default {
  name: "MonthPage",
  components: {
    ErrorTip,
    CardList
  },
  setup() {
    const store = useStore(),
          state = store?.state?.headerStore

    onMounted( () => {
      getData(store, 'month', getNowDate('month'))
    })

    watch(() => {
      return state.monthData
    }, () => {
      store.commit('headerStore/setErrorCode', 0);
    })
    
    return {
      monthData: computed(() => state.monthData),
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>

<style lang="scss">

</style>