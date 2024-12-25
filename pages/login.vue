<script setup>
const { login } = useDirectusAuth();
const router = useRouter();

definePageMeta({
    layout: false,
})

const email = ref('')
const password = ref('')

async function onSubmit() {
    try {
        await login({ email: email.value, password: password.value });
        router.push('/')
    } catch (e) { }
}
</script>

<template>
    <div class="main row justify-center items-center">
        <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg">

            <q-card-section>
                <div class="text-h6 text-center">Авторизация</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-form @submit="onSubmit">
                    <q-input v-model="email" label="Логин" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Обязательное поле']">
                    </q-input>
                    <q-input v-model="password" label="Пароль" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Обязательное поле']"></q-input>
                    <q-btn label="Войти" type="submit" color="primary" />
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<style lang="sass" scoped>
.main
    height: 100vh

.my-card
    width: 100%
    max-width: 350px
</style>