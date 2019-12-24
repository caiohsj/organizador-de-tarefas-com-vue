<template>
    <div>
        <b-container>

            <b-form inline class="mb-3">
                <b-form-input
                        id="inline-form-input-name"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        placeholder="Buscar tarefa pelo título"
                        v-model="pesquisa.titulo"
                ></b-form-input>

                <b-button variant="secondary" type="button" v-on:click="$emit('pesquisar', pesquisa)">Pesquisar</b-button>
            </b-form>

            <b-card-group columns>

                <b-card v-for="tarefa in tarefas"
                        border-variant="success"
                        align="center"
                        v-bind:key="tarefa.id"
                        header-tag="header" footer-tag="footer"
                >

                    <template v-slot:header>
                        <h4 class="mb-0 font-weight-bold">{{tarefa.titulo}}</h4>
                    </template>

                    <b-card-text>{{tarefa.descricao}}</b-card-text>

                    <template v-slot:footer>
                        <b-button variant="outline-danger"
                                  block
                                  v-on:click="$emit('remover', tarefa.id)"
                        >
                            Remover
                        </b-button>
                    </template>
                </b-card>

            </b-card-group>
        </b-container>
    </div>
</template>

<script>
    import {BContainer,BCardGroup, BCard, BCardText, BButton, BForm, BFormInput} from 'bootstrap-vue'
    export default {
        name: "ListaDeTarefas",
        components: {
            BCardGroup,
            BCard,
            BCardText,
            BContainer,
            BButton,
            BForm,
            BFormInput
        },
        props: ['tarefas'],
        data() {
            return {
                pesquisa:{}
            }
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>