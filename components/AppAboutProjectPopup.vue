<script setup>
const projectModel = defineModel()
const props = defineProps(['projId'])
const proj = ref(null)

const { data: projectData, refresh: refreshProject, error, clear: clearProj } = await useGetItemById(
    'project',
    proj,
    {
        immediate: false,
    }
)

const userId = ref(null)

const { data: projectUser, refresh: refreshUser, clear: clearUser } = await useGetUsersById(
    userId,
    {
        immediate: false
    }
)

watch(projectModel, async () => {
    if (projectModel.value) {
        proj.value = props.projId
        await refreshProject()
        userId.value = projectData.value.author
        await refreshUser()
    }
})

const { formatData } = useFormatData()

</script>

<template>
    <q-dialog v-model="projectModel">
        <q-card>
            <template v-if="projectData && projectUser">
                <q-card-section>
                    <p class="text-h6">{{ projectData.title }}</p>
                    <q-input v-model="projectData.folder" label="Папка" readonly></q-input>
                    <q-checkbox v-model="projectData.run_once" label="Режим однократного запуска" disable />
                    <p class="text-body2 q-mt-sm">Дата начала дегустации: {{ formatData(projectData.start_date) }}</p>
                    <p class="text-body2">Дата завершения дегустации: {{ formatData(projectData.end_date) }}</p>
                    <q-chip>
                        <q-avatar icon="badge" color="red" text-color="white" />
                        {{ projectUser.first_name }}
                    </q-chip>
                </q-card-section>
            </template>
        </q-card>
    </q-dialog>
</template>