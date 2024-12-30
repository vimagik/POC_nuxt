<template>
    <q-header elevated class="my-header text-white" height-hint="98">
        <q-toolbar>
            <q-toolbar-title>
                <q-img src="/img/JDE.webp" width="150px" height="70px" />
            </q-toolbar-title>
            <AppHeaderAbout />
        </q-toolbar>

        <q-tabs align="left" inline-label>
            <q-route-tab data-testid="home" to="/" icon="home" />
            <q-icon name="arrow_forward_ios"></q-icon>
            <q-route-tab data-testid="results" to="/summary" label="Результаты" icon="assignment_turned_in" />
            <q-icon name="arrow_forward_ios"></q-icon>
            <q-route-tab data-testid="design" label="Редактирование" icon="design_services" />
        </q-tabs>
    </q-header>
</template>

<style lang="sass" scoped>
.my-header 
    background-color: #3f3a31 
.logo 
    width: 150px 
</style>