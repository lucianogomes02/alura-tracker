<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioAtividade @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <TarefaAtividade v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <CaixaAtividades v-if="listaEstaVazia">
          Você não está muito produtivo hoje :(
        </CaixaAtividades>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioAtividade from "./components/FormularioAtividade.vue";
import TarefaAtividade from "./components/TarefaAtividade.vue";
import ITarefa from './interfaces/ITarefa'
import CaixaAtividades from "./components/CaixaAtividades.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioAtividade,
    TarefaAtividade,
    CaixaAtividades
},
  data () {
    return {
      tarefas: [] as ITarefa[]
    }
  },
  computed: {
    listaEstaVazia () : boolean {
      return this.tarefas.length == 0;
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    }
  }
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
