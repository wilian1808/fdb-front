<template>
    <div class="account">
        <button v-on:click="viewData()">ver cuentas creadas</button>
        <br><br>
        <table border="solid 1px black" v-if="viewAccount">
            <thead>
                <tr>
                    <th>numero de cuenta</th>
                    <th>monto cuenta</th>
                    <th>tipo cuenta</th>
                    <th>interes aplicado</th>
                    <th>crecimiento anual</th>
                    <th>monto final</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="account in dataAccount" :key="account.id">
                    <td>{{ account.numero }}</td>
                    <td>{{ account.monto.toFixed(2) }}</td>
                    <td>{{ account.tipo }}</td>
                    <td>{{ account.interes.toFixed(2) }} %</td>
                    <td>{{ account.crecimiento.toFixed(2) }}</td>
                    <td>{{ account.final.toFixed(2) }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Account',
    data() {
        return {
            viewAccount: false,
            dataAccount: []
        }
    },
    methods: {
        async getData() {
            let data = JSON.parse(localStorage.getItem('data'))

            console.log(data)

            let response = await axios({
                url: `http://localhost:4040/client/account/${data.dni}`,
                method: 'GET'
            })

            if (response.data.code == 200) {
                for (let i = 0; i < (response.data.accounts).length; i++) {
                    this.dataAccount.push(response.data.accounts[i])
                }
            }
        },
        viewData() {
            this.viewAccount = (!this.viewAccount) ? true : false
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style lang="scss" scoped>

</style>
