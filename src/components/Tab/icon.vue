<template>
  <router-link
    :to="path"
    class="tab-icon"
  >
    <i class="icon">{{ iconText }}</i>
    <p class="text">
      <slot>{{ tabText }}</slot>
    </p>
  </router-link>
</template>

<script>
export default {
  name: 'tabIcon',
  props: {
    iconText: String,
    path: String
  }
}
</script>

<style lang="scss" scoped>
  .tab-icon {
    display: inline-block;

    .icon {
      @include setFlex();
      width: .25rem;
      height: .25rem;
      border-radius: 50%;
      background: #ddd;
      color: #999;
      font-size: .12rem;
      transition: all .5s;
    }

    .text {
      font-size: .12rem;
      text-align: center;
      margin-top: .02rem;
      color: #999;
      transition: color .5s;
    }

    &.router-link-active {
      .icon {
        background: $mainColor;
        color: #fff;
        .text {
          color: $mainColor;
        }
      }
    }
  }

</style>