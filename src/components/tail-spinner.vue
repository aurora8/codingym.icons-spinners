<template>
  <svg
    :class="['ui-spinner', color]"
    :width="_size"
    :height="_size"
    viewBox="0 0 40 40"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
        <stop :stop-color="color" stop-opacity="0" offset="0%" />
        <stop :stop-color="color" stop-opacity=".631" offset="63.146%" />
        <stop :stop-color="color" offset="100%" />
      </linearGradient>
    </defs>

    <g transform="translate(2 2)" fill="none" fill-rule="evenodd">
      <path
        d="M36 18c0-9.94-8.06-18-18-18"
        stroke="url(#a)"
        :stroke-width="3"
        transform="rotate(87.8184 18 18)"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
</template>

<script>
import { sizes } from "./utils/size";

/**
 * circular gradient tail spinner
 */
export default {
  props: {
    color: {
      type: String,
      default: "black"
    },
    size: {
      type: String,
      default: "2em"
    },
  },
  computed: {
    _size() {
      return this.size in sizes ? `${sizes[this.size]}px` : this.size;
    }
  }
};
</script>

<style>
</style>