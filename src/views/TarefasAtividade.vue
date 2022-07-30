<template>
    <FormularioAtividade @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">
      <div class="field">
        <p class="control has-icons-left">
          <input class="input" type="text" placeholder="Procure uma tarefa" v-model="filtro">
          <span class="icon is-small is-left">
            <i class="fas fa-search"></i>
          </span>
        </p>
      </div>
      <CaixaAtividades v-if="semTarefas">
        Você não está muito produtivo hoje :(
      </CaixaAtividades>
      <TarefaAtividade v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" @aoSelecionarTarefa="selecionarTarefa"/>
      <TarefaModal :mostrar="tarefaSelecionada != null">
          <template v-slot:cabecalho>
            <p class="modal-card-title">Editando Tarefa</p>
            <button @click="fecharModal" class="delete" aria-label="close"></button>
          </template>
          <template v-slot:corpo>
             <div class="field">
               <label for="descricaoDaTarefa" class="label"> Descrição </label>
               <input
                 type="text"
                 class="input"
                 v-model="tarefaSelecionada.descricao"
                 id="descricaoDaTarefa"
               />
             </div>
          </template>
          <template v-slot:rodape>
            <button @click="alterarTarefa" class="button is-success">Salvar</button>
            <button @click="fecharModal" class="button">Cancelar</button>
          </template>
      </TarefaModal>
    </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watchEffect } from "vue";
import FormularioAtividade from "../components/FormularioAtividade.vue";
import TarefaAtividade from "../components/TarefaAtividade.vue";
import ITarefa from '../interfaces/ITarefa'
import CaixaAtividades from "../components/CaixaAtividades.vue";
import TarefaModal from "../components/TarefaModal.vue";
import { useStore } from "@/store";
import { OBTER_TAREFAS, CADASTRAR_TAREFA, OBTER_PROJETOS, ALTERAR_TAREFA} from "@/store/tipo-acoes";

export default defineComponent({
  name: "TarefasAtividade",
  components: {
    FormularioAtividade,
    TarefaAtividade,
    CaixaAtividades,
    TarefaModal,
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
    },
    alterarTarefa () {
      this.store.dispatch(ALTERAR_TAREFA, this.tarefaSelecionada)
        .then(() => this.fecharModal())
    }
  },
  setup () {
    const store = useStore();
    store.dispatch(OBTER_TAREFAS);
    store.dispatch(OBTER_PROJETOS);

    const filtro = ref("");

    /* const tarefas = computed(() => 
    store.state.tarefa.tarefas.filter(
      (tarefa) => !filtro.value || tarefa.descricao.includes(filtro.value)
      )
    ); */

    watchEffect(() => {
      store.dispatch(OBTER_TAREFAS, filtro.value)
    });

    return {
      tarefas: computed(() => store.state.tarefa.tarefas),
      store,
      filtro,
    }
  }
});
</script>

<style>

</style>
