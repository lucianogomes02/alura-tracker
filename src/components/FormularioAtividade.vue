<template>
  <div class="box formulario">
    <div class="column">
      <div
        class="is-flex is-align-items-center is-justify-content-space-between"
      >
        <div
          class="column is-5"
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
        <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
                <option
                  :value="projeto.id"
                  v-for="projeto in projetos"
                  :key="projeto.id"
                >
                {{ projeto.nome }}
              </option>
            </select>
          </div>
        </div>
        <div class="column">
          <TemporizadorAtividade @aoTemporizadorFinalizado="finalizarTarefa"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import TemporizadorAtividade from "./TemporizadorAtividade.vue";
import { useStore } from "vuex"
import { key } from "@/store";

export default defineComponent({
    name: "FormularioAtividade",
    components: { TemporizadorAtividade },
    emits: ['aoSalvarTarefa'],
    setup (props, { emit }) {

      const store = useStore(key);

      const projetos = computed(() => store.state.projeto.projetos);
      const descricao = ref("");
      const idProjeto = ref("");

      const finalizarTarefa = (tempoDecorrido: number) : void => {
        emit('aoSalvarTarefa', {
            duracaoEmSegundos: tempoDecorrido,
            descricao: descricao.value,
            projeto: projetos.value.find(projeto => projeto.id == idProjeto.value)
          }
        )
        descricao.value = ''
      }

      return {
        projetos,
        descricao,
        idProjeto,
        finalizarTarefa
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