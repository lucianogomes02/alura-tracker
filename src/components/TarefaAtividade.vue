<template>
    <CaixaAtividades>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa Sem Descrição'}}
            </div>
            <div class="column">
                <CronometroAtividade :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
            </div>
        </div>
    </CaixaAtividades>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import CronometroAtividade from "./CronometroAtividade.vue"
import ITarefa from "@/interfaces/ITarefa"
import CaixaAtividades from './CaixaAtividades.vue'

export default defineComponent ({
    name: "TarefaAtividade",
    components: { CronometroAtividade, CaixaAtividades },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true,
        }
    }
})
</script>

<style>
</style>