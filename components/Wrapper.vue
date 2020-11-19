<script lang="tsx">
import Vue from 'vue'
import Inner from '~/components/Inner.vue'

export default Vue.extend({
  render() {
    return (
      <div>
        <Inner text="hoge"></Inner>
      </div>
    )
  },
})
</script>
