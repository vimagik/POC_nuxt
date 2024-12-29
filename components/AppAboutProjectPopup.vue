<script setup>
const projectModel = defineModel()
const props = defineProps(['projId'])

const { getItemById } = useDirectusItems();
const { getUserById } = useDirectusUsers();
const projectData = ref({})
const projectUser = ref({})

async function fetchProjectData() {
    projectData.value = await getItemById({
        collection: 'project',
        id: props.projId
    })
    projectUser.value = await getUserById({
        id: projectData.value.author
    })
}

watch(projectModel, async () => {
    if (projectModel.value) {
        await fetchProjectData()
    } else {
        projectData.value = {}
        projectUser.value = {}
    }
})
</script>

<template>
    <q-dialog v-model="projectModel">
        <q-card>
            <q-card-section>
                <p class="text-h6">О проекте</p>
            </q-card-section>
            <q-card-section>
                {{ projectData }} {{ projectUser }}
            </q-card-section>
        </q-card>
    </q-dialog>
</template>