<template>
  <div :style="{ backgroundColor: color }">Background Color</div>
</template>

<script>
export default {
  name: 'ColorDiv',
  props: {
    color: String // Assuming color is a string prop representing a valid CSS color value
  },
  setup() {
    return {}
  }
}
</script>
