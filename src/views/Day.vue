<template>
  <div class="container">
    <error-tip />
    <div v-if="!errorCode">
      <day-card :data="dayData" />
      <day-list :data="dayData" />
    </div>

  </div>
</template>

<script>
import { computed, onMounted, watch } from 'vue'
import getData from '@/services'
import DayCard from '@/components/DayPage/Card.vue'
import DayList from '@/components/DayPage/List/index.vue'
import ErrorTip from '@/components/ErrorTip/index.vue'
import { useStore } from 'vuex'
import { getNowDate } from '@/libs/utils.js'

export default {
  name: "DayPage",
  components: {
    DayCard,
    DayList,
    ErrorTip
  },
  setup() {
    const store = useStore(),
          state = store?.state?.headerStore

    onMounted( () => {
      getData(store, 'day', getNowDate('day'))
    })

    watch(() => {
      return state.dayData
    }, () => {
      store.commit('headerStore/setErrorCode', 0);
    })

    return {
      dayData: computed(() => state.dayData),
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>

<style lang="scss">

</style>