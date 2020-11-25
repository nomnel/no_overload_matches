<script lang="tsx">
import Vue from 'vue'
import Inner from '~/components/Inner.tsx'

export default Vue.extend({
  render() {
    return (
      <div>
        <Inner text="hoge"></Inner>
      </div>
    )
    // 上の text 部分で以下のエラーが出るのなぜ
    //  ERROR  ERROR in components/Wrapper.vue:9:16                                                                                                                                                                                  15:02:52
    // TS2769: No overload matches this call.
    //   Overload 1 of 3, '(options?: ThisTypedComponentOptionsWithArrayProps<{ text: string; } & Vue, object, object, object, never> | undefined): CombinedVueInstance<...>', gave the following error.
    //     Type '{ text: string; }' is not assignable to type 'ThisTypedComponentOptionsWithArrayProps<{ text: string; } & Vue, object, object, object, never>'.
    //       Property 'text' does not exist on type 'ThisTypedComponentOptionsWithArrayProps<{ text: string; } & Vue, object, object, object, never>'.
    //   Overload 2 of 3, '(options?: ThisTypedComponentOptionsWithRecordProps<{ text: string; } & Vue, object, object, object, object> | undefined): CombinedVueInstance<...>', gave the following error.
    //     Type '{ text: string; }' is not assignable to type 'ThisTypedComponentOptionsWithRecordProps<{ text: string; } & Vue, object, object, object, object>'.
    //       Property 'text' does not exist on type 'ThisTypedComponentOptionsWithRecordProps<{ text: string; } & Vue, object, object, object, object>'.
    //   Overload 3 of 3, '(options?: ComponentOptions<{ text: string; } & Vue, DefaultData<{ text: string; } & Vue>, DefaultMethods<{ text: string; } & Vue>, DefaultComputed, PropsDefinition<...>, Record<...>> | undefined): CombinedVueInstance<...>', gave the following error.
    //     Type '{ text: string; }' is not assignable to type 'ComponentOptions<{ text: string; } & Vue, DefaultData<{ text: string; } & Vue>, DefaultMethods<{ text: string; } & Vue>, DefaultComputed, PropsDefinition<...>, Record<...>>'.
    //       Property 'text' does not exist on type 'ComponentOptions<{ text: string; } & Vue, DefaultData<{ text: string; } & Vue>, DefaultMethods<{ text: string; } & Vue>, DefaultComputed, PropsDefinition<...>, Record<...>>'.
  },
})
</script>
