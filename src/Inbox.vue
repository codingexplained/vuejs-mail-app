<template>
    <div class="inbox-body">
        <div class="mail-option">
            <div class="btn-group">
                <a href="#" class="btn" @click="refresh">
                    <i class="fa fa-refresh"></i>&nbsp; Refresh
                </a>
            </div>
        </div>

        <app-messages :messages="incomingMessages"></app-messages>
    </div>
</template>

<script>
    import { eventBus } from './main';
    import Messages from './Messages.vue';

    export default {
        props: {
            data: {
                type: Object,
                required: true
            }
        },
        methods: {
            refresh() {
                eventBus.$emit('refreshMessages');
            }
        },
        computed: {
            incomingMessages() {
                return this.data.messages.filter(function(message) {
                    return (message.type == 'incoming' && !message.isDeleted);
                });
            }
        },
        components: {
            appMessages: Messages
        }
    }
</script>