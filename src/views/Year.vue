<template>
  <div class="container">
    <error-tip />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import getData from '@/services'
import { useStore } from 'vuex'
import ErrorTip from '@/components/ErrorTip/index.vue'
import { getNowDate } from '@/libs/utils.js'

export default {
  name: "YearPage",
  components: {
    ErrorTip
  },
  setup() {
    const store = useStore(),
          state = store?.state?.headerStore

    onMounted( () => {
      getData(store, 'year', getNowDate('year'))
    })
    
    return {
      dayData: computed(() => state.yearData),
      errorCode: computed(() => state.errorCode)
    }
  }
}
</script>

<style lang="scss">

</style>