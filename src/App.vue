<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <ui-spinner color="red" />
    <ui-spinner color="steelblue" size="sm" />
    <ui-spinner color="crimson" size="md" />
    <ui-spinner color="crimson" size="lg" />
    <ui-spinner color="crimson" size="xl" />

    <ui-rings-spinner size="70" />

    <ui-tail-spinner></ui-tail-spinner>

    <ui-oval-spinner />

    <ui-icon name="close" size="28" type="material"></ui-icon>

    <i class="material-icons">face</i>
  </div>
</template>

<script>
import Spinner from './components/spinner.vue'
import RingsSpinner from './components/rings-spinner'
import TailSpinner from './components/tail-spinner'
import OvalSpinner from './components/oval-spinner'
import Icon from './components/icon'

export default {
  name: 'App',
  components: {
    'ui-spinner': Spinner,
    'ui-rings-spinner': RingsSpinner,
    'ui-tail-spinner': TailSpinner,
    'ui-oval-spinner': OvalSpinner,
    'ui-icon': Icon
  }
}
</script>

<style lang="stylus">
@import url("../node_modules/line-awesome/dist/line-awesome/css/line-awesome.css")
@import "../node_modules/material-icons/iconfont/material-icons.css"

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.ui-spinner
  vertical-align: middle

.ui-spinner-mat
  animation: ui-spin 2s linear infinite
  transform-origin: center center
  .path
    stroke-dasharray: 1, 200
    stroke-dashoffset: 0
    animation: ui-mat-dash 1.5s ease-in-out infinite

@keyframes ui-spin
  0%
    transform: rotate3d(0, 0, 1, 0deg)
  25%
    transform: rotate3d(0, 0, 1, 90deg)
  50%
    transform: rotate3d(0, 0, 1, 180deg)
  75%
    transform: rotate3d(0, 0, 1, 270deg)
  100%
    transform: rotate3d(0, 0, 1, 359deg)

@keyframes ui-mat-dash
  0%
    stroke-dasharray: 1, 200
    stroke-dashoffset: 0
  50%
    stroke-dasharray: 89, 200
    stroke-dashoffset: -35px
  100%
    stroke-dasharray: 89, 200
    stroke-dashoffset: -124px
</style>
