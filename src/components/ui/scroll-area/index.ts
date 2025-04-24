
import { defineComponent, h } from 'vue'
import { cn } from '@/lib/utils'

export const ScrollArea = defineComponent({
  name: 'ScrollArea',
  props: {
    class: String
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: cn('relative overflow-auto', props.class)
    }, slots.default?.())
  }
})
