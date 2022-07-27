<template>
  <div class="projetos">
    <h1 class="title">Projetos</h1>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: 'ProjetosAtividade'

})
</script>

<style>
.projetos {
  padding: 1.25rem;
}
</style>