<template>
    <div class="w-10/12 mx-auto mt-4">
        <div class="flex justify-between">
            <button class="btn bg-red-400 text-white active:bg-red-600" @click="toggleSpendingForm">Spending</button>
            <button class="btn bg-blue-500 text-white active:bg-blue-700" @click="toggleDepositForm">Deposit</button>
        </div>

        <form action="post" class="flex flex-col gap-4 mt-8" v-if="showDepositForm">
            <h3 class="text-xl">Deposit</h3>

            <label for="title" class="font-md font-bold">Title</label>
            <input name="title" type="text" class="border-2 p-4" id="title">

            <label for="detail" class="font-md font-bold">Detail</label>
            <textarea name="detail" id="detail" cols="30" rows="10" class="border-2 p-4"></textarea>
            
            <label for="amount" class="font-md font-bold">Amount</label>
            <input name="amount" type="number" class="border-2 p-4" id="amount">
            
            <button class="btn bg-blue-500 text-white">Submit</button>
        </form>


        <form action="post" class="flex flex-col gap-4 mt-8" v-if="showSpendingForm">
            <h3 class="text-xl">Spending</h3>

            <label for="title" class="font-md font-bold">Title</label>
            <input name="title" type="text" class="border-2 p-4" id="title">

            <label for="detail" class="font-md font-bold">Detail</label>
            <textarea name="detail" id="detail" cols="30" rows="10" class="border-2 p-4"></textarea>
            
            <label for="amount" class="font-md font-bold">Amount</label>
            <input name="amount" type="number" class="border-2 p-4" id="amount">
            
            <button class="btn bg-blue-500 text-white">Submit</button>
        </form>

        <div class="mt-10 w-full">
            <Spending :spendings="spendings" class="flex flex-col gap-4" />
        </div>

    </div>
</template>

<script>
export default {
    data(){
        return {
            showDepositForm: false,
            showSpendingForm: false,
            spending: {
                title: '',
                detail: '',
                amount: 0
            },
            spendings: [
                {
                    title: "Alfamart",
                    detail: "membeli makanan dan jajanan serta kopi",
                    amount: 30000
                },
                {
                    title: "Indomaret",
                    detail: "membeli makanan dan jajanan serta kopi",
                    amount: 50000
                },
                {
                    title: "Membeli Celana Jeans",
                    detail: "Celana jeans baru promo dari transmart",
                    amount: 170000
                }
            ]
        }
    },

    methods: {
        toggleDepositForm(){
            this.showDepositForm = !this.showDepositForm
        },
        toggleSpendingForm(){
            this.showSpendingForm = !this.showSpendingForm
        },
    }

}
</script>

<style>

</style>