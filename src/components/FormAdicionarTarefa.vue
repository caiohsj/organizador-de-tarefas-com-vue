<template>
    <div>
        <b-container>
            <b-form>
                <b-form-group
                        id="input-group-1"
                        label="Título da tarefa"
                        label-for="input-titulo"
                        align="left"
                >
                    <b-form-input
                            id="input-titulo"
                            v-model="tarefa.titulo"
                            type="text"
                            required
                    ></b-form-input>
                </b-form-group>

                <b-form-group
                        id="input-group-2"
                        label="Descrição da Tarefa"
                        label-for="input-descricao"
                        align="left"
                >
                    <b-form-textarea
                            id="textarea"
                            v-model="tarefa.descricao"
                            placeholder="Escreva aqui a descrição da tarefa..."
                            rows="3"
                            max-rows="6"
                    ></b-form-textarea>
                </b-form-group>

                <b-button
                        type="button"
                        variant="primary"
                        v-on:click="emitirEvento"
                        class="mr-1"
                >
                    Salvar
                </b-button>
                <b-button type="reset" variant="secondary">Limpar</b-button>
            </b-form>
        </b-container>
    </div>
</template>

<script>
    import Tarefa from "../models/Tarefa";
    import {BContainer, BForm, BButton, BFormGroup, BFormInput, BFormTextarea} from 'bootstrap-vue'
    export default {
        name: "FormAdicionarTarefa",
        components: {
            BContainer, BForm, BButton, BFormGroup, BFormInput, BFormTextarea
        },
        data(){
            return {
                tarefa: new Tarefa()
            }
        },
        methods: {
            emitirEvento(){
                this.$emit('salvarTarefa', this.tarefa)
            }
        }
    }
</script>

<style scoped>

</style>