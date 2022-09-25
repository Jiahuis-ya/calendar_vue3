<template>
  <div>
    YearPage
  </div>
</template>

<script>
import { onMounted } from 'vue'
// import getData from '@/services'

export default {
  name: "YearPage",
  setup() {
    onMounted( () => {
      // getData('year', '2022')
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