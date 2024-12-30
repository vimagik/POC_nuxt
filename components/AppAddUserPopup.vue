<script setup>
const addUser = defineModel()

const addUserData = ref({
    name: '',
    action: '',
    progress: 0,
    step: ''
})

const emit = defineEmits(['updateTable',])

const createUserStatus = ref(false)

async function onSubmit() {
    createUserStatus.value = true
    const { error } = await useAddItems("users_profile", addUserData)
    if (!error.value) {
        addUserData.value = {
            name: '',
            action: '',
            progress: 0,
            step: ''
        }
        addUser.value = false
        emit('updateTable')
    }
    createUserStatus.value = false
}

const rules = {
    required: val => val && val.length > 0 || 'Обязательное поле',
    ltn100: val => val <= 100 || 'Значение не может быть больше 100',
    gtn0: val => val && val >= 0 || 'Значение должо быть положительным',
}
</script>

<template>
    <q-dialog v-model="addUser" persistent>
        <q-card style="min-width: 350px">
            <q-card-section>
                <div class="text-h6">Новый пользователь</div>
            </q-card-section>
            <q-form @submit="onSubmit">
                <q-card-section class="q-pt-none">
                    <q-input autofocus v-model="addUserData.name" @keyup.enter="addUser = false" label="Имя"
                        :rules="[rules.required]" lazy-rules />
                    <q-input v-model="addUserData.action" @keyup.enter="addUser = false" label="Последняя активность"
                        :rules="[rules.required]" lazy-rules />
                    <q-input v-model="addUserData.progress" type="number" @keyup.enter="addUser = false"
                        label="Прогресс" :rules="[rules.gtn0, rules.ltn100]" lazy-rules />
                    <q-input v-model="addUserData.step" @keyup.enter="addUser = false" label="Этап"
                        :rules="[rules.required]" lazy-rules />
                </q-card-section>

                <q-card-actions align="right" class="text-primary">
                    <q-btn flat label="Отмена" v-close-popup />
                    <q-btn flat type="submit" label="Создать пользователя" :loading="createUserStatus" />
                </q-card-actions>
            </q-form>
        </q-card>
    </q-dialog>
</template>