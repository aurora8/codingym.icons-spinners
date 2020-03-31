<template>
  <svg :focusable="false" viewBox="25 25 50 50" 
  :class="['ui-spinner', 'ui-spinner-mat', clasess ]"
  :width="cSize" :height="cSize">
    <circle class="path" cx="50" cy="50" r="20" fill="none" 
    :stroke="color" 
    :stroke-width="thickness" stroke-miterlimit="10" />
  </svg>
</template>

<script>
import { sizes } from "./utils/size"

export default {
  name: 'ui-spinner',
  props: {
    color: String,
    size: {
      type: [Number, String],
      default: "1em"
    },
    thickness: {
      type: Number,
      default: 5
    },
  },
  computed: {
    cSize() {
      return this.size in sizes ? `${sizes[this.size]}px` : this.size;
    },
    clasess() {
      return this.color ? this.color : ''
    },
    sizeStyle () {
        if (this.size !== void 0) {
            return { fontSize: this.size in sizes ? `${sizes[this.size]}px` : this.size }
        }

        return ''
    }
  },
}
</script>

<style lang="stylus">
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