<template>
  <div>
    MonthPage
  </div>
</template>

<script>
import { onMounted } from 'vue'
// import getData from '@/services'

export default {
  name: "MonthPage",
  setup() {
    onMounted( () => {
      // getData('month', '2022-9')
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