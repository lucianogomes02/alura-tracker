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
          <div class="is-flex is-align-items-center is-justify-content-space-between">
            <CronometroAtividade :tempoEmSegundos="tempoEmSegundos" />
            <button class="button" @click="iniciarContagem">
              <span class="icon">
                <i class="fas fa-play"></i>
              </span>
              <span>play</span>
            </button>
            <button class="button" @click="finalizarContagem">
              <span class="icon">
                <i class="fas fa-stop"></i>
              </span>
              <span>stop</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CronometroAtividade from "./CronometroAtividade.vue";

export default defineComponent({
    name: "FormularioAtividade",
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
        };
    },
    methods: {
        iniciarContagem() {
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos += 1;
            }, 1000);
        },
        finalizarContagem() {
            clearInterval(this.cronometro);
        }
    },
    components: { CronometroAtividade }
});
</script>

<style>
</style>