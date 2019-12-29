<template>
    <div class="account">
        <button @click="viewAcc()">CREAR CUENTA</button>

        <form @submit.prevent="createAccount()" v-show="viewAccount">
            <input v-model="numeroCuenta" type="text" name="" id="" placeholder="numero cuenta" autofocus required>
            <input v-model="montoCuenta" type="text" name="" id="" placeholder="monto cuenta" required>
            <input v-model="dniCliente" type="text" name="" id="" placeholder="dni cliente" required>
            <select v-model="tipoInteres">
                <option disabled value="">tipo cuenta</option>
                <option value="ahorro">ahorro</option>
                <option value="corriente">corriente</option>
                <option value="nomina">nomina</option>
            </select>


            <input type="submit" value="crear">
            <pre>{{ $data }}</pre>
        </form>

    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data() {
        return {
            numeroCuenta: '9774-5497-9949-0000',
            montoCuenta: '',
            dniCliente: '74544778',
            tipoInteres: '',
            codigoTrabajador: '',
            viewAccount: false
        }
    },
    methods: {
        async createAccount() {
            
            let response = await Axios({
                url: 'http://localhost:4040/job/account',
                method: 'POST',
                data: JSON.stringify({
                    numero_cuenta: this.numeroCuenta,
                    monto_cuenta: parseFloat(this.montoCuenta),
                    dni_cliente: parseInt(this.dniCliente),
                    tipo_interes: this.tipoInteres,
                    codigo_trabajador: this.codigoTrabajador
                })
            })

            if (response.data.code == 200) {
                console.log(response.data.message)
            } else {
                console.log('no se puedo crear la cuenta')
            }
        },
        codigoTra() {
            this.codigoTrabajador = JSON.parse(localStorage.getItem('data')).codigo
        },
        viewAcc() {
            this.viewAccount = (this.viewAccount) ? false : true
        }
    },
    mounted() {
        this.codigoTra()
    }
}
</script>

<style lang="scss" scoped>

</style>
