<template>
  <div class="error-tip" v-if="errorCode">
    <img :src="require('../../assets/img/error.jpg')" />
    <p>
      {{ errorData[errorCode] }}
    </p>
  </div>
</template>

<script>
import errorData from '@/data/error';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  name: 'ErrorTip',
  setup() {
    const store = useStore();

    return {
      errorCode: computed(() => store.state.headerStore.errorCode),
      errorData
    }
  }
}
</script>

<style scoped lang="scss">
.error-tip {
  @include setFlex();
  flex-direction: column;
  height: 80vh;

  img {
    width: .5rem;
  }

  p {
    margin-top: .15rem;
    font-size: .14rem;
    color: #999;
  }
}
</style>
