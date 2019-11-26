<template>
    <div class="transaction">
        <button v-on:click="viewTransaction()">mostrar transacciones</button>

        <table border="solid 1px black" v-if="viewTransac">
            <thead>
                <tr>
                    <th>monto inicial</th>
                    <th>interes aplicado</th>
                    <th>monto final</th>
                    <th>accion realizada</th>
                    <th>numero destino</th>
                    <th>tipo cuenta</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="transaction in dataTransaction" :key="transaction.id">
                    <td>{{ transaction.monto.toFixed(2) }}</td>
                    <td>{{ transaction.interes.toFixed(2) }}</td>
                    <td>{{ transaction.final.toFixed(2) }}</td>
                    <td>{{ transaction.accion }}</td>
                    <td>{{ transaction.numero }}</td>
                    <td>{{ transaction.tipo }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Transaction',
    data() {
        return {
            dataTransaction: [],
            viewTransac: false
        }
    },
    methods: {
        async getTransaction() {
            let data = JSON.parse(localStorage.getItem('data'))
            
            let response = await axios({
                url: `http://localhost:4040/transaction/${data.dni}`,
                method: 'GET'
            })

            if (response.data.code == 200) {
                for (let i = 0; i < (response.data.transactions).length; i++) {
                    this.dataTransaction.push(response.data.transactions[i])
                }
            }
        },
        viewTransaction() {
            this.viewTransac = (this.viewTransac) ? false : true;
        }
    },
    mounted() {
        this.getTransaction()
    }
}
</script>

<style lang="scss" scoped>
</style>
