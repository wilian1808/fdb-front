<template>
    <div class="loan">
        <button @click="viewF()">CREAR PRESTAMO</button>

        <form v-show="viewForm" @submit.prevent="SendLoan()">
            <input v-model="NumeroPrestamo" type="text" name="" id="" placeholder="" required autofocus>
            <input v-model="NumeroCuotas" type="text" name="" id="" placeholder="Numero cuotas" required>
            <input v-model="CuotasPagadas" type="text" name="" id="" placeholder="Cuotas Pagadas" required>
            <input v-model="MontoPrestamo" type="text" name="" id="" placeholder="Monto prestamo" required>
            <input v-model="DniCliente" type="text" name="" id="" placeholder="Dni cliente" required>
            
            <select v-model="TipoInteres">
                <option value="" disabled>tipo interes</option>
                <option value="prestamo">prestamo</option>
            </select>

            <input v-model="CodigoTrabajador" type="text" name="" id="" required>

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
            NumeroPrestamo: '2969-5534-8847-0000',
            NumeroCuotas: '',
            CuotasPagadas: '0',
            MontoPrestamo: '',
            DniCliente: '70458788',
            TipoInteres: '',
            CodigoTrabajador: '',
            viewForm: false
        }
    },
    methods: {
        getCodigo() {
            this.CodigoTrabajador = JSON.parse(localStorage.getItem('data')).codigo
        },
        async SendLoan() {
            let response = await Axios({
                url: 'http://localhost:4040/job/loan',
                method: 'POST',
                data: JSON.stringify({
                    numero_prestamo: this.NumeroPrestamo,
                    numero_cuotas: parseInt(this.NumeroCuotas),
                    coutas_pagadas: parseInt(this.CuotasPagadas),
                    monto_prestamo: parseFloat(this.MontoPrestamo),
                    dni_cliente: parseInt(this.DniCliente),
                    tipo_interes: this.TipoInteres,
                    codigo_trabajador: this.CodigoTrabajador
                })
            })

            if (response.status == 200) {
                console.log(response.data.message)
            }
        },
        viewF() {
            this.viewForm = (this.viewForm) ? false : true
        }
    },
    mounted() {
        this.getCodigo()
    }
}
</script>

<style lang="scss" scoped>

</style>
