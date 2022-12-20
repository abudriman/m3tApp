<template >
    <button class="navigation">{{ title }}</button>
</template>
<style scoped>
.navigation {
    color: #000000;
    padding: 30px 10px;
    margin: 10px 15px;
    background-color: #CFE7F5;
    border-radius: 10px;
}
</style>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavButton',
    props: {
        title: String
    },
    setup() {

        return {
        }

    },
});
</script>