<template>
    <div class="login">
         <form @submit.prevent="LoginJob()" action="" class="form">
            <div class="form__content">
                <input type="email" v-model="email" placeholder="Email" required autofocus>
                <input type="password" v-model="codigo" placeholder="codigo" required>
                <input type="submit" value="iniciar sesión">
            </div>
        </form>
    </div>
</template>

<script>
import Axios from 'axios'

export default {
    name: 'LoginJob',
    data() {
        return {
            email: 'unai@gmail.com',
            codigo: 'KzLPbB24Ig'
        }
    },
    methods: {
        async LoginJob() {
            
            let response = await Axios({
                url: 'http://localhost:4040/job/login',
                method: 'POST',
                data: JSON.stringify({
                    correo: this.email,
                    codigo: this.codigo
                })
            })

            if (response.data.code == 200) {
                localStorage.setItem('data', JSON.stringify(response.data.worker))
                this.$router.replace('/operation')
            }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
