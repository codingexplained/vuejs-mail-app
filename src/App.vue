<template>
    <div class="container">
        <div class="mail-box">
            <app-sidebar :messages="messages"></app-sidebar>
            <app-content :messages="messages"></app-content>
        </div>
    </div>
</template>

<script>
    import Sidebar from './Sidebar.vue';
    import Content from './Content.vue';
    import messages from './data/messages';
    import randomMessages from './data/random-messages';
    import { eventBus } from './main';

    export default {
        data() {
            return {
                messages: messages
            };
        },
        created() {
            eventBus.$on('refreshMessages', () => {
                let randomIndex = Math.floor(Math.random() * randomMessages.length);
                let temp = [randomMessages[randomIndex]];
                this.messages = temp.concat(this.messages.slice(0));
            });

            eventBus.$on('sentMessage', (data) => {
                let temp = [data.message];
                this.messages = temp.concat(this.messages.slice(0));
            });
        },
        components: {
            appSidebar: Sidebar,
            appContent: Content
        }
    }
</script>