<template>
    <h1>Custom Hooks</h1>
    <h2>鼠标当前位置：X:{{nowPosition.x}},Y:{{nowPosition.y}}</h2>
</template>

<script>
import usePosition from '../hooks/usePosition'

export default {
    name: 'CustomHooks',
    setup() {
        let nowPosition = usePosition();

        return { nowPosition };
    }
}
</script>

<style scoped>

</style>