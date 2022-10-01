<template>
  <div class="container">
    <day-card :data="dayData" />
    <day-list :data="dayData" />
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import getData from '@/services'
import DayCard from '@/components/DayPage/Card.vue'
import DayList from '@/components/DayPage/List/index.vue'
import { useStore } from 'vuex'
import { getNowDate } from '@/libs/utils.js'

export default {
  name: "DayPage",
  components: {
    DayCard,
    DayList
  },
  setup() {
    const store = useStore(),
          state = store?.state?.headerStore
          console.log('state', state)

    onMounted( () => {
      getData(store, 'day', getNowDate('day'))
    })

    return {
      dayData: computed(() => state.dayData)
    }
  }
}
</script>

<style lang="scss">

</style>