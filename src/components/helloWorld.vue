<script setup>
defineOptions({
  name: 'helloWorld',
})
const props = defineProps({
  text: {
    type: String,
    default: 'hello',
  },
})
console.log('props', props)
const emits = defineEmits(['say'])
emits('say', 'hello')
</script>

<template>
  <div>hellow world</div>
</template>

<style scoped lang="less"></style>
