<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <card-list
        :data="yearData"
      />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, watch } from 'vue'
import getData from '@/services'
import { useStore } from 'vuex'
import ErrorTip from '@/components/ErrorTip/index.vue'
import CardList from '@/components/YearPage/list.vue'
import { getNowDate } from '@/libs/utils.js'

export default {
  name: "YearPage",
  components: {
    ErrorTip,
    CardList
  },
  setup() {
    const store = useStore(),
          state = store?.state?.headerStore

    onMounted( () => {
      getData(store, 'year', getNowDate('year'))
    })

    watch(() => {
      return state.yearData
    }, () => {
      store.commit('headerStore/setErrorCode', 0);
    })
    
    return {
      yearData: computed(() => state.yearData),
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>

<style lang="scss">

</style>