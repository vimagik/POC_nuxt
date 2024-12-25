<template>
    <q-layout class="main">
        <q-header elevated class="my-header text-white" height-hint="98">
            <q-toolbar>
                <q-toolbar-title>
                    <img class="logo" src="/public/img/JDE.webp">
                </q-toolbar-title>
                <AppHeaderAbout />
            </q-toolbar>

            <q-tabs align="left" inline-label>
                <q-route-tab to="/" icon="home" />
                <q-icon name="arrow_forward_ios"></q-icon>
                <q-route-tab to="/summary" label="Результаты" icon="assignment_turned_in" />
                <q-icon name="arrow_forward_ios"></q-icon>
                <q-route-tab to="/design" label="Редактирование" icon="design_services" />
            </q-tabs>
        </q-header>
        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>

<style lang="sass" scoped>
.my-header 
    background-color: #3f3a31 
.logo 
    width: 150px 
.main 
    background-color: #f7eedc
</style>
