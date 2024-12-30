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

watch(projectModel, () => {
    if (projectModel.value) {
        proj.value = props.projId
        console.log(proj.value)
        refreshProject()
        console.log(projectData)
    }
})
</script>

<template>
    <q-dialog v-model="projectModel">
        <q-card>
            <q-card-section>
                <p class="text-h6">О проекте</p> {{ props.projId }}
            </q-card-section>
            <q-card-section v-if="projectData">
                {{ projectData }}
            </q-card-section>
        </q-card>
    </q-dialog>
</template>