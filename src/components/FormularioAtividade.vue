<template>
  <div class="box">
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
          />
        </div>
        <div class="column">
          <TemporizadorAtividade />
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
    components: { TemporizadorAtividade }
});
</script>

<style>
</style>