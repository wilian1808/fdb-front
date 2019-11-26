<template>
    <div class="logout">
        <button v-on:click="logoutClient()">logout</button>
    </div>
</template>

<script>
export default {
    name: 'Logout',
    methods: {
        logoutClient() {
            localStorage.clear()
            this.$router.replace('/')
        }
    }
}
</script>
