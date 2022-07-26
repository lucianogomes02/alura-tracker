<template>
    <div class="box has-text-weight-bold">
        <div class="columns">
            <div class="column is-7">
                Descrição da Tarefa
            </div>
            <div class="column">
                <CronometroAtividade :tempoEmSegundos="15"/>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import CronometroAtividade from "./CronometroAtividade.vue"

export default defineComponent ({
    name: "TarefaAtividade",
    components: { CronometroAtividade }
})
</script>

<style scoped>
.box {
  background: #FAF0CA;  
}
</style>