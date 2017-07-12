<template>
    <div class="container">
        <div class="mail-box">
            <app-sidebar></app-sidebar>
            <app-content></app-content>
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import Content from './Content.vue';

    export default {
        components: {
            appSidebar: Sidebar,
            appContent: Content
        }
    }
</script>