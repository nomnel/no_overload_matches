import Vue, { PropOptions } from 'vue'
export default Vue.extend({
  props: {
    text: { required: true, type: String } as PropOptions<string>,
  },
  render() {
    return <div>{this.text}</div>
  },
})
