<script setup>
const user = useDirectusUser();
const { logout } = useDirectusAuth()
const router = useRouter()

async function onLogout() {
    await logout()
    router.push('/login')
}
</script>

<template>
    <div class="row items-center">
        <div v-if="user" class="q-mr-sm">{{ user.email }}</div>
        <q-btn flat round dense icon="account_circle">
            <q-menu>
                <q-list>
                    <q-item clickable v-close-popup>
                        <q-item-section @click="onLogout">Выйти</q-item-section>
                    </q-item>
                </q-list>
            </q-menu>
        </q-btn>
    </div>
</template>