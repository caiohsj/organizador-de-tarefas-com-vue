<template>
    <div>
        <form-adicionar-tarefa v-on:salvarTarefa="salvar"></form-adicionar-tarefa>

    </div>
</template>

<script>
    import FormAdicionarTarefa from "../components/FormAdicionarTarefa";
    import tarefaServico from '../services/tarefa'
    export default {
        name: "AdicionarTarefa",
        components: {FormAdicionarTarefa},
        data() {
          return {
              novaTarefa: {}
          }
        },
        methods: {
            salvar(tarefa){
                this.novaTarefa.titulo = tarefa.titulo
                this.novaTarefa.descricao = tarefa.descricao

                tarefaServico.criar(this.novaTarefa)
                    .then(() => {
                        this.$router.push('/')
                    })
                    .catch((response) => {
                        console.log(response)
                    })
            }
        }
    }
</script>

<style scoped>

</style>