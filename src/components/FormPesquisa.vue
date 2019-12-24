<template>
    <div>

    </div>
</template>

<script>
    import {BForm, BButton, BFormInput} from 'bootstrap-vue'
    import Tarefa from "../models/Tarefa";
    export default {
        name: "FormPesquisa",
        components: {
            BForm,
            BButton,
            BFormInput
        },
        data() {
            return {
                tarefa: new Tarefa()
            }
        }
    }
</script>

<style scoped>

</style>