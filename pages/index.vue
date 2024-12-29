<script setup>
const columns = [
    { name: 'name', label: 'Логин', align: 'left', field: 'name', sortable: true },
    { name: 'action', align: 'center', label: 'Последняя активность', field: 'action', sortable: true },
    { name: 'progress', label: '% выполнения', field: 'progress', sortable: true },
    { name: 'step', label: 'Этап', field: 'step' },
]

const { data: rows, refresh } = await useGetItems('users_profile', { immediate: false })

const addUser = ref(false)

onMounted(async () => {
    await refresh()
})
</script>

<template>
    <div>
        <div class="row q-mt-md">
            <div class="col-3 col-lg-2">
                <q-card class="card q-mx-sm">
                    <q-card-section>
                        <q-btn class="full-width" flat icon="insights" label="Обзор дегустаций" />
                    </q-card-section>
                </q-card>
            </div>
            <div class="col">
                <q-card class="card q-mx-sm">
                    <q-card-section v-if="rows">
                        <div class="row items-center">
                            <q-icon name="recent_actors" size="3em" />
                            <div class="q-ml-sm text-h6" text-body2>Текущие сессии</div>
                        </div>
                        <q-table class="q-mt-sm" flat :rows="rows" :columns="columns" row-key="name" />
                        <q-btn color="primary" label="Добавить пользователя" @click="addUser = true" />
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <AppAddUserPopup v-model="addUser" @updateTable="refresh" />
    </div>
</template>

<style lang="sass" scoped>
.card
    height: 77vh
</style>
