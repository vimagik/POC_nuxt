<script setup>
const { login } = useDirectusAuth();
const router = useRouter();

definePageMeta({
    layout: false,
})

const email = ref('')
const password = ref('')
const loadingStatus = ref(false)
const errorLogin = ref(false)

async function onSubmit() {
    errorLogin.value = false
    loadingStatus.value = true
    try {
        await login({ email: email.value, password: password.value });
        router.push('/')
    } catch (e) {
        errorLogin.value = true
    }
    loadingStatus.value = false
}
</script>

<template>
    <div class="main row justify-center items-center">
        <q-card class="my-card">
            <q-img src="https://cdn.quasar.dev/img/mountains.jpg">
                <div class="absolute-bottom row justify-center">
                    <img src="/public/img/JDE.webp">
                </div>
            </q-img>

            <q-card-section>
                <div class="text-h6 text-center">Авторизация</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                <q-form @submit="onSubmit">
                    <q-input v-model="email" @change="errorLogin = false" label="Логин" lazy-rules
                        error-message="Ошибка при вводе логина или пароля" :error="errorLogin"
                        :rules="[val => val && val.length > 0 || 'Обязательное поле']">
                    </q-input>
                    <q-input v-model="password" type="password" label="Пароль" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Обязательное поле']"></q-input>
                    <q-btn class="q-mt-sm" label="Войти" type="submit" color="primary" :loading="loadingStatus" />
                </q-form>
            </q-card-section>
        </q-card>
    </div>
</template>

<style lang="sass" scoped>
.main
    height: 100vh
    background-color: #f7eedc 

.my-card
    width: 100%
    max-width: 350px
</style>