/**
 * Created by qilongli on 2018/5/27.
 */
import Vue from 'vue'

const component = {
  props: ['value'],
  template: `
    <div>
      <input type="text" @input="handleInput" :value="value"/>
    </div>
  `,
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
  }
}

new Vue({
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  template: `
    <div>
      <comp-one v-model="value"></comp-one>
    </div>
  `,
  components: {
    CompOne: component
  }
})
