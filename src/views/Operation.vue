<template>
    <div class="operation">
        <h1>espacio para realizar operaciones de trabajador</h1>
        <Logout/>
        <br>
        <h2>Operacion a realizar</h2>
        <br>

        <hr>
        <CreateAccount/>
        <hr>
        <CreateLoan/>
        <hr>





    </div>
</template>

<script>
import Logout from '@/components/Logout'
import CreateAccount from '@/components/CreateAccount'
import CreateLoan from '@/components/CreateLoan'

export default {
    components: {
        Logout,
        CreateAccount,
        CreateLoan
    }    
}
</script>

<style lang="scss" scoped>

</style>
