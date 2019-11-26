<template>
    <div class="loan">
        <h1>loan</h1>
        <hr>
        <button v-on:click="viewData()">ver prestamos realizados</button>
        <br>
        <br>
        <table border="solid 1px black" v-if="viewValue">
            <thead>
                <tr>
                    <th>Numero del prestamo</th>
                    <th>monto del prestamo</th>
                    <th>interes aplicado</th>
                    <th>monto final</th>
                    <th>numero de cuotas</th>
                    <th>cuotas pagadas</th>
                </tr>
            </thead>
            <tbody v-for="loan in loans" :key="loan.id">
                <tr>
                    <td>{{ loan.numero }}</td>
                    <td>{{ loan.monto.toFixed(2) }}</td>
                    <td>{{ loan.interes.toFixed(2) }} %</td>
                    <td>{{ loan.final.toFixed(2) }}</td>
                    <td>{{ loan.cuotas }}</td>
                    <td>{{ loan.pagadas }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'loan',
    data() {
        return {
            loans: [],
            viewValue: false
        }
    },
    methods: {
        async getLoan() {
            let data = JSON.parse(localStorage.getItem('data'))

            let response = await axios({
                url: `http://localhost:4040/loan/${data.dni}`,
                method: 'GET'
            })
            if (response.data.code == 200) {
                for (let i = 0; i < (response.data.loans).length; i++) {
                    this.loans.push(response.data.loans[i])
                }
            }
        },
        viewData() {
            this.viewValue = (!this.viewValue) ? true : false
        }
    },
    mounted() {
        this.getLoan()
    }
}
</script>

<style lang="scss" scoped>

</style>
