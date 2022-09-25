<template>
  <div>
    DayPage
  </div>
</template>

<script>
import { onMounted } from 'vue'
// import getData from '@/services'

export default {
  name: "DayPage",
  setup() {
    onMounted( () => {
      // getData('day', '2022-9-25')
      //   .then(res => {
      //     console.log('success', res)
      //   })
      //   .catch(err => {
      //     console.log('error', err)
      //   })
    })

    return {

    }
  }
}
</script>

<style lang="scss">

</style>