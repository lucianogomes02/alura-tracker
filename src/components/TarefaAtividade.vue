<template>
    <CaixaAtividades>
        <div class="columns clicavel" @click="tarefaSelecionada">
            <div class="column is-4">
                {{ tarefa.descricao || 'Tarefa Sem Descrição'}}
            </div>
            <div class="column is-3">
                {{ tarefa.projeto?.nome || 'N/D' }}
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
    emits: ['aoSelecionarTarefa'],
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true,
        }
    },
    methods: {
        tarefaSelecionada() : void {
            this.$emit('aoSelecionarTarefa', this.tarefa)
        }
    }
})
</script>

<style scoped>
.clicavel {
    cursor: pointer;
}
</style>