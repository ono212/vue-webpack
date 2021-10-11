<template>
  <button @click="log">
    Click Me!
  </button>
</template>

<script>
export default {
    methods: {
        log() {
            console.log('Click!')
        }
    }
}
</script>