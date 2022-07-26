<template>
  <div class="box formulario">
    <div class="column">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <div
          class="column is-8"
          role="form"
          aria-label="Formulário para ciração de uma nova tarefa"
        >
          <input
            type="text"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
            v-model="descricao"
          />
        </div>
        <div class="column">
          <TemporizadorAtividade @aoTemporizadorFinalizado="finalizarTarefa"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TemporizadorAtividade from "./TemporizadorAtividade.vue";

export default defineComponent({
    name: "FormularioAtividade",
    components: { TemporizadorAtividade },
    emits: ['aoSalvarTarefa'],
    data() {
      return {
        descricao: ''
      }
    },
    methods: {
      finalizarTarefa (tempoDecorrido: number) : void {
        this.$emit('aoSalvarTarefa', {
            duracaoEmSegundos: tempoDecorrido,
            descricao: this.descricao,
          }
        )
        this.descricao = ''
      }
    }
});
</script>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>