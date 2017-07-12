<template>
    <table v-if="messages.length > 0" class="table table-inbox table-hover">
        <tbody>
            <tr v-for="message in messages" :class="{ unread: typeof message.isRead !== 'undefined' && !message.isRead }">
                <td><input type="checkbox"></td>
                <td>
                    <a href="#" v-if="typeof message.isImportant !== 'undefined'">
                        <i class="fa fa-star"></i>
                    </a>
                </td>
                <td>{{ message.from.name }}</td>
                <td>{{ message.subject }}</td>
                <td><i v-if="message.attachments.length > 0" class="fa fa-paperclip"></i></td>
                <td class="text-right">{{ message.date.fromNow() }}</td>
            </tr>
        </tbody>
    </table>

    <p v-else>No messages here yet.</p>
</template>

<script>
    export default {
        props: {
            messages: {
                type: Array,
                required: true
            }
        }
    }
</script>