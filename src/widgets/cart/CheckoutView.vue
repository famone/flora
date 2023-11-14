<template>
    <div class="container mx-auto">
        <h2 class="col-span-4 text-3xl font-bold mb-6">Оформление заказа</h2>
        <div class="grid grid-cols-12 gap-6">
            <div class="col-span-8">
                <CheckoutForm />
            </div>
            <div class="col-span-4 pl-8">
                <CheckoutTotals />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import CheckoutTotals from '@/entities/cart/CheckoutTotals.vue'
import CheckoutForm from '@/entities/cart/CheckoutForm.vue'

</script>

<style scoped></style>