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
          <section>
            <strong>
              {{ tempoDecorrido }}
            </strong>
          </section>
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
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormularioInicio",
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
    };
  },
  computed: {
    tempoDecorrido () : string {
      return new Date(this.tempoEmSegundos * 1000).toISOString().substring(11,19)
    }
  },
  methods: {
    iniciarContagem () {
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos += 1        
      }, 1000)
    },
    finalizarContagem () {
      clearInterval(this.cronometro)
    }
  }
});
</script>

<style>
</style>