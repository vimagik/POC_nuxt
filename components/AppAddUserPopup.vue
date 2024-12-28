<script setup>
const addUser = defineModel()
</script>

<template>
    <q-dialog v-model="addUser" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Your address</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-input dense autofocus @keyup.enter="addUser = false" />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Cancel" v-close-popup />
                <q-btn flat label="Add address" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>