<template>
      <FormularioAtividade @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <CaixaAtividades v-if="listaEstaVazia">
          Você não está muito produtivo hoje :(
        </CaixaAtividades>
        <TarefaAtividade v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import FormularioAtividade from "../components/FormularioAtividade.vue";
import TarefaAtividade from "../components/TarefaAtividade.vue";
import ITarefa from '../interfaces/ITarefa'
import CaixaAtividades from "../components/CaixaAtividades.vue";

export default defineComponent({
  name: "TarefasAtividade",
  components: {
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

</style>
