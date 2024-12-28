<script setup>
const addUser = defineModel()

const addUserData = ref({
    name: '',
    action: '',
    progress: 0,
    step: ''
})
</script>

<template>
    <q-dialog v-model="addUser" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Новый пользователь</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-form>
                    <q-input autofocus v-model="addUserData.name" @keyup.enter="addUser = false" label="Имя"
                        :rules="[val => val && val.length > 0 || 'Обязательное поле']" lazy-rules />
                    <q-input v-model="addUserData.action" @keyup.enter="addUser = false" label="Последняя активность"
                        :rules="[val => val && val.length > 0 || 'Обязательное поле']" lazy-rules />
                    <q-input v-model="addUserData.progress" type="number" @keyup.enter="addUser = false"
                        label="Прогресс" :rules="[
                            val => val && val >= 0 || 'Обязательное поле',
                            val => val <= 100 || 'Значение не может быть больше 100'
                        ]" lazy-rules />
                    <q-input v-model="addUserData.step" @keyup.enter="addUser = false" label="Этап"
                        :rules="[val => val && val.length > 0 || 'Обязательное поле']" lazy-rules />
                </q-form>

            </q-card-section>

            <q-card-actions align="right" class="text-primary">
                <q-btn flat label="Отмена" v-close-popup />
                <q-btn flat label="Создать пользователя" v-close-popup />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>