<template>
  <div class="search-wrap">
    <input
      type="text"
      :placeholder="placeholder"
      :maxLength="maxLength"
      :value="inputValue"
      @input="searchData($event)"
    />
  </div>
</template>

<script>
import { ref, computed, watch } from "vue";
import { useStore } from 'vuex';
import { formatUserDate, getNowDate } from '@/libs/utils'
import getData from '@/services'

export default {
  name: "searchInput",
  props: {
    placeholder: String,
    maxLength: Number,
    value: String
  }, 
  setup(props) {
    const inputValue = ref(''),
          store = useStore(),
          state = store.state.headerStore;

    const searchData = (e) => {
      inputValue.value = e.target.value;

      const field = computed(() => state.field).value;
      if(inputValue.value.length === props.maxLength) {
        getData(store, field, formatUserDate(inputValue.value));
      } else if(inputValue.value.length === 0) {
        getData(store, field, getNowDate(field));
      }

    }

    watch(() => {
      return state.field
    }, () => {
      inputValue.value = ''
    })

    return {
      inputValue,
      searchData
    }
  }
  
}
</script>

<style lang="scss" scoped>
.search-wrap {
  position: fixed;
  top: .44rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: .38rem;
  padding: .03rem .1rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background: #fff;

  input {
    width: 100%;
    height: 100%;
    font-size: .14rem;
    border: 1px solid #ddd;
    text-indent: .1rem;
    border-radius: .03rem;

    &:focus {
      border-color: $mainColor;
      transition: all .3s;
    }
  }
}
</style>