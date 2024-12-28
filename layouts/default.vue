<template>
    <q-layout class="main">
        <AppHeader />
        <q-page-container>
            <slot />
        </q-page-container>
    </q-layout>
</template>

<style lang="sass" scoped>
.main 
    background-color: #f7eedc
</style>
