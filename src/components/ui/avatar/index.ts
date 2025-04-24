
import { defineComponent, h, PropType } from 'vue'
import { cn } from '@/lib/utils'

export const Avatar = defineComponent({
  name: 'Avatar',
  props: {
    class: String
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: cn(
        'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
        props.class
      )
    }, slots.default?.())
  }
})

export const AvatarImage = defineComponent({
  name: 'AvatarImage',
  props: {
    src: String,
    alt: {
      type: String,
      default: ''
    }
  },
  setup(props) {
    return () => h('img', {
      src: props.src,
      alt: props.alt,
      class: 'aspect-square h-full w-full'
    })
  }
})

export const AvatarFallback = defineComponent({
  name: 'AvatarFallback',
  props: {
    class: String
  },
  setup(props, { slots }) {
    return () => h('div', {
      class: cn(
        'flex h-full w-full items-center justify-center rounded-full bg-muted',
        props.class
      )
    }, slots.default?.())
  }
})
