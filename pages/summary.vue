<script setup>
import AppAboutProjectPopup from '~/components/AppAboutProjectPopup.vue';

const { getItems } = useDirectusItems();
const projects = ref([])

const formatDate = useFormatData

const openAboutPopup = ref(false)
const projectId = ref(null)

function openAboutProj(projId) {
    projectId.value = projId
    openAboutPopup.value = true
}

async function fetchProjects() {
    projects.value = await getItems({ collection: "project" })
}

onMounted(async () => {
    await fetchProjects()
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
                    <q-card-section>
                        <div class="row justify-center">
                            <q-card v-for="project in projects" class="cardProject q-mx-sm">
                                <q-card-section>
                                    <div class="text-h6">{{ project.title }}</div>
                                    <div class="text-subtitle2">Порядковый номер: {{ project.number }}</div>
                                </q-card-section>
                                <q-card-section>
                                    <q-chip class="myChip" text-color="white" icon="event">
                                        {{ formatDate(project.start_date) }}
                                    </q-chip>
                                    <q-chip class="myChip" color="#a04830" text-color="white" icon="event">
                                        {{ formatDate(project.end_date) }}
                                    </q-chip>
                                </q-card-section>
                                <q-card-section>
                                    <q-btn flat @click="openAboutProj(project.id)" label="Подробнее" />
                                </q-card-section>
                            </q-card>
                        </div>
                    </q-card-section>
                </q-card>
            </div>
        </div>
        <AppAboutProjectPopup v-model="openAboutPopup" :projId="projectId" />
    </div>
</template>

<style lang="sass" scoped>
.card
    height: 77vh
.cardProject
    width: 290px
.myChip
    background-color: #8c7454
</style>
