<template>
    <div class="notificacoes">
        <article class="message is-primary">
            <div class="message-header">
                <p>Atenção !</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Texto de Notificação
            </div>
        </article>
        <article class="message is-warning">
            <div class="message-header">
                <p>Atenção !</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Texto de Notificação
            </div>
        </article>
        <article class="message is-danger">
            <div class="message-header">
                <p>Atenção !</p>
                <button class="delete" aria-label="delete"></button>
            </div>
            <div class="message-body">
                Texto de Notificação
            </div>
        </article>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";


export default defineComponent({
    name: 'NotificacoesAtividade'
})
</script>

<style scoped>
.notificacoes {
    position: absolute;
    right: 0;
    width: 300px;
    padding: 8px;
    z-index: 105;
}
</style>