<template>
  <svg
    focusable="false"
    :class="['ui-spinner', color ]"
    :stroke="color"
    :width="_size"
    :height="_size"
    viewBox="0 0 45 45"
    xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fill-rule="evenodd" transform="translate(1,1)" stroke-width="2">
        <circle cx="22" cy="22" r="6">
            <animate attributeName="r" begin="1.5s" dur="3s" values="6;22" calcMode="linear"
                repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" begin="1.5s" dur="3s" values="1;0" calcMode="linear"
                repeatCount="indefinite" />
            <animate attributeName="stroke-width" begin="1.5s" dur="3s" values="2;0" calcMode="linear"
                repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="6">
            <animate attributeName="r" begin="3s" dur="3s" values="6;22" calcMode="linear"
                repeatCount="indefinite" />
            <animate attributeName="stroke-opacity" begin="3s" dur="3s" values="1;0" calcMode="linear"
                repeatCount="indefinite" />
            <animate attributeName="stroke-width" begin="3s" dur="3s" values="2;0" calcMode="linear"
                repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="22" r="8">
            <animate attributeName="r" begin="0s" dur="1.5s" values="6;1;2;3;4;5;6" calcMode="linear"
                repeatCount="indefinite" />
        </circle>
    </g>
  </svg>
</template>

<script>
import { sizes } from "./utils/size"

export default {
  name: "ui-rings-spinner",
  props: {
    color: {
        type: String,
        default: 'lightblue'
    },
    size: {
      type: [Number, String],
      default: "2em"
    }
  },
  computed: {
    _size() {
      return this.size in sizes ? `${sizes[this.size]}px` : this.size;
    },
  }
};
</script>

<style>
</style>