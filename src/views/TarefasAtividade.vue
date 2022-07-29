<template>
    <FormularioAtividade @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
      <CaixaAtividades v-if="semTarefas">
        Você não está muito produtivo hoje :(
      </CaixaAtividades>
      <TarefaAtividade v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoSelecionarTarefa="selecionarTarefa"/>
      <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if="tarefaSelecionada">
        <div class="modal-background"></div>
        <div class="modal-card">
          <header class="modal-card-head">
            <p class="modal-card-title">Editando Tarefa</p>
            <button @click="fecharModal" class="delete" aria-label="close"></button>
          </header>
          <section class="modal-card-body">
             <div class="field">
               <label for="descricaoDaTarefa" class="label"> Descrição </label>
               <input
                 type="text"
                 class="input"
                 v-model="tarefaSelecionada.descricao"
                 id="descricaoDaTarefa"
               />
             </div>
          </section>
          <footer class="modal-card-foot">
            <button class="button is-success">Salvar</button>
            <button @click="fecharModal" class="button">Cancelar</button>
          </footer>
        </div>
      </div>
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
  data () {
    return {
      tarefaSelecionada: null as ITarefa | null
    }
  },
  computed: {
    semTarefas () : boolean {
      return this.tarefas.length == 0;
    }
  },
  methods: {
    salvarTarefa (tarefa: ITarefa) {
      this.store.dispatch(CADASTRAR_TAREFA, tarefa);
    },
    selecionarTarefa (tarefa: ITarefa) {
      this.tarefaSelecionada = tarefa
    },
    fecharModal () {
      this.tarefaSelecionada = null
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

<style scoped>
.modal-card-head {
  height: 60px;
}
.modal-card-title {
  text-align: left;
}
</style>
