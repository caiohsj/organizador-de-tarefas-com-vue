<template>
    <div>
        <lista-de-tarefas
                v-bind:tarefas="tarefas"
                v-on:remover="removerTarefa"
                v-on:pesquisar="pesquisarTarefa"
        ></lista-de-tarefas>
    </div>
</template>

<script>
    import servicoTarefa from "../services/tarefa"
    import ListaDeTarefas from "../components/ListaDeTarefas";
    export default {
        name: "Tarefas",
        components: {ListaDeTarefas},
        data() {
            return {
                tarefas: []
            }
        },
        mounted() {
            this.listarTarefas()
        },
        methods: {
            listarTarefas(){
                servicoTarefa.lista()
                    .then((response) => {
                        this.$Progress.finish()
                        this.tarefas = response.data
                        console.log(this.tarefas)
                    })
                    .catch((response) => {
                        console.log(response.data)
                        this.$Progress.fail()
                    })
            },
            removerTarefa(id){
                servicoTarefa.deletar(id)
                    .then(() => {
                        //Se for removido, é feito a lista das tarefas novamente
                        this.$Progress.finish()
                        this.listarTarefas()
                    })
                    .catch((response) => {
                        console.log(response)
                        this.$Progress.fail()
                    })
            },
            pesquisarTarefa(pesquisa){
                servicoTarefa.buscarPorTitulo(pesquisa)
                    .then((response) => {
                        this.tarefas = response.data
                    })
            }
        }
    }
</script>

<style scoped>

</style>