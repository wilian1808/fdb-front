<template>
    <div class="account">
        <Logout/>
        <hr>
        <Loan/>
        <hr>
        <Account/>
        <hr>
        <Transaction/>
    </div>
</template>

<script>
import Transaction from '@/components/Transaction'
import Account from '@/components/Account'
import Logout from '@/components/Logout'
import Loan from '@/components/Loan'

export default {
    name: 'account',
    components: {
        Logout,
        Loan,
        Account,
        Transaction
    }
}
</script>

<style lang="scss" scoped>

</style>
