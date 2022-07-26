<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <FormularioAtividade />
      <div class="lista">
        <TarefaAtividade />
        <TarefaAtividade />
        <TarefaAtividade />
        <TarefaAtividade />
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";
import FormularioAtividade from "./components/FormularioAtividade.vue";
import TarefaAtividade from "./components/TarefaAtividade.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    FormularioAtividade,
    TarefaAtividade,
},
});
</script>

<style>
.lista {
  padding: 1.25rem;
}
</style>
