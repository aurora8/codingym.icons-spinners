<template>
  <span v-if="name && name.includes('material')" :style="{ fontSize: _size }"
    class="material-icons">{{ name }}</span>
  <i v-else-if="name && !name.includes('material')" 
    :class="`la la-${name}`"></i>
  <i v-else :class="`la la-${name}`"></i>
</template>

<script>
import { sizes } from "./utils/size"
export default {
  props: {
    name: String,
    color: String,
    size: {
      type: [Number, String],
      default: "1em"
    },
    type: {
      type: String,
      required: true,
      default: "material",
      validator: v => ["material", "la"].includes(v)
    }
  },
  computed: {
    _size() {
      return this.size in sizes ? `${sizes[this.size]}px` : this.size;
    }
  }
};
</script>

<style lang="stylus">

</style>