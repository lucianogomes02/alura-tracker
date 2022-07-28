<template>
      <FormularioAtividade @aoSalvarTarefa="salvarTarefa"/>
      <div class="lista">
        <CaixaAtividades v-if="semTarefas">
          Você não está muito produtivo hoje :(
        </CaixaAtividades>
        <TarefaAtividade v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
      </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import FormularioAtividade from "../components/FormularioAtividade.vue";
import TarefaAtividade from "../components/TarefaAtividade.vue";
import ITarefa from '../interfaces/ITarefa'
import CaixaAtividades from "../components/CaixaAtividades.vue";
import { useStore } from "@/store";
import { OBTER_TAREFAS, CADASTRAR_TAREFA, OBTER_PROJETOS} from "@/store/tipo-acoes";

export default defineComponent({
  name: "TarefasAtividade",
  components: {
    FormularioAtividade,
    TarefaAtividade,
    CaixaAtividades
  },
  computed: {
    semTarefas () : boolean {
      return this.tarefas.length == 0;
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa);
    }
  },
  setup () {
    const store = useStore()
    store.dispatch(OBTER_TAREFAS)
    store.dispatch(OBTER_PROJETOS)
    return {
      tarefas: computed(() => store.state.tarefas),
      store
    }
  }
});
</script>

<style>

</style>
