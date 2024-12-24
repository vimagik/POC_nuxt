<script setup>
const { login } = useDirectusAuth();
const user = useDirectusUser();

async function onSubmit() {
    try {
        await login({ email: "admin@example.com", password: "d1r3ctu5" });
        console.log("Залогинились")
    } catch (e) { }
};

const email = user.value.email;
</script>

<template>
    <div>
        <q-card dark bordered class="bg-grey-9 my-card">
            <q-card-section>
                <div class="text-h6">Our Changing Planet</div>
                <div>{{ email }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
            </q-card-section>

            <q-separator dark inset />

            <q-card-section>
                <q-btn @click="onSubmit" color="white" text-color="black">Логин</q-btn>
            </q-card-section>
        </q-card>
    </div>
</template>

<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 250px
</style>