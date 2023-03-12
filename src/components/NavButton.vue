<template >
    <div v-if="isLoading" class="h-[80px] rounded-md">
        <ion-skeleton-text :animated="true"></ion-skeleton-text>
    </div>
    <button v-else class="navigation">{{ title }}</button>
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
import { IonSkeletonText } from '@ionic/vue';

export default defineComponent({
    name: 'NavButton',
    components: {
        IonSkeletonText
    },
    props: {
        title: String,
        isLoading: {
            type: Boolean,
            default: false
        }
    },
    setup() {

        return {
        }

    },
});
</script>