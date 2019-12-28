<template>
    <div class="login">
        <form action="" v-on:submit.prevent="getData" class="form">
            <div class="form__content">
                <input type="text" v-model="dni" placeholder="dni" required autofocus>
                <input type="password" v-model="codigo" placeholder="codigo" required>
                <input type="submit" value="iniciar sesión">
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import { log } from 'util'

export default {
    name: 'login',
    data() {
        return {
            dni: '',
            codigo: ''
        }
    },
    methods: {
        async getData() {
            let respuesta = await axios({
                url: 'http://localhost:4040/client/login',
                method: 'POST',
                data: JSON.stringify({
                    dni: parseInt(this.dni),
                    codigo: parseInt(this.codigo)
                })
            })
            if (respuesta.data.code == 200) {
                localStorage.setItem('data', JSON.stringify(respuesta.data.data[0]))
                this.$router.replace('/profile')
            }
        }
    }
}
</script>

<style lang="scss" scoped>
</style>
