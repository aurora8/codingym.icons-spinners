import Vue from "vue";
import { sizes } from "./utils/size"

export default Vue.extend({
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
    _size() {
      return this.size in sizes ? `${sizes[this.size]}px` : this.size;
    },
    clasess() {
      return this.color ? `${this.color}` : ''
    }
  },
  render (h) {
    return h('svg', {
      staticClass: 'ui-spinner ui-spinner-mat',
      class: this.clasess,
      on: this.$listeners,
      attrs: {
        focusable: 'false', /** IE11 fix**/
        width: this._size,
        height: this._size,
        viewBox: '25 25 50 50'
      }
    }, [
      h('circle', {
        staticClass: 'path',
        attrs: {
          cx: '50',
          cy: '50',
          r: '20',
          fill: 'none',
          stroke: 'currentColor',
          'stroke-width': this.thickness,
          'stroke-miterlimit': '10'
        }
      })
    ])
  }
});
